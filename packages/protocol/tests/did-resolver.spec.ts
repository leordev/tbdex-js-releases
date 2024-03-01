import { expect } from 'chai';
import { resolveDid, isVerificationMethod } from '../src/did-resolver';
import { DidDocument, VerificationMethod, DidService } from '@web5/dids';
import sinon from 'sinon';

describe('DID Resolver', () => {
  describe('resolveDid', () => {
    it('resolves a valid DID correctly', async () => {
      const mockDid = 'did:example:123';
      const mockDidDocument = { id: mockDid } as DidDocument;
      const resolveStub = sinon.stub().resolves({ didResolutionMetadata: {}, didDocument: mockDidDocument });
      sinon.replace(DidResolver, 'resolve', resolveStub);

      const didDocument = await resolveDid(mockDid);
      expect(didDocument).to.deep.equal(mockDidDocument);
      sinon.restore();
    });

    it('throws an error for an invalid DID', async () => {
      const mockDid = 'did:example:invalid';
      const resolveStub = sinon.stub().resolves({ didResolutionMetadata: { error: 'invalidDid' }, didDocument: null });
      sinon.replace(DidResolver, 'resolve', resolveStub);

      try {
        await resolveDid(mockDid);
        expect.fail('Expected error was not thrown');
      } catch (error) {
        expect(error.message).to.equal(`Failed to resolve DID: ${mockDid}. Error: invalidDid`);
      }
      sinon.restore();
    });

    it('throws an error when didResolutionMetadata is missing', async () => {
      const mockDid = 'did:example:missingMetadata';
      const resolveStub = sinon.stub().resolves({ didResolutionMetadata: null, didDocument: {} as DidDocument });
      sinon.replace(DidResolver, 'resolve', resolveStub);

      try {
        await resolveDid(mockDid);
        expect.fail('Expected error was not thrown');
      } catch (error) {
        expect(error.message).to.equal(`Failed to resolve DID: ${mockDid}. Error: undefined`);
      }
      sinon.restore();
    });
  });

  describe('isVerificationMethod', () => {
    it('returns true for a VerificationMethod', () => {
      const verificationMethod = {
        id: 'did:example:123#keys-1',
        type: 'RsaVerificationKey2018',
        controller: 'did:example:123',
        publicKeyPem: '-----BEGIN PUBLIC KEY-----...'
      } as VerificationMethod;

      expect(isVerificationMethod(verificationMethod)).to.be.true;
    });

    it('returns false for a DidDocument', () => {
      const didDocument = { id: 'did:example:123' } as DidDocument;
      expect(isVerificationMethod(didDocument)).to.be.false;
    });

    it('returns false for a DidService', () => {
      const didService = {
        id: 'did:example:123;example',
        type: 'LinkedDomains',
        serviceEndpoint: 'https://example.com/'
      } as DidService;

      expect(isVerificationMethod(didService)).to.be.false;
    });

    it('returns false for null', () => {
      expect(isVerificationMethod(null)).to.be.false;
    });
  });
});

const fs = require("fs");
const path = require("path");

const exampleUnsigned = require("./example.unsigned.json");

const authenticateMeActionDoc = {
  "@context": [
    "https://w3id.org/did/v1",
    "https://web-payments.org/contexts/security-v2.jsonld",
    {
      schema: "http://schema.org/",
      action: "schema:action"
    }
  ],
  action: "AuthenticateMe"
};

const didKeypair = {
  passphrase: null,
  id: "did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP",
  controller: "did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP",
  type: "Ed25519VerificationKey2018",
  privateKeyBase58:
    "55dKnusKVZjGK9rtTQgT3usTnALuChkzQpoksz4jES5G7AKMCpQCBt3azfko5oTMQD11gPxQ1bFRAYWSwcYSPdPV",
  publicKeyBase58: "25C16YaTbD96wAvdokKnTmD8ruWvYARDkc6nfNEA3L71"
};

const didKeyDoc = {
  "@context": "https://w3id.org/did/v1",
  id: "did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP",
  publicKey: [
    {
      id: "did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP",
      type: "Ed25519VerificationKey2018",
      controller: "did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP",
      publicKeyBase58: "25C16YaTbD96wAvdokKnTmD8ruWvYARDkc6nfNEA3L71"
    }
  ],
  authentication: ["did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP"],
  assertionMethod: ["did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP"],
  capabilityDelegation: [
    "did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP"
  ],
  capabilityInvocation: [
    "did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP"
  ],
  keyAgreement: [
    {
      id:
        "did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP#zCDHgu3FAkC7ugAMPB7UMjMssNx6XXFnWFJXF6FYU98CLH",
      type: "X25519KeyAgreementKey2019",
      controller: "did:key:z6MkfXT3gnptvkda3fmLVKHdJrm8gUnmx3faSd1iVeCAxYtP",
      publicKeyBase58: "DnyBg4MYpNdF4JQihynmCiC5hpiZh5tkQdx4QTfk1xE5"
    }
  ]
};

const documentLoader = url => {
  // console.log(url);

  if (url === "https://w3id.org/did/v1") {
    const context = JSON.parse(
      fs
        .readFileSync(
          path.resolve(__dirname, "../../../../docs/context/security-v1.jsonld")
        )
        .toString()
    );
    return {
      contextUrl: null, // this is for a context via a link header
      document: context, // this is the actual document that was loaded
      documentUrl: url // this is the actual context URL after redirects
    };
  }

  if (url === "https://web-payments.org/contexts/security-v1.jsonld") {
    const context = JSON.parse(
      fs
        .readFileSync(
          path.resolve(__dirname, "../../../../docs/context/security-v1.jsonld")
        )
        .toString()
    );
    return {
      contextUrl: null, // this is for a context via a link header
      document: context, // this is the actual document that was loaded
      documentUrl: url // this is the actual context URL after redirects
    };
  }

  if (url === "https://web-payments.org/contexts/security-v2.jsonld") {
    const context = JSON.parse(
      fs
        .readFileSync(
          path.resolve(__dirname, "../../../../docs/context/security-v2.jsonld")
        )
        .toString()
    );
    return {
      contextUrl: null, // this is for a context via a link header
      document: context, // this is the actual document that was loaded
      documentUrl: url // this is the actual context URL after redirects
    };
  }

  if (
    url ===
    "https://w3c-ccg.github.io/vc-json-schemas/context/vc-json-schema-v0.0.jsonld"
  ) {
    const context = JSON.parse(
      fs
        .readFileSync(
          path.resolve(
            __dirname,
            "../../../../docs/context/vc-json-schema-v0.0.jsonld"
          )
        )
        .toString()
    );
    return {
      contextUrl: null, // this is for a context via a link header
      document: context, // this is the actual document that was loaded
      documentUrl: url // this is the actual context URL after redirects
    };
  }

  console.error("No custom context support for " + url);
  throw new Error("No custom context support for " + url);
};

module.exports = {
  didKeypair,
  didKeyDoc,
  exampleUnsigned,
  authenticateMeActionDoc,
  documentLoader
};
module.exports = ({ env }) => ({
  // update here your cloudinary credentials
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: "di1xqihrd",
        api_key: "343367415876686",
        api_secret: "O_aoUfs-pVIh1BHDM8LnDsTTNWc",
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
export default function TrustedEnterprises() {
  const logos = [
    "https://api.builder.io/api/v1/image/assets/TEMP/45cf01306ea74dbd7ed6bb9e04feee19b7cac460?width=360",
    "https://api.builder.io/api/v1/image/assets/TEMP/6f796713a6923c059357e6a886124ddecf2cd54a?width=348",
    "https://api.builder.io/api/v1/image/assets/TEMP/6f6f9c53cda58040d0ec7ad11a1a85a1d0d9a938?width=384",
    "https://api.builder.io/api/v1/image/assets/TEMP/928741f96677dddee2ec859e230227f65761c712?width=384",
    "https://api.builder.io/api/v1/image/assets/TEMP/978d7bb9b354564a5c998b8770d8b4066837d964?width=242",
    "https://api.builder.io/api/v1/image/assets/TEMP/2e9d6cf8e282666a2c4a051bb9d7cbe1c6611a72?width=386",
    "https://api.builder.io/api/v1/image/assets/TEMP/dc6ac772d0207dd9a85c4b58f1ef4e31cc19d98b?width=348",
    "https://api.builder.io/api/v1/image/assets/TEMP/aa5cc740cdd3531a51fa9ff3c43f5738ce49a8ec?width=386",
  ];

  return (
    <section className="w-full blue-50 py-24">
      <div className="container mx-auto max-w-[1320px] px-6">
        <h2 className="text-[35px] font-bold leading-[52.5px] text-[#248BB3] text-center mb-12">
          Trusted by Global Enterprises
        </h2>

        <div className="relative overflow-hidden">
          <div className="flex items-center justify-center gap-14 flex-wrap">
            {logos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo}
                  alt={`Partner logo ${index + 1}`}
                  className="h-20 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

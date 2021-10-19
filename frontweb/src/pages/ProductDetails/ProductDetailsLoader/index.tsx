import ContentLoader from 'react-content-loader'

const ProductDetailsLoader = () => (
    <div className="card-loader-container">
    <ContentLoader
      speed={2}
      width={300}
      height={300}
      viewBox="0 0 300 300"
      backgroundColor="#f3f3f3"
      foregroundColor="#acabab"
    >
      <rect x="0" y="0" rx="2" ry="2" width="300" height="300" />
    </ContentLoader>
  </div>
)

export default ProductDetailsLoader;
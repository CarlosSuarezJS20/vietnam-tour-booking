interface Props {
  text: string;
}

const ProductDescription = ({ text }: Props) => {
  const paragraphs = text.split(/\n\n+/).filter(Boolean);

  return (
    <section className="max-w-3xl mx-auto px-6 py-14">
      <h2 className="text-2xl font-bold text-gray-900 font-sans mb-6">About this tour</h2>
      <div className="space-y-4">
        {paragraphs.map((para, i) => (
          <p key={i} className="text-base text-gray-600 font-sans leading-relaxed">
            {para.trim()}
          </p>
        ))}
      </div>
    </section>
  );
};

export default ProductDescription;

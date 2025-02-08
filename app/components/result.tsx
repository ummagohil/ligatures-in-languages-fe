interface ResultProps {
  translation: string;
  error: string;
}

export default function Result({ translation, error }: ResultProps) {
  return (
    <div className="bg-[#CB9B8E] text-[#B24703] p-24 rounded-2xl text-center">
      {error ? (
        <p className="text-red-600">{error}</p>
      ) : (
        translation || "Translation will appear here"
      )}
    </div>
  );
}

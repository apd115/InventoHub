 export const Card = ({ title, content, isHtml = false, isList = false }) => {
    return (
      <div className="bg-white shadow-md rounded-2xl p-6 space-y-4 border border-amber-200">
        {title && <h2 className="text-2xl font-semibold text-amber-800">{title}</h2>}
  
        <div className="text-gray-800 text-lg leading-relaxed">
          {isHtml && typeof content === "string" ? (
            <div dangerouslySetInnerHTML={{ __html: content }} />
          ) : isList && Array.isArray(content) ? (
            <ul className="list-disc list-inside space-y-2">
              {content.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          ) : (
            content && <p>{content}</p>
          )}
        </div>
      </div>
    );
  };
  
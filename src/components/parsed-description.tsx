import parse from 'html-react-parser';
import Image from 'next/image';

const ParsedDescription = ({ description }: { description: string }) => {
  return (
    <p className="text-sm whitespace-pre-line">
      {parse(description, {
        replace: (domNode) => {
          if (domNode.type === 'tag' && domNode.name === 'img') {
            return (
              <Image
                src={domNode.attribs.src}
                alt={domNode.attribs.alt}
                width={20}
                height={20}
                className="inline-block align-middle"
              />
            );
          }
        }
      })}
    </p>
  );
};

export default ParsedDescription;

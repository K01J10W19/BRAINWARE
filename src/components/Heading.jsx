import TagLine from "./Tagline";
import Reveal from "./Reveal";

const Heading = ({ className, title, text, tag }) => {
    return (
        <div
        className={`${className} max-w-[50rem] mx-auto mb-12 lg:mb-20 md:text-center`}
        >
        {tag && (
            <Reveal variant="fade">
            <TagLine className="mb-4 md:justify-center">{tag}</TagLine>
            </Reveal>
        )}
        {title && (
            <Reveal as="h2" className="h2" delay={100}>
            {title}
            </Reveal>
        )}
        {text && (
            <Reveal as="p" className="body-2 mt-4 text-n-4" delay={200}>
            {text}
            </Reveal>
        )}
        </div>
    );
};

export default Heading;

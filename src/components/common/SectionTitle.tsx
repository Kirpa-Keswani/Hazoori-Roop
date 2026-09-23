interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({
  title,
  subtitle,
}: SectionTitleProps) {

  return (
    <div className="text-center mb-12">

      <h2 className="
      text-4xl
      md:text-5xl
      font-semibold
      text-gray-900
      ">
        {title}
      </h2>


      {subtitle && (
        <p className="
        mt-4
        text-gray-600
        ">
          {subtitle}
        </p>
      )}

    </div>
  );
}
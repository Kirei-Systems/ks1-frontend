interface InputProps {
    label?: string;
    name?: string;
    className?: string;
    type?: string;
    placeholder?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({
    label,
    name,
    className = "",
    type = "text",
    placeholder,
    value,
    onChange,
}: InputProps) {

    const baseStyle = `
        w-full
        px-4 py-2
        border border-gray-300
        rounded-lg
        text-sm
        focus:outline-none
        focus:border-[#1183E5]
        focus:ring-2
        focus:ring-[#1183E5]
        transition
    `;

    return (
        <div className="w-full flex flex-col gap-1">
            {label && (
                <label htmlFor={name} className="text-sm font-medium">
                    {label}
                </label>
            )}

            <input
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${baseStyle} ${className}`}
            />
        </div>
    );
}

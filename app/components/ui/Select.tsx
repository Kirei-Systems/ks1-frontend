interface SelectOption {
    value: string | number;
    label: string;
}

interface SelectProps {
    label?: string;
    name?: string;
    className?: string;
    value?: string | number;
    onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    options: SelectOption[];
}

export default function Select({
    label,
    name,
    className = "",
    value,
    onChange,
    options
}: SelectProps) {

    const baseStyle = `
        w-full
        px-4 py-2
        border border-gray-300
        rounded-lg
        text-sm
        appearance-none
        bg-white
        focus:outline-none
        focus:border-[#1183E5]
        focus:ring-2
        focus:ring-[#1183E5]
        transition
    `;

    return (
        <div className="w-full flex flex-col gap-1 relative">
            {label && (
                <label htmlFor={name} className="text-sm font-medium text-gray-700">
                    {label}
                </label>
            )}

            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className={`${baseStyle} ${className}`}
            >
                {options.map((opt) => (
                    <option key={opt.value} value={opt.value}>
                        {opt.label}
                    </option>
                ))}
            </select>

            <div className="pointer-events-none absolute right-3 bottom-2 text-gray-500">
                ▼
            </div>
        </div>
    );
}

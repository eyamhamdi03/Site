import { IconProps } from "@/types/iconProps";
import clsx from "clsx";
import { Spinner } from "../spinner/spinner";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "disabled" | "icon";
    icon?: IconProps;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children?: React.ReactNode;
}

export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,
}: Props) => {
    let variantStyles: string = "",
        sizeStyles: string = "",
        iconSize: number = 0;

    // Variant styles
    switch (variant) {
        case "accent": // Default
            variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
            break;
        case "secondary":
            variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
            break;
        case "disabled":
            variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 cursor-not-allowed rounded";
            break;
        case "icon":
            if (iconTheme === "accent") {
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded-full";
            }
            if (iconTheme === "secondary") {
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full";
            }
            if (iconTheme === "gray") {
                variantStyles = "bg-gray-700 hover:bg-primary-600 text-white rounded-full";
            }
            break;
        case "outline":
            variantStyles = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
            break;
    }

    // Size styles
    switch (size) {
        case "small":
            sizeStyles = `text-caption3 font-medium ${
                variant === "icon" ? "flex items-center justify-center w-[40px] h-[40px]" : "px-[14px] py-[12px]"
            }`;
            iconSize = 18;
            break;
        case "medium": // Default
            sizeStyles = `text-caption font-medium ${
                variant === "icon" ? "flex items-center justify-center w-[50px] h-[50px]" : "px-[18px] py-[15px]"
            }`;
            iconSize = 20;
            break;
        case "large":
            sizeStyles = `text-caption1 font-medium ${
                variant === "icon" ? "flex items-center justify-center w-[60px] h-[60px]" : "px-[22px] py-[18px]"
            }`;
            iconSize = 24;
            break;
    }

    // Determine spinner variant
    const spinnerVariant = variant === "accent" || variant === "icon" ? "white" : "primary";

    return (
        <button
            type="button"
            className={clsx(
                variantStyles,
                sizeStyles,
                "relative", 
                isLoading && "cursor-wait",
                disabled && "opacity-50 cursor-not-allowed"
            )}
            onClick={() => console.log("click")}
            disabled={disabled || isLoading} // Disable button when loading
        >
            {/* Loading spinner */}
            {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center">
                    <Spinner size="small" variant={spinnerVariant} />
                </div>
            )}

            {/* Button content */}
            <div className={clsx(isLoading && "invisible")}>
                {icon && variant === "icon" ? (
                    <icon.icon size={iconSize} />
                ) : (
                    <div className={clsx(icon && "flex items-center gap-2")}>
                        {icon && iconPosition === "left" && <icon.icon size={iconSize} />}
                        {children}
                        {icon && iconPosition === "right" && <icon.icon size={iconSize} />}
                    </div>
                )}
            </div>
        </button>
    );
};
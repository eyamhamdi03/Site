import clsx from "clsx";

interface Props {
    size ?: "small" | "medium" | "large";
    variant ?: "accent"| "secondary" | "outline" | "disabled" |"icon";
    icon?: "" ;
    iconTheme?: "accent"| "secondary" | "gray";
    iconPosition?: "left" | "right" ;
    disabled?:boolean ; 
    isLoading?: boolean;
    children?: React.ReactNode;
}


export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme="accent",
    iconPosition="right",
    disabled,
    isLoading,
    children,
    }:
    Props) => {
        let variantStyles :string = "", 
        sizeStyles : string ="",
        iconSize : number = 0;

        switch (variant)
        {
            case "accent": //Default
                variantStyles = "bg-primary hover:bg-primary-400 text-white rounded";
                break;
            case "secondary":
                variantStyles = "bg-primary-200 hover:bg-primary-300/50 text-primary rounded";
                break;
            case "disabled":
                variantStyles = "bg-gray-400 border border-gray-500 text-gray-600 cursor-not-allowed rounded";
                break;
            case "icon":
                break;
            case "outline":
                variantStyles = "bg-white hover:bg-gray-400/50 border border-gray-500 text-gray-900 rounded";
                break;
        }
        switch (size) {
            case "small":
              sizeStyles = "px-3 py-1 text-sm";
              break;
            case "medium":
              sizeStyles = "px-4 py-2 text-base";
              break;
            case "large":
              sizeStyles = "px-6 py-3 text-lg";
              break;
            default:
              sizeStyles = "px-4 py-2 text-base";
          }
    return (
        <>
        <button 
            type="button" 
            className={clsx(variantStyles , iconSize)} 
            onClick={()=>console.log('click')} 
            disabled={disabled}
        >
            {children}
        </button>
        </>
    );
}
const PrimaryButton = ({ content }: { content: string }) => {
    return (
        <button
            type="button"
            className="bg-primary text-background px-8 py-2 md:px-12 md:py-3 text-base md:text-xl font-[700] lg:font-[900] cursor-pointer"
        >
            {content}
        </button>
    );
};

export default PrimaryButton;

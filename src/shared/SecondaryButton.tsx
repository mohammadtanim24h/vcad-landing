const SecondaryButton = ({ content }: { content: string }) => {
    return (
        <button
            type="button"
            className="bg-background text-primary border border-primary p-1 md:p-4 text-base md:text-xl font-[700] lg:font-[900] cursor-pointer"
        >
            {content}
        </button>
    );
};

export default SecondaryButton;

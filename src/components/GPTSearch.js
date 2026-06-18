import GPTMovieSuggestions from "./GPTMovieSuggestions";
import GPTSearchBar from "./GPTSearchBar";

const GPTSearch = () => {
    return (
        <div className="relative w-full h-screen">
            <img
          className="absolute inset-0 w-full h-full object-cover -z-30"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg"
          srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_large.jpg 2000w,
                  https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_medium.jpg 1279w,
                  https://assets.nflxext.com/ffe/siteui/vlv3/435e8bb8-7f1b-49cb-8da8-bff997124294/web/IN-en-20260511-TRIFECTA-perspective_ec39852e-0b48-4e8a-b415-dd8376cd83ce_small.jpg 959w"
          alt=""
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/50 -z-20" />
        <div className="flex flex-col gap-16">
        <div className="w-full pt-40 flex justify-center">
        <GPTSearchBar />
        </div>
        <div className="flex justify-center">
        <GPTMovieSuggestions />
        </div>
        </div>
        </div>
    )
}

export default GPTSearch;
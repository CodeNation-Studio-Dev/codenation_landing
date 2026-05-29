import { ArticleSocials } from "@/src/_components/articleLayout/ArticleSocials";
import { ArticleHeader } from "@components/articleLayout/ArticleHeader";
import { ArticleSidebar } from "@components/articleLayout/ArticleSidebar";

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col">
      <ArticleHeader />
      <div className="flex mt-20">
        <ArticleSidebar />
        {children}
        <ArticleSocials />
      </div>
    </div>
  );
};

export default Layout;

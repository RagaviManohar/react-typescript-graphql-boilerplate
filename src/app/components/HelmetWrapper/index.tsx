import { Helmet } from 'react-helmet-async';

interface HelmetWrapperProps {
  title: string;
  description?: string;
}

export const HelmetWrapper = ({ title, description }: HelmetWrapperProps) => (
  <Helmet>
    <title>{title}</title>
    {description && <meta name="description" content={description} />}
  </Helmet>
);

export default HelmetWrapper;

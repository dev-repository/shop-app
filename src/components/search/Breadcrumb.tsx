import React from 'react';
import useBreadcrumb, { convertBreadcrumbTitle } from '~/utils/useBreadcrumb';
import Link from 'next/link';

interface Props {
  children: any;
}

const BreadcrumbItem: React.FC<Props> = ({ children, ...props }) => {
  return (
    <li
      className="text-sm text-body px-2 5 transition duration-200 ease-in first:ps-0 last:pe-0 hover:text-heading"
      {...props}
    >
      {children}
    </li>
  );
};

const BreadcrumbSeparator: React.FC<Props> = ({ children, ...props }) => {
  return (
    <li className="text-base text-body mt-0 5" {...props}>
      {children}
    </li>
  );
};

export const BreadcrumbItems = (props: any) => {
  let children: any = React.Children.toArray(props.children);

  children = children.map((child: string, index: number) => (
    <BreadcrumbItem key={`breadcrumb_item${index}`}>{child}</BreadcrumbItem>
  ));

  const lastIndex = children.length - 1;

  children = children.reduce((acc: any, child: string, index: number) => {
    const notLast = index < lastIndex;
    if (notLast) {
      acc.push(
        child,
        <BreadcrumbSeparator key={`breadcrumb_sep${index}`}>
          {props.separator}
        </BreadcrumbSeparator>,
      );
    } else {
      acc.push(child);
    }
    return acc;
  }, []);

  return (
    <div className="chawkbazarBreadcrumb flex items-center">
      <ol className="flex items-center w-full overflow-hidden">{children}</ol>
    </div>
  );
};

const Breadcrumb: React.FC<{ separator?: string }> = ({ separator = '/' }) => {
  const breadcrumbs = useBreadcrumb();

  return (
    <BreadcrumbItems separator={separator}>
      <Link href={'/'}>Home</Link>

      {breadcrumbs?.map((breadcrumb: any) => (
        <Link
          className="font-semibold text-heading"
          href={breadcrumb.href}
          key={breadcrumb.href}
        >
          <p className="capitalize">
            {convertBreadcrumbTitle(breadcrumb.breadcrumb)}
          </p>
        </Link>
      ))}
    </BreadcrumbItems>
  );
};

export default Breadcrumb;

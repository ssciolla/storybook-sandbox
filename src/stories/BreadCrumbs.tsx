import { Crumb } from '../models'


interface BreadCrumbsProps {
    crumbs: Crumb[];
}

export function BreadCrumbs (props: BreadCrumbsProps) {

    const homeCrumb = props.crumbs[0]
    const home = <a href={homeCrumb.path}>{homeCrumb.name}</a>

    const crumbEls = props.crumbs.slice(1).map((crumb) => 
        <a href={crumb.path} style={{ paddingLeft: '10px', paddingRight: '10px'}}  >{`> ${crumb.name}`}</a>
    )

    return (
        <p style={{ display: 'inline' }}>
            {home}
            {crumbEls}
        </p>
    );
}

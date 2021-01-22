import { Crumb } from '../models'

import { Link, Typography } from '@material-ui/core'
import { ChevronRight } from '@material-ui/icons'


interface BreadCrumbsProps {
    crumbs: Crumb[];
}

export function BreadCrumbs (props: BreadCrumbsProps) {
    const homeCrumb = props.crumbs[0]
    const home = <Link href={homeCrumb.path}>{homeCrumb.name}</Link>

    const crumbEls = props.crumbs.slice(1).map((crumb) => 
        <Link href={crumb.path} style={{ paddingLeft: '10px', paddingRight: '10px'}}>
            <ChevronRight />
            {crumb.name}
        </Link>
    )

    return (
        <Typography style={{ display: 'inline' }}>
            {home}
            {crumbEls}
        </Typography>
    );
}

// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_site_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.number');
goog.require('sablono.core');
goog.require('sablono.core');
goog.require('om.core');
goog.require('om.core');
clustermap.components.full_report.company_site_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first.call(null,objs);var next_objs = cljs.core.next.call(null,objs);if(next_objs)
{var attrs22163 = link_fn.call(null,type,first_obj);if(cljs.core.map_QMARK_.call(null,attrs22163))
{return React.DOM.div(sablono.interpreter.attributes.call(null,attrs22163),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret.call(null,attrs22163),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret.call(null,cljs.core.count.call(null,next_objs))," more...)"));
}
} else
{return link_fn.call(null,type,first_obj);
}
});
clustermap.components.full_report.company_site_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__22164){var map__22174 = p__22164;var map__22174__$1 = ((cljs.core.seq_QMARK_.call(null,map__22174))?cljs.core.apply.call(null,cljs.core.hash_map,map__22174):map__22174);var opts = map__22174__$1;var path_fn = cljs.core.get.call(null,map__22174__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__22174__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),site);if(typeof clustermap.components.full_report.company_site_list.t22175 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t22175 = (function (company_path,link_fn,path_fn,opts,map__22174,p__22164,owner,site,portfolio_company_site,meta22176){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22174 = map__22174;
this.p__22164 = p__22164;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta22176 = meta22176;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t22175.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t22175.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t22175";
clustermap.components.full_report.company_site_list.t22175.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t22175");
});
clustermap.components.full_report.company_site_list.t22175.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t22175.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22178 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),self__.site);if(cljs.core.map_QMARK_.call(null,attrs22178))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22178),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22178));
}
})(),(function (){var attrs22179 = new cljs.core.Keyword(null,"postcode","postcode",1771366911).cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_.call(null,attrs22179))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22179),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22179));
}
})(),(function (){var attrs22180 = clustermap.components.full_report.company_site_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.Keyword(null,"investor_companies","investor_companies",1928918630).cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_.call(null,attrs22180))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22180),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22180));
}
})(),(function (){var attrs22181 = clustermap.components.full_report.company_site_list.render_many_links.call(null,self__.link_fn,self__.company_path,new cljs.core.Keyword(null,"constituency","constituency",3902864696),(function (){var G__22182 = self__.site;var G__22182__$1 = (((G__22182 == null))?null:new cljs.core.Keyword(null,"boundarylines","boundarylines",2397299847).cljs$core$IFn$_invoke$arity$1(G__22182));var G__22182__$2 = (((G__22182__$1 == null))?null:cljs.core.filter.call(null,((function (G__22182,G__22182__$1){
return (function (bl){return cljs.core._EQ_.call(null,"uk_constituencies",new cljs.core.Keyword(null,"collection_id","collection_id",4487629262).cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22182,G__22182__$1))
,G__22182__$1));return G__22182__$2;
})());if(cljs.core.map_QMARK_.call(null,attrs22181))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs22181),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs22181));
}
})());
});
clustermap.components.full_report.company_site_list.t22175.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22177){var self__ = this;
var _22177__$1 = this;return self__.meta22176;
});
clustermap.components.full_report.company_site_list.t22175.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22177,meta22176__$1){var self__ = this;
var _22177__$1 = this;return (new clustermap.components.full_report.company_site_list.t22175(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22174,self__.p__22164,self__.owner,self__.site,self__.portfolio_company_site,meta22176__$1));
});
clustermap.components.full_report.company_site_list.__GT_t22175 = (function __GT_t22175(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22174__$2,p__22164__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22176){return (new clustermap.components.full_report.company_site_list.t22175(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22174__$2,p__22164__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22176));
});
}
return (new clustermap.components.full_report.company_site_list.t22175(company_path,link_fn,path_fn,opts,map__22174__$1,p__22164,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_site_list.t22189 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t22189 = (function (opts,owner,selection_portfolio_company_sites,company_site_list,meta22190){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_site_list = company_site_list;
this.meta22190 = meta22190;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t22189.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t22189.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t22189";
clustermap.components.full_report.company_site_list.t22189.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t22189");
});
clustermap.components.full_report.company_site_list.t22189.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t22189.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"))),(function (){var attrs22194 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.portfolio_company_site,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"portfolio_company_site_uid","portfolio_company_site_uid",3220116067),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs22194))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs22194),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs22194));
}
})())));
});
clustermap.components.full_report.company_site_list.t22189.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22191){var self__ = this;
var _22191__$1 = this;return self__.meta22190;
});
clustermap.components.full_report.company_site_list.t22189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22191,meta22190__$1){var self__ = this;
var _22191__$1 = this;return (new clustermap.components.full_report.company_site_list.t22189(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_site_list,meta22190__$1));
});
clustermap.components.full_report.company_site_list.__GT_t22189 = (function __GT_t22189(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta22190){return (new clustermap.components.full_report.company_site_list.t22189(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_site_list__$1,meta22190));
});
}
return (new clustermap.components.full_report.company_site_list.t22189(opts,owner,selection_portfolio_company_sites,company_site_list,null));
});

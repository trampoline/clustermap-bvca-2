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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__32984){var map__32993 = p__32984;var map__32993__$1 = ((cljs.core.seq_QMARK_.call(null,map__32993))?cljs.core.apply.call(null,cljs.core.hash_map,map__32993):map__32993);var opts = map__32993__$1;var path_fn = cljs.core.get.call(null,map__32993__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__32993__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t32994 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t32994 = (function (company_path,link_fn,path_fn,opts,map__32993,p__32984,owner,investment,meta32995){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__32993 = map__32993;
this.p__32984 = p__32984;
this.owner = owner;
this.investment = investment;
this.meta32995 = meta32995;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t32994.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t32994.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t32994";
clustermap.components.full_report.company_site_list.t32994.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t32994");
});
clustermap.components.full_report.company_site_list.t32994.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t32994.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs32997 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"portfolio_company_no","portfolio_company_no",771436428).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",4225526294).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs32997))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32997),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32997));
}
})(),(function (){var attrs32998 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",4491774974).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs32998))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32998),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32998));
}
})(),(function (){var attrs32999 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",4797549766).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs32999))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs32999),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs32999));
}
})(),(function (){var attrs33000 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",3478315290).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs33000))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs33000),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs33000));
}
})());
});
clustermap.components.full_report.company_site_list.t32994.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32996){var self__ = this;
var _32996__$1 = this;return self__.meta32995;
});
clustermap.components.full_report.company_site_list.t32994.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32996,meta32995__$1){var self__ = this;
var _32996__$1 = this;return (new clustermap.components.full_report.company_site_list.t32994(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__32993,self__.p__32984,self__.owner,self__.investment,meta32995__$1));
});
clustermap.components.full_report.company_site_list.__GT_t32994 = (function __GT_t32994(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__32993__$2,p__32984__$1,owner__$1,investment__$2,meta32995){return (new clustermap.components.full_report.company_site_list.t32994(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__32993__$2,p__32984__$1,owner__$1,investment__$2,meta32995));
});
}
return (new clustermap.components.full_report.company_site_list.t32994(company_path,link_fn,path_fn,opts,map__32993__$1,p__32984,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){if(typeof clustermap.components.full_report.company_site_list.t33007 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t33007 = (function (opts,owner,investments,company_site_list,meta33008){
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta33008 = meta33008;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t33007.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t33007.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t33007";
clustermap.components.full_report.company_site_list.t33007.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"clustermap.components.full-report.company-site-list/t33007");
});
clustermap.components.full_report.company_site_list.t33007.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t33007.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"))),(function (){var attrs33012 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs33012))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs33012),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs33012));
}
})())));
});
clustermap.components.full_report.company_site_list.t33007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33009){var self__ = this;
var _33009__$1 = this;return self__.meta33008;
});
clustermap.components.full_report.company_site_list.t33007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33009,meta33008__$1){var self__ = this;
var _33009__$1 = this;return (new clustermap.components.full_report.company_site_list.t33007(self__.opts,self__.owner,self__.investments,self__.company_site_list,meta33008__$1));
});
clustermap.components.full_report.company_site_list.__GT_t33007 = (function __GT_t33007(opts__$1,owner__$1,investments__$1,company_site_list__$1,meta33008){return (new clustermap.components.full_report.company_site_list.t33007(opts__$1,owner__$1,investments__$1,company_site_list__$1,meta33008));
});
}
return (new clustermap.components.full_report.company_site_list.t33007(opts,owner,investments,company_site_list,null));
});

// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.components.full_report.company_site_list');
goog.require('cljs.core');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.money');
goog.require('clustermap.components.table');
goog.require('sablono.core');
goog.require('clustermap.formats.money');
goog.require('sablono.core');
goog.require('clustermap.components.table');
goog.require('om.core');
goog.require('om.core');
goog.require('clustermap.formats.money');
goog.require('clustermap.formats.number');
goog.require('clustermap.formats.time');
goog.require('clustermap.formats.number');
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__12097){var map__12106 = p__12097;var map__12106__$1 = ((cljs.core.seq_QMARK_.call(null,map__12106))?cljs.core.apply.call(null,cljs.core.hash_map,map__12106):map__12106);var opts = map__12106__$1;var path_fn = cljs.core.get.call(null,map__12106__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__12106__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t12107 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t12107 = (function (company_path,link_fn,path_fn,opts,map__12106,p__12097,owner,investment,meta12108){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__12106 = map__12106;
this.p__12097 = p__12097;
this.owner = owner;
this.investment = investment;
this.meta12108 = meta12108;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t12107.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t12107.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t12107";
clustermap.components.full_report.company_site_list.t12107.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t12107");
});
clustermap.components.full_report.company_site_list.t12107.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t12107.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs12110 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"portfolio_company_no","portfolio_company_no",771436428).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",4225526294).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs12110))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12110),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12110));
}
})(),(function (){var attrs12111 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",4491774974).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs12111))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12111),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12111));
}
})(),(function (){var attrs12112 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",4797549766).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs12112))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12112),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12112));
}
})(),(function (){var attrs12113 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",3478315290).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs12113))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12113),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12113));
}
})());
});
clustermap.components.full_report.company_site_list.t12107.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12109){var self__ = this;
var _12109__$1 = this;return self__.meta12108;
});
clustermap.components.full_report.company_site_list.t12107.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12109,meta12108__$1){var self__ = this;
var _12109__$1 = this;return (new clustermap.components.full_report.company_site_list.t12107(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__12106,self__.p__12097,self__.owner,self__.investment,meta12108__$1));
});
clustermap.components.full_report.company_site_list.__GT_t12107 = (function __GT_t12107(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__12106__$2,p__12097__$1,owner__$1,investment__$2,meta12108){return (new clustermap.components.full_report.company_site_list.t12107(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__12106__$2,p__12097__$1,owner__$1,investment__$2,meta12108));
});
}
return (new clustermap.components.full_report.company_site_list.t12107(company_path,link_fn,path_fn,opts,map__12106__$1,p__12097,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_site_list.t12128 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t12128 = (function (comm,opts,owner,investments,company_site_list,meta12129){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta12129 = meta12129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t12128.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t12128.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t12128";
clustermap.components.full_report.company_site_list.t12128.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t12128");
});
clustermap.components.full_report.company_site_list.t12128.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t12128.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs12131 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912));if(cljs.core.map_QMARK_.call(null,attrs12131))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs12131)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs12132 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Portfolio Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs12132))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12132),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12132));
}
})(),(function (){var attrs12133 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs12133))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12133),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12133));
}
})(),(function (){var attrs12134 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs12134))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12134),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12134));
}
})(),(function (){var attrs12135 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs12135))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12135),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12135));
}
})())),(function (){var attrs12136 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12136))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12136),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12136));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs12131),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs12137 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Portfolio Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs12137))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12137),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12137));
}
})(),(function (){var attrs12138 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs12138))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12138),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12138));
}
})(),(function (){var attrs12139 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs12139))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12139),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12139));
}
})(),(function (){var attrs12140 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs12140))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12140),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12140));
}
})())),(function (){var attrs12141 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12141))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12141),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12141));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
}
});
clustermap.components.full_report.company_site_list.t12128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12130){var self__ = this;
var _12130__$1 = this;return self__.meta12129;
});
clustermap.components.full_report.company_site_list.t12128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12130,meta12129__$1){var self__ = this;
var _12130__$1 = this;return (new clustermap.components.full_report.company_site_list.t12128(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta12129__$1));
});
clustermap.components.full_report.company_site_list.__GT_t12128 = (function __GT_t12128(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta12129){return (new clustermap.components.full_report.company_site_list.t12128(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta12129));
});
}
return (new clustermap.components.full_report.company_site_list.t12128(comm,opts,owner,investments,company_site_list,null));
});

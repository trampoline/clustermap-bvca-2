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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__12087){var map__12096 = p__12087;var map__12096__$1 = ((cljs.core.seq_QMARK_.call(null,map__12096))?cljs.core.apply.call(null,cljs.core.hash_map,map__12096):map__12096);var opts = map__12096__$1;var path_fn = cljs.core.get.call(null,map__12096__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__12096__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t12097 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t12097 = (function (company_path,link_fn,path_fn,opts,map__12096,p__12087,owner,investment,meta12098){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__12096 = map__12096;
this.p__12087 = p__12087;
this.owner = owner;
this.investment = investment;
this.meta12098 = meta12098;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t12097.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t12097.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t12097";
clustermap.components.full_report.company_site_list.t12097.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t12097");
});
clustermap.components.full_report.company_site_list.t12097.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t12097.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs12100 = new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",4225526294).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs12100))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12100),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12100));
}
})(),(function (){var attrs12101 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",4491774974).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs12101))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12101),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12101));
}
})(),(function (){var attrs12102 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",4797549766).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs12102))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12102),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12102));
}
})(),(function (){var attrs12103 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",3478315290).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs12103))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs12103),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs12103));
}
})());
});
clustermap.components.full_report.company_site_list.t12097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12099){var self__ = this;
var _12099__$1 = this;return self__.meta12098;
});
clustermap.components.full_report.company_site_list.t12097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12099,meta12098__$1){var self__ = this;
var _12099__$1 = this;return (new clustermap.components.full_report.company_site_list.t12097(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__12096,self__.p__12087,self__.owner,self__.investment,meta12098__$1));
});
clustermap.components.full_report.company_site_list.__GT_t12097 = (function __GT_t12097(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__12096__$2,p__12087__$1,owner__$1,investment__$2,meta12098){return (new clustermap.components.full_report.company_site_list.t12097(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__12096__$2,p__12087__$1,owner__$1,investment__$2,meta12098));
});
}
return (new clustermap.components.full_report.company_site_list.t12097(company_path,link_fn,path_fn,opts,map__12096__$1,p__12087,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_site_list.t12118 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t12118 = (function (comm,opts,owner,investments,company_site_list,meta12119){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta12119 = meta12119;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t12118.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t12118.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t12118";
clustermap.components.full_report.company_site_list.t12118.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t12118");
});
clustermap.components.full_report.company_site_list.t12118.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t12118.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs12121 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912));if(cljs.core.map_QMARK_.call(null,attrs12121))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs12121)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs12122 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs12122))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12122),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12122));
}
})(),(function (){var attrs12123 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs12123))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12123),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12123));
}
})(),(function (){var attrs12124 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs12124))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12124),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12124));
}
})(),(function (){var attrs12125 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs12125))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12125),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12125));
}
})())),(function (){var attrs12126 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12126))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12126),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12126));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs12121),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs12127 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor-backed Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs12127))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12127),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12127));
}
})(),(function (){var attrs12128 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs12128))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12128),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12128));
}
})(),(function (){var attrs12129 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs12129))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12129),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12129));
}
})(),(function (){var attrs12130 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs12130))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs12130),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs12130));
}
})())),(function (){var attrs12131 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs12131))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs12131),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs12131));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
}
});
clustermap.components.full_report.company_site_list.t12118.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_12120){var self__ = this;
var _12120__$1 = this;return self__.meta12119;
});
clustermap.components.full_report.company_site_list.t12118.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_12120,meta12119__$1){var self__ = this;
var _12120__$1 = this;return (new clustermap.components.full_report.company_site_list.t12118(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta12119__$1));
});
clustermap.components.full_report.company_site_list.__GT_t12118 = (function __GT_t12118(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta12119){return (new clustermap.components.full_report.company_site_list.t12118(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta12119));
});
}
return (new clustermap.components.full_report.company_site_list.t12118(comm,opts,owner,investments,company_site_list,null));
});

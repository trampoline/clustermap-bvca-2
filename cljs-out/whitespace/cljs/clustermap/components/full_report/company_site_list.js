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
clustermap.components.full_report.company_site_list.investment = (function investment(investment__$1,owner,p__45082){var map__45091 = p__45082;var map__45091__$1 = ((cljs.core.seq_QMARK_.call(null,map__45091))?cljs.core.apply.call(null,cljs.core.hash_map,map__45091):map__45091);var opts = map__45091__$1;var path_fn = cljs.core.get.call(null,map__45091__$1,new cljs.core.Keyword(null,"path-fn","path-fn",4517369570));var link_fn = cljs.core.get.call(null,map__45091__$1,new cljs.core.Keyword(null,"link-fn","link-fn",1190936301));var company_path = path_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),investment__$1);if(typeof clustermap.components.full_report.company_site_list.t45092 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t45092 = (function (company_path,link_fn,path_fn,opts,map__45091,p__45082,owner,investment,meta45093){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__45091 = map__45091;
this.p__45082 = p__45082;
this.owner = owner;
this.investment = investment;
this.meta45093 = meta45093;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t45092.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t45092.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t45092";
clustermap.components.full_report.company_site_list.t45092.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t45092");
});
clustermap.components.full_report.company_site_list.t45092.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t45092.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs45095 = self__.link_fn.call(null,new cljs.core.Keyword(null,"portfolio-company","portfolio-company",3606204522),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"company_no","company_no",4461198389),new cljs.core.Keyword(null,"portfolio_company_no","portfolio_company_no",771436428).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"portfolio_company_name","portfolio_company_name",4225526294).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs45095))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs45095),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs45095));
}
})(),(function (){var attrs45096 = new cljs.core.Keyword(null,"portfolio_company_site_postcode","portfolio_company_site_postcode",4491774974).cljs$core$IFn$_invoke$arity$1(self__.investment);if(cljs.core.map_QMARK_.call(null,attrs45096))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs45096),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs45096));
}
})(),(function (){var attrs45097 = self__.link_fn.call(null,new cljs.core.Keyword(null,"investor-company","investor-company",3983736762),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593),new cljs.core.Keyword(null,"investor_company_uid","investor_company_uid",4184005593).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"name","name",1017277949),new cljs.core.Keyword(null,"investor_company_name","investor_company_name",4797549766).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs45097))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs45097),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs45097));
}
})(),(function (){var attrs45098 = self__.link_fn.call(null,new cljs.core.Keyword(null,"constituency","constituency",3902864696),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318),new cljs.core.Keyword(null,"boundaryline_id","boundaryline_id",3312170318).cljs$core$IFn$_invoke$arity$1(self__.investment),new cljs.core.Keyword(null,"compact_name","compact_name",1128032665),new cljs.core.Keyword(null,"boundaryline_compact_name","boundaryline_compact_name",3478315290).cljs$core$IFn$_invoke$arity$1(self__.investment)], null));if(cljs.core.map_QMARK_.call(null,attrs45098))
{return React.DOM.td(sablono.interpreter.attributes.call(null,attrs45098),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret.call(null,attrs45098));
}
})());
});
clustermap.components.full_report.company_site_list.t45092.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45094){var self__ = this;
var _45094__$1 = this;return self__.meta45093;
});
clustermap.components.full_report.company_site_list.t45092.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45094,meta45093__$1){var self__ = this;
var _45094__$1 = this;return (new clustermap.components.full_report.company_site_list.t45092(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__45091,self__.p__45082,self__.owner,self__.investment,meta45093__$1));
});
clustermap.components.full_report.company_site_list.__GT_t45092 = (function __GT_t45092(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__45091__$2,p__45082__$1,owner__$1,investment__$2,meta45093){return (new clustermap.components.full_report.company_site_list.t45092(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__45091__$2,p__45082__$1,owner__$1,investment__$2,meta45093));
});
}
return (new clustermap.components.full_report.company_site_list.t45092(company_path,link_fn,path_fn,opts,map__45091__$1,p__45082,owner,investment__$1,null));
});
clustermap.components.full_report.company_site_list.company_site_list = (function company_site_list(investments,owner,opts){var comm = om.core.get_shared.call(null,owner,new cljs.core.Keyword(null,"comm","comm",1016963710));if(typeof clustermap.components.full_report.company_site_list.t45113 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_site_list.t45113 = (function (comm,opts,owner,investments,company_site_list,meta45114){
this.comm = comm;
this.opts = opts;
this.owner = owner;
this.investments = investments;
this.company_site_list = company_site_list;
this.meta45114 = meta45114;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_site_list.t45113.cljs$lang$type = true;
clustermap.components.full_report.company_site_list.t45113.cljs$lang$ctorStr = "clustermap.components.full-report.company-site-list/t45113";
clustermap.components.full_report.company_site_list.t45113.cljs$lang$ctorPrWriter = (function (this__4008__auto__,writer__4009__auto__,opt__4010__auto__){return cljs.core._write.call(null,writer__4009__auto__,"clustermap.components.full-report.company-site-list/t45113");
});
clustermap.components.full_report.company_site_list.t45113.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_site_list.t45113.prototype.om$core$IRender$render$arity$1 = (function (this__9251__auto__){var self__ = this;
var this__9251__auto____$1 = this;var attrs45116 = clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912));if(cljs.core.map_QMARK_.call(null,attrs45116))
{return React.DOM.div(sablono.interpreter.attributes.call(null,sablono.util.merge_with_class.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",1108647146),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["full-report-list"], null)], null),attrs45116)),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs45117 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Portfolio Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs45117))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45117),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45117));
}
})(),(function (){var attrs45118 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs45118))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45118),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45118));
}
})(),(function (){var attrs45119 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs45119))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45119),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45119));
}
})(),(function (){var attrs45120 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs45120))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45120),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45120));
}
})())),(function (){var attrs45121 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs45121))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs45121),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs45121));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
} else
{return React.DOM.div({"className": "full-report-list"},sablono.interpreter.interpret.call(null,attrs45116),React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,(function (){var attrs45122 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Portfolio Company",new cljs.core.Keyword(null,"!portfolio_company_name_na","!portfolio_company_name_na",4778718111));if(cljs.core.map_QMARK_.call(null,attrs45122))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45122),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45122));
}
})(),(function (){var attrs45123 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Postcode",new cljs.core.Keyword(null,"?portfolio_company_site_postcode","?portfolio_company_site_postcode",2409284575));if(cljs.core.map_QMARK_.call(null,attrs45123))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45123),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45123));
}
})(),(function (){var attrs45124 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Investor",new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",4755885871));if(cljs.core.map_QMARK_.call(null,attrs45124))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45124),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45124));
}
})(),(function (){var attrs45125 = clustermap.components.table.order_col.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912),"Constituency",new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",828306139));if(cljs.core.map_QMARK_.call(null,attrs45125))
{return React.DOM.th(sablono.interpreter.attributes.call(null,attrs45125),null);
} else
{return React.DOM.th(null,sablono.interpreter.interpret.call(null,attrs45125));
}
})())),(function (){var attrs45126 = om.core.build_all.call(null,clustermap.components.full_report.company_site_list.investment,new cljs.core.Keyword(null,"records","records",2096501172).cljs$core$IFn$_invoke$arity$1(self__.investments),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",1014010321),new cljs.core.Keyword(null,"investment_uid","investment_uid",1858762838),new cljs.core.Keyword(null,"opts","opts",1017322386),self__.opts], null));if(cljs.core.map_QMARK_.call(null,attrs45126))
{return React.DOM.tbody(sablono.interpreter.attributes.call(null,attrs45126),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret.call(null,attrs45126));
}
})())),sablono.interpreter.interpret.call(null,clustermap.components.table.paginate.call(null,self__.comm,self__.investments,new cljs.core.Keyword(null,"update-selection-investments-table-view","update-selection-investments-table-view",4277131912))));
}
});
clustermap.components.full_report.company_site_list.t45113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_45115){var self__ = this;
var _45115__$1 = this;return self__.meta45114;
});
clustermap.components.full_report.company_site_list.t45113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_45115,meta45114__$1){var self__ = this;
var _45115__$1 = this;return (new clustermap.components.full_report.company_site_list.t45113(self__.comm,self__.opts,self__.owner,self__.investments,self__.company_site_list,meta45114__$1));
});
clustermap.components.full_report.company_site_list.__GT_t45113 = (function __GT_t45113(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta45114){return (new clustermap.components.full_report.company_site_list.t45113(comm__$1,opts__$1,owner__$1,investments__$1,company_site_list__$1,meta45114));
});
}
return (new clustermap.components.full_report.company_site_list.t45113(comm,opts,owner,investments,company_site_list,null));
});

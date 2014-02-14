// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.components.full_report.company_list');
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
clustermap.components.full_report.company_list.render_many_links = (function render_many_links(link_fn,owner_path,type,objs){var first_obj = cljs.core.first(objs);var next_objs = cljs.core.next(objs);if(next_objs)
{var attrs11695 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs11695))
{return React.DOM.div(sablono.interpreter.attributes(attrs11695),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs11695),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
}
} else
{return (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));
}
});
clustermap.components.full_report.company_list.pos_neg = (function pos_neg(value){if((value == null))
{return null;
} else
{if((value > 0))
{return React.DOM.i({"className": "icon-positive"});
} else
{if((value < 0))
{return React.DOM.i({"className": "icon-negative"});
} else
{if(true)
{return null;
} else
{return null;
}
}
}
}
});
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__11704){var map__11719 = p__11704;var map__11719__$1 = ((cljs.core.seq_QMARK_(map__11719))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11719):map__11719);var opts = map__11719__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11719__$1,cljs.core.constant$keyword$83);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11719__$1,cljs.core.constant$keyword$84);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,site) : path_fn.call(null,cljs.core.constant$keyword$77,site));if(typeof clustermap.components.full_report.company_list.t11720 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11720 = (function (company_path,link_fn,path_fn,opts,map__11719,p__11704,owner,site,portfolio_company_site,meta11721){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__11719 = map__11719;
this.p__11704 = p__11704;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta11721 = meta11721;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11720.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11720.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11720";
clustermap.components.full_report.company_list.t11720.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t11720");
});
clustermap.components.full_report.company_list.t11720.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11720.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs11723 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$77,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$77,self__.site));if(cljs.core.map_QMARK_(attrs11723))
{return React.DOM.td(sablono.interpreter.attributes(attrs11723),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11723));
}
})(),(function (){var attrs11724 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$78,cljs.core.constant$keyword$86.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs11724))
{return React.DOM.td(sablono.interpreter.attributes(attrs11724),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11724));
}
})(),(function (){var attrs11725 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$79,(function (){var G__11732 = self__.site;var G__11732__$1 = (((G__11732 == null))?null:cljs.core.constant$keyword$87.cljs$core$IFn$_invoke$arity$1(G__11732));var G__11732__$2 = (((G__11732__$1 == null))?null:cljs.core.filter(((function (G__11732,G__11732__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__11732,G__11732__$1))
,G__11732__$1));return G__11732__$2;
})());if(cljs.core.map_QMARK_(attrs11725))
{return React.DOM.td(sablono.interpreter.attributes(attrs11725),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11725));
}
})(),(function (){var attrs11726 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$113.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11726))
{return React.DOM.td(sablono.interpreter.attributes(attrs11726),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11726),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11727 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs11727))
{return React.DOM.td(sablono.interpreter.attributes(attrs11727),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11727));
}
})(),(function (){var attrs11728 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$115.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$73,2,cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11728))
{return React.DOM.td(sablono.interpreter.attributes(attrs11728),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11728));
}
})(),(function (){var attrs11729 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$116.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11729))
{return React.DOM.td(sablono.interpreter.attributes(attrs11729),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11729),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$114.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs11730 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs11730))
{return React.DOM.td(sablono.interpreter.attributes(attrs11730),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11730));
}
})(),(function (){var attrs11731 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$7,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$117.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$7,"-"));if(cljs.core.map_QMARK_(attrs11731))
{return React.DOM.td(sablono.interpreter.attributes(attrs11731),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs11731));
}
})());
});
clustermap.components.full_report.company_list.t11720.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11722){var self__ = this;
var _11722__$1 = this;return self__.meta11721;
});
clustermap.components.full_report.company_list.t11720.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11722,meta11721__$1){var self__ = this;
var _11722__$1 = this;return (new clustermap.components.full_report.company_list.t11720(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__11719,self__.p__11704,self__.owner,self__.site,self__.portfolio_company_site,meta11721__$1));
});
clustermap.components.full_report.company_list.__GT_t11720 = (function __GT_t11720(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11719__$2,p__11704__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11721){return (new clustermap.components.full_report.company_list.t11720(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__11719__$2,p__11704__$1,owner__$1,site__$1,portfolio_company_site__$1,meta11721));
});
}
return (new clustermap.components.full_report.company_list.t11720(company_path,link_fn,path_fn,opts,map__11719__$1,p__11704,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t11739 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t11739 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta11740){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta11740 = meta11740;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t11739.cljs$lang$type = true;
clustermap.components.full_report.company_list.t11739.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t11739";
clustermap.components.full_report.company_list.t11739.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t11739");
});
clustermap.components.full_report.company_list.t11739.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t11739.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs11744 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company_site,cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$70,cljs.core.constant$keyword$118,cljs.core.constant$keyword$71,self__.opts], null));if(cljs.core.map_QMARK_(attrs11744))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs11744),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs11744));
}
})())));
});
clustermap.components.full_report.company_list.t11739.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_11741){var self__ = this;
var _11741__$1 = this;return self__.meta11740;
});
clustermap.components.full_report.company_list.t11739.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_11741,meta11740__$1){var self__ = this;
var _11741__$1 = this;return (new clustermap.components.full_report.company_list.t11739(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta11740__$1));
});
clustermap.components.full_report.company_list.__GT_t11739 = (function __GT_t11739(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11740){return (new clustermap.components.full_report.company_list.t11739(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta11740));
});
}
return (new clustermap.components.full_report.company_list.t11739(opts,owner,selection_portfolio_company_sites,company_list,null));
});

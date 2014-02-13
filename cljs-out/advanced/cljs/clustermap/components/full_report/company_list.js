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
{var attrs21788 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs21788))
{return React.DOM.div(sablono.interpreter.attributes(attrs21788),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs21788),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__21797){var map__21812 = p__21797;var map__21812__$1 = ((cljs.core.seq_QMARK_(map__21812))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21812):map__21812);var opts = map__21812__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21812__$1,cljs.core.constant$keyword$290);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21812__$1,cljs.core.constant$keyword$291);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$284,site) : path_fn.call(null,cljs.core.constant$keyword$284,site));if(typeof clustermap.components.full_report.company_list.t21813 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t21813 = (function (company_path,link_fn,path_fn,opts,map__21812,p__21797,owner,site,portfolio_company_site,meta21814){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__21812 = map__21812;
this.p__21797 = p__21797;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta21814 = meta21814;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t21813.cljs$lang$type = true;
clustermap.components.full_report.company_list.t21813.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t21813";
clustermap.components.full_report.company_list.t21813.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t21813");
});
clustermap.components.full_report.company_list.t21813.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t21813.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs21816 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$284,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$284,self__.site));if(cljs.core.map_QMARK_(attrs21816))
{return React.DOM.td(sablono.interpreter.attributes(attrs21816),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21816));
}
})(),(function (){var attrs21817 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$285,cljs.core.constant$keyword$293.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21817))
{return React.DOM.td(sablono.interpreter.attributes(attrs21817),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21817));
}
})(),(function (){var attrs21818 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$286,(function (){var G__21825 = self__.site;var G__21825__$1 = (((G__21825 == null))?null:cljs.core.constant$keyword$294.cljs$core$IFn$_invoke$arity$1(G__21825));var G__21825__$2 = (((G__21825__$1 == null))?null:cljs.core.filter(((function (G__21825,G__21825__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$295.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__21825,G__21825__$1))
,G__21825__$1));return G__21825__$2;
})());if(cljs.core.map_QMARK_(attrs21818))
{return React.DOM.td(sablono.interpreter.attributes(attrs21818),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21818));
}
})(),(function (){var attrs21819 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$314.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs21819))
{return React.DOM.td(sablono.interpreter.attributes(attrs21819),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21819),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs21820 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21820))
{return React.DOM.td(sablono.interpreter.attributes(attrs21820),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21820));
}
})(),(function (){var attrs21821 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$316.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$280,2,cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs21821))
{return React.DOM.td(sablono.interpreter.attributes(attrs21821),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21821));
}
})(),(function (){var attrs21822 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$317.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs21822))
{return React.DOM.td(sablono.interpreter.attributes(attrs21822),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21822),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$315.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs21823 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs21823))
{return React.DOM.td(sablono.interpreter.attributes(attrs21823),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21823));
}
})(),(function (){var attrs21824 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$214,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$318.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$214,"-"));if(cljs.core.map_QMARK_(attrs21824))
{return React.DOM.td(sablono.interpreter.attributes(attrs21824),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs21824));
}
})());
});
clustermap.components.full_report.company_list.t21813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21815){var self__ = this;
var _21815__$1 = this;return self__.meta21814;
});
clustermap.components.full_report.company_list.t21813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21815,meta21814__$1){var self__ = this;
var _21815__$1 = this;return (new clustermap.components.full_report.company_list.t21813(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__21812,self__.p__21797,self__.owner,self__.site,self__.portfolio_company_site,meta21814__$1));
});
clustermap.components.full_report.company_list.__GT_t21813 = (function __GT_t21813(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__21812__$2,p__21797__$1,owner__$1,site__$1,portfolio_company_site__$1,meta21814){return (new clustermap.components.full_report.company_list.t21813(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__21812__$2,p__21797__$1,owner__$1,site__$1,portfolio_company_site__$1,meta21814));
});
}
return (new clustermap.components.full_report.company_list.t21813(company_path,link_fn,path_fn,opts,map__21812__$1,p__21797,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t21832 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t21832 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta21833){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta21833 = meta21833;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t21832.cljs$lang$type = true;
clustermap.components.full_report.company_list.t21832.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t21832";
clustermap.components.full_report.company_list.t21832.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t21832");
});
clustermap.components.full_report.company_list.t21832.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t21832.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs21837 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company_site,cljs.core.constant$keyword$296.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$277,cljs.core.constant$keyword$319,cljs.core.constant$keyword$278,self__.opts], null));if(cljs.core.map_QMARK_(attrs21837))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs21837),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs21837));
}
})())));
});
clustermap.components.full_report.company_list.t21832.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_21834){var self__ = this;
var _21834__$1 = this;return self__.meta21833;
});
clustermap.components.full_report.company_list.t21832.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_21834,meta21833__$1){var self__ = this;
var _21834__$1 = this;return (new clustermap.components.full_report.company_list.t21832(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta21833__$1));
});
clustermap.components.full_report.company_list.__GT_t21832 = (function __GT_t21832(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta21833){return (new clustermap.components.full_report.company_list.t21832(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta21833));
});
}
return (new clustermap.components.full_report.company_list.t21832(opts,owner,selection_portfolio_company_sites,company_list,null));
});

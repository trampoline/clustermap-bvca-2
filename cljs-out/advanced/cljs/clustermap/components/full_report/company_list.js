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
{var attrs22159 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22159))
{return React.DOM.div(sablono.interpreter.attributes(attrs22159),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22159),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__22168){var map__22184 = p__22168;var map__22184__$1 = ((cljs.core.seq_QMARK_(map__22184))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22184):map__22184);var opts = map__22184__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22184__$1,cljs.core.constant$keyword$302);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22184__$1,cljs.core.constant$keyword$303);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,site) : path_fn.call(null,cljs.core.constant$keyword$296,site));if(typeof clustermap.components.full_report.company_list.t22185 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22185 = (function (company_path,link_fn,path_fn,opts,map__22184,p__22168,owner,site,portfolio_company_site,meta22186){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22184 = map__22184;
this.p__22168 = p__22168;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta22186 = meta22186;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22185.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22185.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22185";
clustermap.components.full_report.company_list.t22185.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22185");
});
clustermap.components.full_report.company_list.t22185.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22185.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22188 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$296,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$296,self__.site));if(cljs.core.map_QMARK_(attrs22188))
{return React.DOM.td(sablono.interpreter.attributes(attrs22188),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22188));
}
})(),(function (){var attrs22189 = cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22189))
{return React.DOM.td(sablono.interpreter.attributes(attrs22189),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22189));
}
})(),(function (){var attrs22190 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$297,cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22190))
{return React.DOM.td(sablono.interpreter.attributes(attrs22190),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22190));
}
})(),(function (){var attrs22191 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$298,(function (){var G__22198 = self__.site;var G__22198__$1 = (((G__22198 == null))?null:cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(G__22198));var G__22198__$2 = (((G__22198__$1 == null))?null:cljs.core.filter(((function (G__22198,G__22198__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22198,G__22198__$1))
,G__22198__$1));return G__22198__$2;
})());if(cljs.core.map_QMARK_(attrs22191))
{return React.DOM.td(sablono.interpreter.attributes(attrs22191),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22191));
}
})(),(function (){var attrs22192 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22192))
{return React.DOM.td(sablono.interpreter.attributes(attrs22192),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22192),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22193 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22193))
{return React.DOM.td(sablono.interpreter.attributes(attrs22193),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22193));
}
})(),(function (){var attrs22194 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$292,2,cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22194))
{return React.DOM.td(sablono.interpreter.attributes(attrs22194),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22194));
}
})(),(function (){var attrs22195 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22195))
{return React.DOM.td(sablono.interpreter.attributes(attrs22195),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22195),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22196 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22196))
{return React.DOM.td(sablono.interpreter.attributes(attrs22196),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22196));
}
})(),(function (){var attrs22197 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$224,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$224,"-"));if(cljs.core.map_QMARK_(attrs22197))
{return React.DOM.td(sablono.interpreter.attributes(attrs22197),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22197));
}
})());
});
clustermap.components.full_report.company_list.t22185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22187){var self__ = this;
var _22187__$1 = this;return self__.meta22186;
});
clustermap.components.full_report.company_list.t22185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22187,meta22186__$1){var self__ = this;
var _22187__$1 = this;return (new clustermap.components.full_report.company_list.t22185(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22184,self__.p__22168,self__.owner,self__.site,self__.portfolio_company_site,meta22186__$1));
});
clustermap.components.full_report.company_list.__GT_t22185 = (function __GT_t22185(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22184__$2,p__22168__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22186){return (new clustermap.components.full_report.company_list.t22185(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22184__$2,p__22168__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22186));
});
}
return (new clustermap.components.full_report.company_list.t22185(company_path,link_fn,path_fn,opts,map__22184__$1,p__22168,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t22205 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22205 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta22206){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta22206 = meta22206;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22205.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22205.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22205";
clustermap.components.full_report.company_list.t22205.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22205");
});
clustermap.components.full_report.company_list.t22205.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22205.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22210 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company_site,cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$289,cljs.core.constant$keyword$309,cljs.core.constant$keyword$290,self__.opts], null));if(cljs.core.map_QMARK_(attrs22210))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22210),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22210));
}
})())));
});
clustermap.components.full_report.company_list.t22205.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22207){var self__ = this;
var _22207__$1 = this;return self__.meta22206;
});
clustermap.components.full_report.company_list.t22205.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22207,meta22206__$1){var self__ = this;
var _22207__$1 = this;return (new clustermap.components.full_report.company_list.t22205(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta22206__$1));
});
clustermap.components.full_report.company_list.__GT_t22205 = (function __GT_t22205(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22206){return (new clustermap.components.full_report.company_list.t22205(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22206));
});
}
return (new clustermap.components.full_report.company_list.t22205(opts,owner,selection_portfolio_company_sites,company_list,null));
});

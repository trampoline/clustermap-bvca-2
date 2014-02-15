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
{var attrs22102 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22102))
{return React.DOM.div(sablono.interpreter.attributes(attrs22102),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22102),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__22111){var map__22127 = p__22111;var map__22127__$1 = ((cljs.core.seq_QMARK_(map__22127))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22127):map__22127);var opts = map__22127__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22127__$1,cljs.core.constant$keyword$301);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22127__$1,cljs.core.constant$keyword$302);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$295,site) : path_fn.call(null,cljs.core.constant$keyword$295,site));if(typeof clustermap.components.full_report.company_list.t22128 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22128 = (function (company_path,link_fn,path_fn,opts,map__22127,p__22111,owner,site,portfolio_company_site,meta22129){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22127 = map__22127;
this.p__22111 = p__22111;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta22129 = meta22129;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22128.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22128.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22128";
clustermap.components.full_report.company_list.t22128.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22128");
});
clustermap.components.full_report.company_list.t22128.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22128.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22131 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$295,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$295,self__.site));if(cljs.core.map_QMARK_(attrs22131))
{return React.DOM.td(sablono.interpreter.attributes(attrs22131),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22131));
}
})(),(function (){var attrs22132 = cljs.core.constant$keyword$303.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22132))
{return React.DOM.td(sablono.interpreter.attributes(attrs22132),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22132));
}
})(),(function (){var attrs22133 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$296,cljs.core.constant$keyword$304.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22133))
{return React.DOM.td(sablono.interpreter.attributes(attrs22133),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22133));
}
})(),(function (){var attrs22134 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$297,(function (){var G__22141 = self__.site;var G__22141__$1 = (((G__22141 == null))?null:cljs.core.constant$keyword$305.cljs$core$IFn$_invoke$arity$1(G__22141));var G__22141__$2 = (((G__22141__$1 == null))?null:cljs.core.filter(((function (G__22141,G__22141__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22141,G__22141__$1))
,G__22141__$1));return G__22141__$2;
})());if(cljs.core.map_QMARK_(attrs22134))
{return React.DOM.td(sablono.interpreter.attributes(attrs22134),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22134));
}
})(),(function (){var attrs22135 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$331.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22135))
{return React.DOM.td(sablono.interpreter.attributes(attrs22135),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22135),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22136 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22136))
{return React.DOM.td(sablono.interpreter.attributes(attrs22136),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22136));
}
})(),(function (){var attrs22137 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$333.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$291,2,cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22137))
{return React.DOM.td(sablono.interpreter.attributes(attrs22137),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22137));
}
})(),(function (){var attrs22138 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22138))
{return React.DOM.td(sablono.interpreter.attributes(attrs22138),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22138),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$332.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22139 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22139))
{return React.DOM.td(sablono.interpreter.attributes(attrs22139),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22139));
}
})(),(function (){var attrs22140 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$223,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$223,"-"));if(cljs.core.map_QMARK_(attrs22140))
{return React.DOM.td(sablono.interpreter.attributes(attrs22140),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22140));
}
})());
});
clustermap.components.full_report.company_list.t22128.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22130){var self__ = this;
var _22130__$1 = this;return self__.meta22129;
});
clustermap.components.full_report.company_list.t22128.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22130,meta22129__$1){var self__ = this;
var _22130__$1 = this;return (new clustermap.components.full_report.company_list.t22128(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22127,self__.p__22111,self__.owner,self__.site,self__.portfolio_company_site,meta22129__$1));
});
clustermap.components.full_report.company_list.__GT_t22128 = (function __GT_t22128(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22127__$2,p__22111__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22129){return (new clustermap.components.full_report.company_list.t22128(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22127__$2,p__22111__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22129));
});
}
return (new clustermap.components.full_report.company_list.t22128(company_path,link_fn,path_fn,opts,map__22127__$1,p__22111,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t22148 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22148 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta22149){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta22149 = meta22149;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22148.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22148.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22148";
clustermap.components.full_report.company_list.t22148.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22148");
});
clustermap.components.full_report.company_list.t22148.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22148.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22153 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company_site,cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$288,cljs.core.constant$keyword$308,cljs.core.constant$keyword$289,self__.opts], null));if(cljs.core.map_QMARK_(attrs22153))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22153),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22153));
}
})())));
});
clustermap.components.full_report.company_list.t22148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22150){var self__ = this;
var _22150__$1 = this;return self__.meta22149;
});
clustermap.components.full_report.company_list.t22148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22150,meta22149__$1){var self__ = this;
var _22150__$1 = this;return (new clustermap.components.full_report.company_list.t22148(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta22149__$1));
});
clustermap.components.full_report.company_list.__GT_t22148 = (function __GT_t22148(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22149){return (new clustermap.components.full_report.company_list.t22148(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22149));
});
}
return (new clustermap.components.full_report.company_list.t22148(opts,owner,selection_portfolio_company_sites,company_list,null));
});

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
{var attrs22198 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22198))
{return React.DOM.div(sablono.interpreter.attributes(attrs22198),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22198),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company_site = (function portfolio_company_site(site,owner,p__22207){var map__22223 = p__22207;var map__22223__$1 = ((cljs.core.seq_QMARK_(map__22223))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22223):map__22223);var opts = map__22223__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22223__$1,cljs.core.constant$keyword$304);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22223__$1,cljs.core.constant$keyword$305);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,site) : path_fn.call(null,cljs.core.constant$keyword$297,site));if(typeof clustermap.components.full_report.company_list.t22224 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22224 = (function (company_path,link_fn,path_fn,opts,map__22223,p__22207,owner,site,portfolio_company_site,meta22225){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22223 = map__22223;
this.p__22207 = p__22207;
this.owner = owner;
this.site = site;
this.portfolio_company_site = portfolio_company_site;
this.meta22225 = meta22225;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22224.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22224.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22224";
clustermap.components.full_report.company_list.t22224.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22224");
});
clustermap.components.full_report.company_list.t22224.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22224.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22227 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$297,self__.site) : self__.link_fn.call(null,cljs.core.constant$keyword$297,self__.site));if(cljs.core.map_QMARK_(attrs22227))
{return React.DOM.td(sablono.interpreter.attributes(attrs22227),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22227));
}
})(),(function (){var attrs22228 = cljs.core.constant$keyword$306.cljs$core$IFn$_invoke$arity$1(self__.site);if(cljs.core.map_QMARK_(attrs22228))
{return React.DOM.td(sablono.interpreter.attributes(attrs22228),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22228));
}
})(),(function (){var attrs22229 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$298,cljs.core.constant$keyword$307.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22229))
{return React.DOM.td(sablono.interpreter.attributes(attrs22229),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22229));
}
})(),(function (){var attrs22230 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$299,(function (){var G__22237 = self__.site;var G__22237__$1 = (((G__22237 == null))?null:cljs.core.constant$keyword$308.cljs$core$IFn$_invoke$arity$1(G__22237));var G__22237__$2 = (((G__22237__$1 == null))?null:cljs.core.filter(((function (G__22237,G__22237__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$309.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22237,G__22237__$1))
,G__22237__$1));return G__22237__$2;
})());if(cljs.core.map_QMARK_(attrs22230))
{return React.DOM.td(sablono.interpreter.attributes(attrs22230),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22230));
}
})(),(function (){var attrs22231 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$334.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22231))
{return React.DOM.td(sablono.interpreter.attributes(attrs22231),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22231),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22232 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22232))
{return React.DOM.td(sablono.interpreter.attributes(attrs22232),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22232));
}
})(),(function (){var attrs22233 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$336.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$293,2,cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22233))
{return React.DOM.td(sablono.interpreter.attributes(attrs22233),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22233));
}
})(),(function (){var attrs22234 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$337.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22234))
{return React.DOM.td(sablono.interpreter.attributes(attrs22234),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22234),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret(clustermap.formats.time.get_year(cljs.core.constant$keyword$335.cljs$core$IFn$_invoke$arity$1(self__.site))),")"));
}
})(),(function (){var attrs22235 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.site));if(cljs.core.map_QMARK_(attrs22235))
{return React.DOM.td(sablono.interpreter.attributes(attrs22235),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22235));
}
})(),(function (){var attrs22236 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$3(cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$225,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$338.cljs$core$IFn$_invoke$arity$1(self__.site),cljs.core.constant$keyword$225,"-"));if(cljs.core.map_QMARK_(attrs22236))
{return React.DOM.td(sablono.interpreter.attributes(attrs22236),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22236));
}
})());
});
clustermap.components.full_report.company_list.t22224.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22226){var self__ = this;
var _22226__$1 = this;return self__.meta22225;
});
clustermap.components.full_report.company_list.t22224.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22226,meta22225__$1){var self__ = this;
var _22226__$1 = this;return (new clustermap.components.full_report.company_list.t22224(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22223,self__.p__22207,self__.owner,self__.site,self__.portfolio_company_site,meta22225__$1));
});
clustermap.components.full_report.company_list.__GT_t22224 = (function __GT_t22224(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22223__$2,p__22207__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22225){return (new clustermap.components.full_report.company_list.t22224(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22223__$2,p__22207__$1,owner__$1,site__$1,portfolio_company_site__$1,meta22225));
});
}
return (new clustermap.components.full_report.company_list.t22224(company_path,link_fn,path_fn,opts,map__22223__$1,p__22207,owner,site,portfolio_company_site,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(selection_portfolio_company_sites,owner,opts){if(typeof clustermap.components.full_report.company_list.t22244 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22244 = (function (opts,owner,selection_portfolio_company_sites,company_list,meta22245){
this.opts = opts;
this.owner = owner;
this.selection_portfolio_company_sites = selection_portfolio_company_sites;
this.company_list = company_list;
this.meta22245 = meta22245;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22244.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22244.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22244";
clustermap.components.full_report.company_list.t22244.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22244");
});
clustermap.components.full_report.company_list.t22244.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22244.prototype.om$core$IRender$render$arity$1 = (function (this__9212__auto__){var self__ = this;
var this__9212__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Postcode"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22249 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company_site,cljs.core.constant$keyword$310.cljs$core$IFn$_invoke$arity$1(self__.selection_portfolio_company_sites),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$290,cljs.core.constant$keyword$311,cljs.core.constant$keyword$291,self__.opts], null));if(cljs.core.map_QMARK_(attrs22249))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22249),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22249));
}
})())));
});
clustermap.components.full_report.company_list.t22244.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22246){var self__ = this;
var _22246__$1 = this;return self__.meta22245;
});
clustermap.components.full_report.company_list.t22244.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22246,meta22245__$1){var self__ = this;
var _22246__$1 = this;return (new clustermap.components.full_report.company_list.t22244(self__.opts,self__.owner,self__.selection_portfolio_company_sites,self__.company_list,meta22245__$1));
});
clustermap.components.full_report.company_list.__GT_t22244 = (function __GT_t22244(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22245){return (new clustermap.components.full_report.company_list.t22244(opts__$1,owner__$1,selection_portfolio_company_sites__$1,company_list__$1,meta22245));
});
}
return (new clustermap.components.full_report.company_list.t22244(opts,owner,selection_portfolio_company_sites,company_list,null));
});

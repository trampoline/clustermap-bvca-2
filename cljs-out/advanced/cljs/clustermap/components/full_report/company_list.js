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
{var attrs22327 = (link_fn.cljs$core$IFn$_invoke$arity$2 ? link_fn.cljs$core$IFn$_invoke$arity$2(type,first_obj) : link_fn.call(null,type,first_obj));if(cljs.core.map_QMARK_(attrs22327))
{return React.DOM.div(sablono.interpreter.attributes(attrs22327),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
} else
{return React.DOM.div(null,sablono.interpreter.interpret(attrs22327),React.DOM.a({"href": owner_path},"\u00A0(",sablono.interpreter.interpret(cljs.core.count(next_objs))," more...)"));
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
clustermap.components.full_report.company_list.portfolio_company = (function portfolio_company(company,owner,p__22336){var map__22351 = p__22336;var map__22351__$1 = ((cljs.core.seq_QMARK_(map__22351))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22351):map__22351);var opts = map__22351__$1;var path_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,cljs.core.constant$keyword$320);var link_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__22351__$1,cljs.core.constant$keyword$321);var company_path = (path_fn.cljs$core$IFn$_invoke$arity$2 ? path_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,company) : path_fn.call(null,cljs.core.constant$keyword$310,company));if(typeof clustermap.components.full_report.company_list.t22352 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22352 = (function (company_path,link_fn,path_fn,opts,map__22351,p__22336,owner,company,portfolio_company,meta22353){
this.company_path = company_path;
this.link_fn = link_fn;
this.path_fn = path_fn;
this.opts = opts;
this.map__22351 = map__22351;
this.p__22336 = p__22336;
this.owner = owner;
this.company = company;
this.portfolio_company = portfolio_company;
this.meta22353 = meta22353;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22352.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22352.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22352";
clustermap.components.full_report.company_list.t22352.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22352");
});
clustermap.components.full_report.company_list.t22352.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22352.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.tr(null,(function (){var attrs22355 = (self__.link_fn.cljs$core$IFn$_invoke$arity$2 ? self__.link_fn.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$310,self__.company) : self__.link_fn.call(null,cljs.core.constant$keyword$310,self__.company));if(cljs.core.map_QMARK_(attrs22355))
{return React.DOM.td(sablono.interpreter.attributes(attrs22355),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22355));
}
})(),(function (){var attrs22356 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$311,cljs.core.constant$keyword$323.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22356))
{return React.DOM.td(sablono.interpreter.attributes(attrs22356),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22356));
}
})(),(function (){var attrs22357 = clustermap.components.full_report.company_list.render_many_links(self__.link_fn,self__.company_path,cljs.core.constant$keyword$312,(function (){var G__22364 = self__.company;var G__22364__$1 = (((G__22364 == null))?null:cljs.core.constant$keyword$324.cljs$core$IFn$_invoke$arity$1(G__22364));var G__22364__$2 = (((G__22364__$1 == null))?null:cljs.core.filter(((function (G__22364,G__22364__$1){
return (function (bl){return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("uk_constituencies",cljs.core.constant$keyword$325.cljs$core$IFn$_invoke$arity$1(bl));
});})(G__22364,G__22364__$1))
,G__22364__$1));return G__22364__$2;
})());if(cljs.core.map_QMARK_(attrs22357))
{return React.DOM.td(sablono.interpreter.attributes(attrs22357),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22357));
}
})(),(function (){var attrs22358 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$350.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22358))
{return React.DOM.td(sablono.interpreter.attributes(attrs22358),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22358),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22359 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22359))
{return React.DOM.td(sablono.interpreter.attributes(attrs22359),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22359));
}
})(),(function (){var attrs22360 = (clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.money.fmoney.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-") : clustermap.formats.money.fmoney.call(null,cljs.core.constant$keyword$352.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$306,2,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22360))
{return React.DOM.td(sablono.interpreter.attributes(attrs22360),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22360));
}
})(),(function (){var attrs22361 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$353.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22361))
{return React.DOM.td(sablono.interpreter.attributes(attrs22361),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22361),React.DOM.small(null,"\u00A0(",sablono.interpreter.interpret((function (){var or__3406__auto__ = clustermap.formats.time.get_year(cljs.core.constant$keyword$351.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return "no info";
}
})()),")"));
}
})(),(function (){var attrs22362 = clustermap.components.full_report.company_list.pos_neg(cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.company));if(cljs.core.map_QMARK_(attrs22362))
{return React.DOM.td(sablono.interpreter.attributes(attrs22362),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22362));
}
})(),(function (){var attrs22363 = (clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5 ? clustermap.formats.number.fnum.cljs$core$IFn$_invoke$arity$5(cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-") : clustermap.formats.number.fnum.call(null,cljs.core.constant$keyword$354.cljs$core$IFn$_invoke$arity$1(self__.company),cljs.core.constant$keyword$308,0,cljs.core.constant$keyword$238,"-"));if(cljs.core.map_QMARK_(attrs22363))
{return React.DOM.td(sablono.interpreter.attributes(attrs22363),null);
} else
{return React.DOM.td(null,sablono.interpreter.interpret(attrs22363));
}
})());
});
clustermap.components.full_report.company_list.t22352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22354){var self__ = this;
var _22354__$1 = this;return self__.meta22353;
});
clustermap.components.full_report.company_list.t22352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22354,meta22353__$1){var self__ = this;
var _22354__$1 = this;return (new clustermap.components.full_report.company_list.t22352(self__.company_path,self__.link_fn,self__.path_fn,self__.opts,self__.map__22351,self__.p__22336,self__.owner,self__.company,self__.portfolio_company,meta22353__$1));
});
clustermap.components.full_report.company_list.__GT_t22352 = (function __GT_t22352(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22351__$2,p__22336__$1,owner__$1,company__$1,portfolio_company__$1,meta22353){return (new clustermap.components.full_report.company_list.t22352(company_path__$1,link_fn__$1,path_fn__$1,opts__$1,map__22351__$2,p__22336__$1,owner__$1,company__$1,portfolio_company__$1,meta22353));
});
}
return (new clustermap.components.full_report.company_list.t22352(company_path,link_fn,path_fn,opts,map__22351__$1,p__22336,owner,company,portfolio_company,null));
});
clustermap.components.full_report.company_list.company_list = (function company_list(companies,owner,opts){if(typeof clustermap.components.full_report.company_list.t22371 !== 'undefined')
{} else
{
/**
* @constructor
*/
clustermap.components.full_report.company_list.t22371 = (function (opts,owner,companies,company_list,meta22372){
this.opts = opts;
this.owner = owner;
this.companies = companies;
this.company_list = company_list;
this.meta22372 = meta22372;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
clustermap.components.full_report.company_list.t22371.cljs$lang$type = true;
clustermap.components.full_report.company_list.t22371.cljs$lang$ctorStr = "clustermap.components.full-report.company-list/t22371";
clustermap.components.full_report.company_list.t22371.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write(writer__3969__auto__,"clustermap.components.full-report.company-list/t22371");
});
clustermap.components.full_report.company_list.t22371.prototype.om$core$IRender$ = true;
clustermap.components.full_report.company_list.t22371.prototype.om$core$IRender$render$arity$1 = (function (this__9196__auto__){var self__ = this;
var this__9196__auto____$1 = this;return React.DOM.div({"className": "full-report-list"},React.DOM.div({"className": "table-responsive"},React.DOM.table({"className": "table"},React.DOM.thead(null,React.DOM.tr(null,React.DOM.th(null,"Portfolio Company"),React.DOM.th(null,"Investor"),React.DOM.th(null,"Constituency"),React.DOM.th(null,"Revenue"),React.DOM.th({"colSpan": "2"},"Rev. change"),React.DOM.th(null,"Employees"),React.DOM.th({"colSpan": "2"},"Emp. change"))),(function (){var attrs22376 = om.core.build_all.cljs$core$IFn$_invoke$arity$3(clustermap.components.full_report.company_list.portfolio_company,cljs.core.constant$keyword$326.cljs$core$IFn$_invoke$arity$1(self__.companies),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$303,cljs.core.constant$keyword$327,cljs.core.constant$keyword$304,self__.opts], null));if(cljs.core.map_QMARK_(attrs22376))
{return React.DOM.tbody(sablono.interpreter.attributes(attrs22376),null);
} else
{return React.DOM.tbody(null,sablono.interpreter.interpret(attrs22376));
}
})())));
});
clustermap.components.full_report.company_list.t22371.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22373){var self__ = this;
var _22373__$1 = this;return self__.meta22372;
});
clustermap.components.full_report.company_list.t22371.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22373,meta22372__$1){var self__ = this;
var _22373__$1 = this;return (new clustermap.components.full_report.company_list.t22371(self__.opts,self__.owner,self__.companies,self__.company_list,meta22372__$1));
});
clustermap.components.full_report.company_list.__GT_t22371 = (function __GT_t22371(opts__$1,owner__$1,companies__$1,company_list__$1,meta22372){return (new clustermap.components.full_report.company_list.t22371(opts__$1,owner__$1,companies__$1,company_list__$1,meta22372));
});
}
return (new clustermap.components.full_report.company_list.t22371(opts,owner,companies,company_list,null));
});

// Compiled by ClojureScript 0.0-2138
goog.provide('clustermap.app');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('clustermap.api');
goog.require('clustermap.search');
goog.require('clustermap.api');
goog.require('clustermap.search');
goog.require('om.dom');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('clustermap.map');
goog.require('clustermap.map');
goog.require('om.core');
goog.require('clustermap.map_report');
goog.require('om.dom');
goog.require('cljs.core.async');
clustermap.app.state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"selection","selection",3592905982),null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),null], null));
clustermap.app.set_state = (function set_state(key,value){return cljs.core.swap_BANG_.call(null,clustermap.app.state,(function (s){return cljs.core.assoc.call(null,s,key,value);
}));
});
clustermap.app.load_all_portfolio_companies_summary = (function load_all_portfolio_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28157){var state_val_28158 = (state_28157[1]);if((state_val_28158 === 2))
{var inst_28154 = (state_28157[2]);var inst_28155 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-companies-summary","all-portfolio-companies-summary",3049476533),inst_28154);var state_28157__$1 = state_28157;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28157__$1,inst_28155);
} else
{if((state_val_28158 === 1))
{var inst_28152 = clustermap.api.all_portfolio_companies_summary.call(null);var state_28157__$1 = state_28157;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28157__$1,2,inst_28152);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28162 = [null,null,null,null,null,null,null];(statearr_28162[0] = state_machine__5507__auto__);
(statearr_28162[1] = 1);
return statearr_28162;
});
var state_machine__5507__auto____1 = (function (state_28157){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28157);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28163){if((e28163 instanceof Object))
{var ex__5510__auto__ = e28163;var statearr_28164_28166 = state_28157;(statearr_28164_28166[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28157);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28163;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28167 = state_28157;
state_28157 = G__28167;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28157){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28165 = f__5522__auto__.call(null);(statearr_28165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28165;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_investor_companies_summary = (function load_all_investor_companies_summary(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28187){var state_val_28188 = (state_28187[1]);if((state_val_28188 === 2))
{var inst_28184 = (state_28187[2]);var inst_28185 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-investor-companies-summary","all-investor-companies-summary",3976109789),inst_28184);var state_28187__$1 = state_28187;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28187__$1,inst_28185);
} else
{if((state_val_28188 === 1))
{var inst_28182 = clustermap.api.all_investor_companies_summary.call(null);var state_28187__$1 = state_28187;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28187__$1,2,inst_28182);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28192 = [null,null,null,null,null,null,null];(statearr_28192[0] = state_machine__5507__auto__);
(statearr_28192[1] = 1);
return statearr_28192;
});
var state_machine__5507__auto____1 = (function (state_28187){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28187);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28193){if((e28193 instanceof Object))
{var ex__5510__auto__ = e28193;var statearr_28194_28196 = state_28187;(statearr_28194_28196[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28187);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28193;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28197 = state_28187;
state_28187 = G__28197;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28187){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28187);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28195 = f__5522__auto__.call(null);(statearr_28195[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28195;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.load_all_portfolio_company_sites = (function load_all_portfolio_company_sites(){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28228){var state_val_28229 = (state_28228[1]);if((state_val_28229 === 2))
{var inst_28220 = (state_28228[2]);var inst_28221 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797),inst_28220);var inst_28222 = cljs.core.deref.call(null,clustermap.app.state);var inst_28223 = new cljs.core.Keyword(null,"map","map",1014012110).cljs$core$IFn$_invoke$arity$1(inst_28222);var inst_28224 = cljs.core.deref.call(null,clustermap.app.state);var inst_28225 = new cljs.core.Keyword(null,"all-portfolio-company-sites","all-portfolio-company-sites",2288244797).cljs$core$IFn$_invoke$arity$1(inst_28224);var inst_28226 = clustermap.map.display_sites.call(null,inst_28223,inst_28225);var state_28228__$1 = (function (){var statearr_28230 = state_28228;(statearr_28230[7] = inst_28221);
return statearr_28230;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28228__$1,inst_28226);
} else
{if((state_val_28229 === 1))
{var inst_28218 = clustermap.api.all_portfolio_company_sites.call(null);var state_28228__$1 = state_28228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28228__$1,2,inst_28218);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28234 = [null,null,null,null,null,null,null,null];(statearr_28234[0] = state_machine__5507__auto__);
(statearr_28234[1] = 1);
return statearr_28234;
});
var state_machine__5507__auto____1 = (function (state_28228){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28228);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28235){if((e28235 instanceof Object))
{var ex__5510__auto__ = e28235;var statearr_28236_28238 = state_28228;(statearr_28236_28238[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28235;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28239 = state_28228;
state_28228 = G__28239;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28228){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28237 = f__5522__auto__.call(null);(statearr_28237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28237;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.search = (function search(q){if((cljs.core.count.call(null,q) > 0))
{var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28261){var state_val_28262 = (state_28261[1]);if((state_val_28262 === 2))
{var inst_28257 = (state_28261[2]);var inst_28258 = cljs.core.js__GT_clj.call(null,inst_28257);var inst_28259 = clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),inst_28258);var state_28261__$1 = state_28261;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28261__$1,inst_28259);
} else
{if((state_val_28262 === 1))
{var inst_28255 = clustermap.api.search.call(null,q);var state_28261__$1 = state_28261;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28261__$1,2,inst_28255);
} else
{return null;
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28266 = [null,null,null,null,null,null,null];(statearr_28266[0] = state_machine__5507__auto__);
(statearr_28266[1] = 1);
return statearr_28266;
});
var state_machine__5507__auto____1 = (function (state_28261){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28261);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28267){if((e28267 instanceof Object))
{var ex__5510__auto__ = e28267;var statearr_28268_28270 = state_28261;(statearr_28268_28270[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28261);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28267;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28271 = state_28261;
state_28261 = G__28271;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28261){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28261);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28269 = f__5522__auto__.call(null);(statearr_28269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28269;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
} else
{return clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"search-results","search-results",1025331267),null);
}
});
clustermap.app.handle_event = (function handle_event(type,val){console.log(type);
console.log(val);
if(cljs.core._EQ_.call(null,type,new cljs.core.Keyword(null,"search","search",4402534682)))
{return clustermap.app.search.call(null,val);
} else
{return null;
}
});
clustermap.app.do_init = (function do_init(){clustermap.app.set_state.call(null,new cljs.core.Keyword(null,"map","map",1014012110),clustermap.map.create_map.call(null));
clustermap.app.load_all_portfolio_companies_summary.call(null);
clustermap.app.load_all_investor_companies_summary.call(null);
var comm = cljs.core.async.chan.call(null);clustermap.search.mount.call(null,clustermap.app.state,"search-component",comm);
clustermap.map_report.mount.call(null,clustermap.app.state,"map-report-content");
var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_28318){var state_val_28319 = (state_28318[1]);if((state_val_28319 === 7))
{var inst_28307 = (state_28318[2]);var inst_28308 = cljs.core.nth.call(null,inst_28307,0,null);var inst_28309 = cljs.core.nth.call(null,inst_28307,1,null);var inst_28310 = clustermap.app.handle_event.call(null,inst_28308,inst_28309);var state_28318__$1 = (function (){var statearr_28320 = state_28318;(statearr_28320[7] = inst_28310);
return statearr_28320;
})();var statearr_28321_28334 = state_28318__$1;(statearr_28321_28334[2] = null);
(statearr_28321_28334[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28319 === 6))
{var inst_28314 = (state_28318[2]);var state_28318__$1 = state_28318;var statearr_28322_28335 = state_28318__$1;(statearr_28322_28335[2] = inst_28314);
(statearr_28322_28335[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28319 === 5))
{var state_28318__$1 = state_28318;var statearr_28323_28336 = state_28318__$1;(statearr_28323_28336[2] = null);
(statearr_28323_28336[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28319 === 4))
{var state_28318__$1 = state_28318;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28318__$1,7,comm);
} else
{if((state_val_28319 === 3))
{var inst_28316 = (state_28318[2]);var state_28318__$1 = state_28318;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28318__$1,inst_28316);
} else
{if((state_val_28319 === 2))
{var state_28318__$1 = state_28318;if(true)
{var statearr_28324_28337 = state_28318__$1;(statearr_28324_28337[1] = 4);
} else
{var statearr_28325_28338 = state_28318__$1;(statearr_28325_28338[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_28319 === 1))
{var state_28318__$1 = state_28318;var statearr_28326_28339 = state_28318__$1;(statearr_28326_28339[2] = null);
(statearr_28326_28339[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{return null;
}
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_28330 = [null,null,null,null,null,null,null,null];(statearr_28330[0] = state_machine__5507__auto__);
(statearr_28330[1] = 1);
return statearr_28330;
});
var state_machine__5507__auto____1 = (function (state_28318){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_28318);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e28331){if((e28331 instanceof Object))
{var ex__5510__auto__ = e28331;var statearr_28332_28340 = state_28318;(statearr_28332_28340[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28318);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28331;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__28341 = state_28318;
state_28318 = G__28341;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_28318){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_28318);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_28333 = f__5522__auto__.call(null);(statearr_28333[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_28333;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
clustermap.app.init = (function init(){if(cljs.core.truth_(config.repl))
{return setTimeout(clustermap.app.do_init,2000);
} else
{if(true)
{return clustermap.app.do_init.call(null);
} else
{return null;
}
}
});

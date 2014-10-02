// Compiled by ClojureScript 0.0-2322
goog.provide('clustermap.api');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('goog.net.XhrIo');
goog.require('goog.net.XhrIo');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
/**
* @param {...*} var_args
*/
clustermap.api.AJAX = (function() { 
var AJAX__delegate = function (url,p__49051){var map__49055 = p__49051;var map__49055__$1 = ((cljs.core.seq_QMARK_.call(null,map__49055))?cljs.core.apply.call(null,cljs.core.hash_map,map__49055):map__49055);var opts = map__49055__$1;var content = cljs.core.get.call(null,map__49055__$1,new cljs.core.Keyword(null,"content","content",15833224));var method = cljs.core.get.call(null,map__49055__$1,new cljs.core.Keyword(null,"method","method",55703592));var raw = cljs.core.get.call(null,map__49055__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__49055,map__49055__$1,opts,content,method,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__49055,map__49055__$1,opts,content,method,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__49055,map__49055__$1,opts,content,method,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__49055,map__49055__$1,opts,content,method,raw))
,(function (){var or__3558__auto__ = (function (){var G__49057 = method;var G__49057__$1 = (((G__49057 == null))?null:cljs.core.name.call(null,G__49057));var G__49057__$2 = (((G__49057__$1 == null))?null:clojure.string.upper_case.call(null,G__49057__$1));return G__49057__$2;
})();if(cljs.core.truth_(or__3558__auto__))
{return or__3558__auto__;
} else
{return "GET";
}
})(),(cljs.core.truth_(content)?JSON.stringify(cljs.core.clj__GT_js.call(null,content)):null),(cljs.core.truth_(content)?cljs.core.clj__GT_js.call(null,new cljs.core.PersistentArrayMap(null, 1, ["Content-Type","application/json"], null)):null));
return comm;
};
var AJAX = function (url,var_args){
var p__49051 = null;if (arguments.length > 1) {
  p__49051 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return AJAX__delegate.call(this,url,p__49051);};
AJAX.cljs$lang$maxFixedArity = 1;
AJAX.cljs$lang$applyTo = (function (arglist__49058){
var url = cljs.core.first(arglist__49058);
var p__49051 = cljs.core.rest(arglist__49058);
return AJAX__delegate(url,p__49051);
});
AJAX.cljs$core$IFn$_invoke$arity$variadic = AJAX__delegate;
return AJAX;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__49059){var map__49061 = p__49059;var map__49061__$1 = ((cljs.core.seq_QMARK_.call(null,map__49061))?cljs.core.apply.call(null,cljs.core.hash_map,map__49061):map__49061);var opts = map__49061__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"method","method",55703592),"GET"], null))));
};
var GET = function (url,var_args){
var p__49059 = null;if (arguments.length > 1) {
  p__49059 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__49059);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__49062){
var url = cljs.core.first(arglist__49062);
var p__49059 = cljs.core.rest(arglist__49062);
return GET__delegate(url,p__49059);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.POST = (function() { 
var POST__delegate = function (url,content,p__49063){var map__49065 = p__49063;var map__49065__$1 = ((cljs.core.seq_QMARK_.call(null,map__49065))?cljs.core.apply.call(null,cljs.core.hash_map,map__49065):map__49065);var opts = map__49065__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var POST = function (url,content,var_args){
var p__49063 = null;if (arguments.length > 2) {
  p__49063 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return POST__delegate.call(this,url,content,p__49063);};
POST.cljs$lang$maxFixedArity = 2;
POST.cljs$lang$applyTo = (function (arglist__49066){
var url = cljs.core.first(arglist__49066);
arglist__49066 = cljs.core.next(arglist__49066);
var content = cljs.core.first(arglist__49066);
var p__49063 = cljs.core.rest(arglist__49066);
return POST__delegate(url,content,p__49063);
});
POST.cljs$core$IFn$_invoke$arity$variadic = POST__delegate;
return POST;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.PUT = (function() { 
var PUT__delegate = function (url,content,p__49067){var map__49069 = p__49067;var map__49069__$1 = ((cljs.core.seq_QMARK_.call(null,map__49069))?cljs.core.apply.call(null,cljs.core.hash_map,map__49069):map__49069);var opts = map__49069__$1;return cljs.core.apply.call(null,clustermap.api.AJAX,url,cljs.core.apply.call(null,cljs.core.concat,cljs.core.merge.call(null,opts,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"PUT",new cljs.core.Keyword(null,"content","content",15833224),content], null))));
};
var PUT = function (url,content,var_args){
var p__49067 = null;if (arguments.length > 2) {
  p__49067 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return PUT__delegate.call(this,url,content,p__49067);};
PUT.cljs$lang$maxFixedArity = 2;
PUT.cljs$lang$applyTo = (function (arglist__49070){
var url = cljs.core.first(arglist__49070);
arglist__49070 = cljs.core.next(arglist__49070);
var content = cljs.core.first(arglist__49070);
var p__49067 = cljs.core.rest(arglist__49070);
return PUT__delegate(url,content,p__49067);
});
PUT.cljs$core$IFn$_invoke$arity$variadic = PUT__delegate;
return PUT;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__){
return (function (state_49205){var state_val_49206 = (state_49205[(1)]);if((state_val_49206 === (7)))
{var inst_49162 = (state_49205[(7)]);var inst_49161 = (state_49205[(2)]);var inst_49162__$1 = cljs.core.nth.call(null,inst_49161,(0),null);var inst_49163 = cljs.core.nth.call(null,inst_49161,(1),null);var inst_49164 = cljs.core.sequential_QMARK_.call(null,inst_49162__$1);var state_49205__$1 = (function (){var statearr_49207 = state_49205;(statearr_49207[(7)] = inst_49162__$1);
(statearr_49207[(8)] = inst_49163);
return statearr_49207;
})();if(inst_49164)
{var statearr_49208_49243 = state_49205__$1;(statearr_49208_49243[(1)] = (8));
} else
{var statearr_49209_49244 = state_49205__$1;(statearr_49209_49244[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (20)))
{var inst_49162 = (state_49205[(7)]);var state_49205__$1 = state_49205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49205__$1,(23),inst_49162);
} else
{if((state_val_49206 === (1)))
{var state_49205__$1 = state_49205;var statearr_49210_49245 = state_49205__$1;(statearr_49210_49245[(2)] = null);
(statearr_49210_49245[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (4)))
{var state_49205__$1 = state_49205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49205__$1,(7),ocomm);
} else
{if((state_val_49206 === (15)))
{var inst_49185 = (state_49205[(2)]);var state_49205__$1 = state_49205;var statearr_49211_49246 = state_49205__$1;(statearr_49211_49246[(2)] = inst_49185);
(statearr_49211_49246[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (21)))
{var state_49205__$1 = state_49205;var statearr_49212_49247 = state_49205__$1;(statearr_49212_49247[(2)] = null);
(statearr_49212_49247[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (13)))
{var inst_49168 = (state_49205[(9)]);var state_49205__$1 = state_49205;var statearr_49213_49248 = state_49205__$1;(statearr_49213_49248[(2)] = inst_49168);
(statearr_49213_49248[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (22)))
{var inst_49194 = (state_49205[(2)]);var state_49205__$1 = state_49205;var statearr_49214_49249 = state_49205__$1;(statearr_49214_49249[(2)] = inst_49194);
(statearr_49214_49249[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (6)))
{var inst_49201 = (state_49205[(2)]);var state_49205__$1 = state_49205;var statearr_49215_49250 = state_49205__$1;(statearr_49215_49250[(2)] = inst_49201);
(statearr_49215_49250[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (17)))
{var state_49205__$1 = state_49205;var statearr_49216_49251 = state_49205__$1;(statearr_49216_49251[(2)] = null);
(statearr_49216_49251[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (3)))
{var inst_49203 = (state_49205[(2)]);var state_49205__$1 = state_49205;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49205__$1,inst_49203);
} else
{if((state_val_49206 === (12)))
{var inst_49187 = (state_49205[(2)]);var state_49205__$1 = state_49205;var statearr_49217_49252 = state_49205__$1;(statearr_49217_49252[(2)] = inst_49187);
(statearr_49217_49252[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (2)))
{var state_49205__$1 = state_49205;var statearr_49218_49253 = state_49205__$1;(statearr_49218_49253[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (23)))
{var inst_49191 = (state_49205[(2)]);var state_49205__$1 = state_49205;var statearr_49220_49254 = state_49205__$1;(statearr_49220_49254[(2)] = inst_49191);
(statearr_49220_49254[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (19)))
{var inst_49178 = (state_49205[(2)]);var state_49205__$1 = state_49205;var statearr_49221_49255 = state_49205__$1;(statearr_49221_49255[(2)] = inst_49178);
(statearr_49221_49255[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (11)))
{var inst_49167 = (state_49205[(10)]);var inst_49170 = cljs.core.empty_QMARK_.call(null,inst_49167);var state_49205__$1 = state_49205;if(inst_49170)
{var statearr_49222_49256 = state_49205__$1;(statearr_49222_49256[(1)] = (13));
} else
{var statearr_49223_49257 = state_49205__$1;(statearr_49223_49257[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (9)))
{var inst_49162 = (state_49205[(7)]);var state_49205__$1 = state_49205;if(cljs.core.truth_(inst_49162))
{var statearr_49224_49258 = state_49205__$1;(statearr_49224_49258[(1)] = (20));
} else
{var statearr_49225_49259 = state_49205__$1;(statearr_49225_49259[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (5)))
{var state_49205__$1 = state_49205;var statearr_49226_49260 = state_49205__$1;(statearr_49226_49260[(2)] = null);
(statearr_49226_49260[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (14)))
{var inst_49167 = (state_49205[(10)]);var inst_49173 = cljs.core.rest.call(null,inst_49167);var inst_49174 = cljs.core.first.call(null,inst_49167);var state_49205__$1 = (function (){var statearr_49227 = state_49205;(statearr_49227[(11)] = inst_49173);
return statearr_49227;
})();if(cljs.core.truth_(inst_49174))
{var statearr_49228_49261 = state_49205__$1;(statearr_49228_49261[(1)] = (16));
} else
{var statearr_49229_49262 = state_49205__$1;(statearr_49229_49262[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (16)))
{var inst_49167 = (state_49205[(10)]);var inst_49176 = cljs.core.first.call(null,inst_49167);var state_49205__$1 = state_49205;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49205__$1,(19),inst_49176);
} else
{if((state_val_49206 === (10)))
{var inst_49163 = (state_49205[(8)]);var inst_49196 = (state_49205[(2)]);var inst_49197 = cljs.core.apply.call(null,handler,inst_49196,inst_49163);var state_49205__$1 = (function (){var statearr_49230 = state_49205;(statearr_49230[(12)] = inst_49197);
return statearr_49230;
})();var statearr_49231_49263 = state_49205__$1;(statearr_49231_49263[(2)] = null);
(statearr_49231_49263[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (18)))
{var inst_49168 = (state_49205[(9)]);var inst_49173 = (state_49205[(11)]);var inst_49181 = (state_49205[(2)]);var inst_49182 = cljs.core.conj.call(null,inst_49168,inst_49181);var inst_49167 = inst_49173;var inst_49168__$1 = inst_49182;var state_49205__$1 = (function (){var statearr_49232 = state_49205;(statearr_49232[(10)] = inst_49167);
(statearr_49232[(9)] = inst_49168__$1);
return statearr_49232;
})();var statearr_49233_49264 = state_49205__$1;(statearr_49233_49264[(2)] = null);
(statearr_49233_49264[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_49206 === (8)))
{var inst_49162 = (state_49205[(7)]);var inst_49166 = cljs.core.PersistentVector.EMPTY;var inst_49167 = inst_49162;var inst_49168 = inst_49166;var state_49205__$1 = (function (){var statearr_49234 = state_49205;(statearr_49234[(10)] = inst_49167);
(statearr_49234[(9)] = inst_49168);
return statearr_49234;
})();var statearr_49235_49265 = state_49205__$1;(statearr_49235_49265[(2)] = null);
(statearr_49235_49265[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__5708__auto__))
;return ((function (switch__5693__auto__,c__5708__auto__){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49239 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_49239[(0)] = state_machine__5694__auto__);
(statearr_49239[(1)] = (1));
return statearr_49239;
});
var state_machine__5694__auto____1 = (function (state_49205){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_49205);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49240){if((e49240 instanceof Object))
{var ex__5697__auto__ = e49240;var statearr_49241_49266 = state_49205;(statearr_49241_49266[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49205);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49240;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49267 = state_49205;
state_49205 = G__49267;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49205){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49205);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__))
})();var state__5710__auto__ = (function (){var statearr_49242 = f__5709__auto__.call(null);(statearr_49242[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49242;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__))
);
return c__5708__auto__;
});
/**
* order responses from an async API according to the order of requests
* - request-handler: fn to send an async API request, returning a channel of a single result value,
* and optional additional args for the result-handler. return nil to
* abandon request
* - result-handler: function of API result and optional additional args from request-handler result
*/
clustermap.api.ordered_api = (function ordered_api(request_handler,result_handler){var ocomm = cljs.core.async.chan.call(null,cljs.core.async.sliding_buffer.call(null,(1)));var _ = clustermap.api.ordered_api_results.call(null,ocomm,result_handler);return ((function (ocomm,_){
return (function() { 
var G__49270__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__49269 = rseq;var rcomm = cljs.core.nth.call(null,vec__49269,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__49269,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__49270 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__49270__delegate.call(this,req_args);};
G__49270.cljs$lang$maxFixedArity = 0;
G__49270.cljs$lang$applyTo = (function (arglist__49271){
var req_args = cljs.core.seq(arglist__49271);
return G__49270__delegate(req_args);
});
G__49270.cljs$core$IFn$_invoke$arity$variadic = G__49270__delegate;
return G__49270;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5708__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto__,ch){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto__,ch){
return (function (state_49289){var state_val_49290 = (state_49289[(1)]);if((state_val_49290 === (2)))
{var inst_49286 = (state_49289[(2)]);var inst_49287 = console.log(inst_49286);var state_49289__$1 = state_49289;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49289__$1,inst_49287);
} else
{if((state_val_49290 === (1)))
{var state_49289__$1 = state_49289;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49289__$1,(2),ch);
} else
{return null;
}
}
});})(c__5708__auto__,ch))
;return ((function (switch__5693__auto__,c__5708__auto__,ch){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49294 = [null,null,null,null,null,null,null];(statearr_49294[(0)] = state_machine__5694__auto__);
(statearr_49294[(1)] = (1));
return statearr_49294;
});
var state_machine__5694__auto____1 = (function (state_49289){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_49289);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49295){if((e49295 instanceof Object))
{var ex__5697__auto__ = e49295;var statearr_49296_49298 = state_49289;(statearr_49296_49298[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49289);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49295;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49299 = state_49289;
state_49289 = G__49299;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49289){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto__,ch))
})();var state__5710__auto__ = (function (){var statearr_49297 = f__5709__auto__.call(null);(statearr_49297[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto__);
return statearr_49297;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto__,ch))
);
return c__5708__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__49300){
var f = cljs.core.first(arglist__49300);
var args = cljs.core.rest(arglist__49300);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__49303){var vec__49304 = p__49303;var k = cljs.core.nth.call(null,vec__49304,(0),null);var v = cljs.core.nth.call(null,vec__49304,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5708__auto___49331 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5708__auto___49331,r){
return (function (){var f__5709__auto__ = (function (){var switch__5693__auto__ = ((function (c__5708__auto___49331,r){
return (function (state_49322){var state_val_49323 = (state_49322[(1)]);if((state_val_49323 === (2)))
{var inst_49319 = (state_49322[(2)]);var inst_49320 = cljs.core.reset_BANG_.call(null,r,inst_49319);var state_49322__$1 = state_49322;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49322__$1,inst_49320);
} else
{if((state_val_49323 === (1)))
{var state_49322__$1 = state_49322;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49322__$1,(2),comm);
} else
{return null;
}
}
});})(c__5708__auto___49331,r))
;return ((function (switch__5693__auto__,c__5708__auto___49331,r){
return (function() {
var state_machine__5694__auto__ = null;
var state_machine__5694__auto____0 = (function (){var statearr_49327 = [null,null,null,null,null,null,null];(statearr_49327[(0)] = state_machine__5694__auto__);
(statearr_49327[(1)] = (1));
return statearr_49327;
});
var state_machine__5694__auto____1 = (function (state_49322){while(true){
var ret_value__5695__auto__ = (function (){try{while(true){
var result__5696__auto__ = switch__5693__auto__.call(null,state_49322);if(cljs.core.keyword_identical_QMARK_.call(null,result__5696__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5696__auto__;
}
break;
}
}catch (e49328){if((e49328 instanceof Object))
{var ex__5697__auto__ = e49328;var statearr_49329_49332 = state_49322;(statearr_49329_49332[(5)] = ex__5697__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49322);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e49328;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5695__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__49333 = state_49322;
state_49322 = G__49333;
continue;
}
} else
{return ret_value__5695__auto__;
}
break;
}
});
state_machine__5694__auto__ = function(state_49322){
switch(arguments.length){
case 0:
return state_machine__5694__auto____0.call(this);
case 1:
return state_machine__5694__auto____1.call(this,state_49322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5694__auto____0;
state_machine__5694__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5694__auto____1;
return state_machine__5694__auto__;
})()
;})(switch__5693__auto__,c__5708__auto___49331,r))
})();var state__5710__auto__ = (function (){var statearr_49330 = f__5709__auto__.call(null);(statearr_49330[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5708__auto___49331);
return statearr_49330;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5710__auto__);
});})(c__5708__auto___49331,r))
);
return r;
});
clustermap.api.api_prefix = config.api.prefix;
/**
* @param {...*} var_args
*/
clustermap.api.boundarylines = (function() { 
var boundarylines__delegate = function (id,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundarylines/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),opts);
};
var boundarylines = function (id,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundarylines__delegate.call(this,id,tolerance,opts);};
boundarylines.cljs$lang$maxFixedArity = 2;
boundarylines.cljs$lang$applyTo = (function (arglist__49334){
var id = cljs.core.first(arglist__49334);
arglist__49334 = cljs.core.next(arglist__49334);
var tolerance = cljs.core.first(arglist__49334);
var opts = cljs.core.rest(arglist__49334);
return boundarylines__delegate(id,tolerance,opts);
});
boundarylines.cljs$core$IFn$_invoke$arity$variadic = boundarylines__delegate;
return boundarylines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_index = (function() { 
var boundaryline_collection_index__delegate = function (id,opts){return cljs.core.apply.call(null,clustermap.api.GET,("/api/boundaryline-collection-index/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,id))),opts);
};
var boundaryline_collection_index = function (id,var_args){
var opts = null;if (arguments.length > 1) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return boundaryline_collection_index__delegate.call(this,id,opts);};
boundaryline_collection_index.cljs$lang$maxFixedArity = 1;
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__49335){
var id = cljs.core.first(arglist__49335);
var opts = cljs.core.rest(arglist__49335);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* fetch a whole set of boundarylines in one api hit
* @param {...*} var_args
*/
clustermap.api.boundaryline_set = (function() { 
var boundaryline_set__delegate = function (ids,tolerance,opts){return cljs.core.apply.call(null,clustermap.api.POST,"/api/boundaryline-set",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),ids,new cljs.core.Keyword(null,"tolerance","tolerance",406811818),tolerance], null),opts);
};
var boundaryline_set = function (ids,tolerance,var_args){
var opts = null;if (arguments.length > 2) {
  opts = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return boundaryline_set__delegate.call(this,ids,tolerance,opts);};
boundaryline_set.cljs$lang$maxFixedArity = 2;
boundaryline_set.cljs$lang$applyTo = (function (arglist__49336){
var ids = cljs.core.first(arglist__49336);
arglist__49336 = cljs.core.next(arglist__49336);
var tolerance = cljs.core.first(arglist__49336);
var opts = cljs.core.rest(arglist__49336);
return boundaryline_set__delegate(ids,tolerance,opts);
});
boundaryline_set.cljs$core$IFn$_invoke$arity$variadic = boundaryline_set__delegate;
return boundaryline_set;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_collection_view = (function() { 
var boundaryline_collection_view__delegate = function (collection_id,tolerance,bounds,p__49337){var map__49339 = p__49337;var map__49339__$1 = ((cljs.core.seq_QMARK_.call(null,map__49339))?cljs.core.apply.call(null,cljs.core.hash_map,map__49339):map__49339);var opts = map__49339__$1;var boundaryline_ids = cljs.core.get.call(null,map__49339__$1,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869));var opts__$1 = cljs.core.flatten.call(null,cljs.core.seq.call(null,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869))));return cljs.core.apply.call(null,clustermap.api.POST,("/api/boundaryline-collection-view/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,collection_id))+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(tolerance)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"boundaryline-ids","boundaryline-ids",1352066869),boundaryline_ids], null),opts__$1);
};
var boundaryline_collection_view = function (collection_id,tolerance,bounds,var_args){
var p__49337 = null;if (arguments.length > 3) {
  p__49337 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return boundaryline_collection_view__delegate.call(this,collection_id,tolerance,bounds,p__49337);};
boundaryline_collection_view.cljs$lang$maxFixedArity = 3;
boundaryline_collection_view.cljs$lang$applyTo = (function (arglist__49340){
var collection_id = cljs.core.first(arglist__49340);
arglist__49340 = cljs.core.next(arglist__49340);
var tolerance = cljs.core.first(arglist__49340);
arglist__49340 = cljs.core.next(arglist__49340);
var bounds = cljs.core.first(arglist__49340);
var p__49337 = cljs.core.rest(arglist__49340);
return boundaryline_collection_view__delegate(collection_id,tolerance,bounds,p__49337);
});
boundaryline_collection_view.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_view__delegate;
return boundaryline_collection_view;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,filter,bounds,p__49341){var vec__49343 = p__49341;var type_ids = cljs.core.nth.call(null,vec__49343,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,filter,bounds,var_args){
var p__49341 = null;if (arguments.length > 6) {
  p__49341 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 6),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,filter,bounds,p__49341);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 6;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__49344){
var index = cljs.core.first(arglist__49344);
arglist__49344 = cljs.core.next(arglist__49344);
var type = cljs.core.first(arglist__49344);
arglist__49344 = cljs.core.next(arglist__49344);
var blcoll = cljs.core.first(arglist__49344);
arglist__49344 = cljs.core.next(arglist__49344);
var attr = cljs.core.first(arglist__49344);
arglist__49344 = cljs.core.next(arglist__49344);
var filter = cljs.core.first(arglist__49344);
arglist__49344 = cljs.core.next(arglist__49344);
var bounds = cljs.core.first(arglist__49344);
var p__49341 = cljs.core.rest(arglist__49344);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,filter,bounds,p__49341);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.summary_stats = (function() { 
var summary_stats__delegate = function (index,type,statsattrs,filter,bounds,p__49345){var vec__49347 = p__49345;var type_ids = cljs.core.nth.call(null,vec__49347,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/summary-stats/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"statsattrs","statsattrs",1724366357),statsattrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var summary_stats = function (index,type,statsattrs,filter,bounds,var_args){
var p__49345 = null;if (arguments.length > 5) {
  p__49345 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 5),0);} 
return summary_stats__delegate.call(this,index,type,statsattrs,filter,bounds,p__49345);};
summary_stats.cljs$lang$maxFixedArity = 5;
summary_stats.cljs$lang$applyTo = (function (arglist__49348){
var index = cljs.core.first(arglist__49348);
arglist__49348 = cljs.core.next(arglist__49348);
var type = cljs.core.first(arglist__49348);
arglist__49348 = cljs.core.next(arglist__49348);
var statsattrs = cljs.core.first(arglist__49348);
arglist__49348 = cljs.core.next(arglist__49348);
var filter = cljs.core.first(arglist__49348);
arglist__49348 = cljs.core.next(arglist__49348);
var bounds = cljs.core.first(arglist__49348);
var p__49345 = cljs.core.rest(arglist__49348);
return summary_stats__delegate(index,type,statsattrs,filter,bounds,p__49345);
});
summary_stats.cljs$core$IFn$_invoke$arity$variadic = summary_stats__delegate;
return summary_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.location_lists = (function() { 
var location_lists__delegate = function (index,type,location_attr,attrs,max_count,filter,bounds,p__49349){var vec__49351 = p__49349;var type_ids = cljs.core.nth.call(null,vec__49351,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/location-lists/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location_attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"max-count","max-count",1539185305),max_count,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"filter","filter",-948537934),filter,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds], null));
};
var location_lists = function (index,type,location_attr,attrs,max_count,filter,bounds,var_args){
var p__49349 = null;if (arguments.length > 7) {
  p__49349 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return location_lists__delegate.call(this,index,type,location_attr,attrs,max_count,filter,bounds,p__49349);};
location_lists.cljs$lang$maxFixedArity = 7;
location_lists.cljs$lang$applyTo = (function (arglist__49352){
var index = cljs.core.first(arglist__49352);
arglist__49352 = cljs.core.next(arglist__49352);
var type = cljs.core.first(arglist__49352);
arglist__49352 = cljs.core.next(arglist__49352);
var location_attr = cljs.core.first(arglist__49352);
arglist__49352 = cljs.core.next(arglist__49352);
var attrs = cljs.core.first(arglist__49352);
arglist__49352 = cljs.core.next(arglist__49352);
var max_count = cljs.core.first(arglist__49352);
arglist__49352 = cljs.core.next(arglist__49352);
var filter = cljs.core.first(arglist__49352);
arglist__49352 = cljs.core.next(arglist__49352);
var bounds = cljs.core.first(arglist__49352);
var p__49349 = cljs.core.rest(arglist__49352);
return location_lists__delegate(index,type,location_attr,attrs,max_count,filter,bounds,p__49349);
});
location_lists.cljs$core$IFn$_invoke$arity$variadic = location_lists__delegate;
return location_lists;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.simple_table = (function() { 
var simple_table__delegate = function (index,type,filter_spec,bounds,sort_spec,offset,limit,p__49353){var vec__49355 = p__49353;var type_ids = cljs.core.nth.call(null,vec__49355,(0),null);return clustermap.api.POST.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/simple-table/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter_spec,new cljs.core.Keyword(null,"bounds","bounds",1691609455),bounds,new cljs.core.Keyword(null,"sort","sort",953465918),sort_spec,new cljs.core.Keyword(null,"offset","offset",296498311),offset,new cljs.core.Keyword(null,"limit","limit",-1355822363),limit], null));
};
var simple_table = function (index,type,filter_spec,bounds,sort_spec,offset,limit,var_args){
var p__49353 = null;if (arguments.length > 7) {
  p__49353 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 7),0);} 
return simple_table__delegate.call(this,index,type,filter_spec,bounds,sort_spec,offset,limit,p__49353);};
simple_table.cljs$lang$maxFixedArity = 7;
simple_table.cljs$lang$applyTo = (function (arglist__49356){
var index = cljs.core.first(arglist__49356);
arglist__49356 = cljs.core.next(arglist__49356);
var type = cljs.core.first(arglist__49356);
arglist__49356 = cljs.core.next(arglist__49356);
var filter_spec = cljs.core.first(arglist__49356);
arglist__49356 = cljs.core.next(arglist__49356);
var bounds = cljs.core.first(arglist__49356);
arglist__49356 = cljs.core.next(arglist__49356);
var sort_spec = cljs.core.first(arglist__49356);
arglist__49356 = cljs.core.next(arglist__49356);
var offset = cljs.core.first(arglist__49356);
arglist__49356 = cljs.core.next(arglist__49356);
var limit = cljs.core.first(arglist__49356);
var p__49353 = cljs.core.rest(arglist__49356);
return simple_table__delegate(index,type,filter_spec,bounds,sort_spec,offset,limit,p__49353);
});
simple_table.cljs$core$IFn$_invoke$arity$variadic = simple_table__delegate;
return simple_table;
})()
;

//# sourceMappingURL=api.js.map
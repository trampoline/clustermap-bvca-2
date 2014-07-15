// Compiled by ClojureScript 0.0-2261
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
clustermap.api.GET = (function() { 
var GET__delegate = function (url,p__43749){var map__43751 = p__43749;var map__43751__$1 = ((cljs.core.seq_QMARK_.call(null,map__43751))?cljs.core.apply.call(null,cljs.core.hash_map,map__43751):map__43751);var raw = cljs.core.get.call(null,map__43751__$1,new cljs.core.Keyword(null,"raw","raw",1604651272));var comm = cljs.core.async.chan.call(null,(1));goog.net.XhrIo.send(url,((function (comm,map__43751,map__43751__$1,raw){
return (function (event){cljs.core.async.put_BANG_.call(null,comm,((function (comm,map__43751,map__43751__$1,raw){
return (function (d){if(cljs.core.truth_(raw))
{return d;
} else
{return cljs.core.js__GT_clj.call(null,d,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true);
}
});})(comm,map__43751,map__43751__$1,raw))
.call(null,(JSON.parse(event.target.getResponseText())["data"])));
return cljs.core.async.close_BANG_.call(null,comm);
});})(comm,map__43751,map__43751__$1,raw))
);
return comm;
};
var GET = function (url,var_args){
var p__43749 = null;if (arguments.length > 1) {
  p__43749 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return GET__delegate.call(this,url,p__43749);};
GET.cljs$lang$maxFixedArity = 1;
GET.cljs$lang$applyTo = (function (arglist__43752){
var url = cljs.core.first(arglist__43752);
var p__43749 = cljs.core.rest(arglist__43752);
return GET__delegate(url,p__43749);
});
GET.cljs$core$IFn$_invoke$arity$variadic = GET__delegate;
return GET;
})()
;
/**
* - ocomm : a channel containing [result-chans result-handler-args]
* gather results from the one-or-more result-chans, and
* pass them to the handler along with any result-handler-args
* - handler : invoked with (apply handler result-or-results result-handler-args)
*/
clustermap.api.ordered_api_results = (function ordered_api_results(ocomm,handler){var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__){
return (function (state_43885){var state_val_43886 = (state_43885[(1)]);if((state_val_43886 === (7)))
{var inst_43843 = (state_43885[(7)]);var inst_43842 = (state_43885[(2)]);var inst_43843__$1 = cljs.core.nth.call(null,inst_43842,(0),null);var inst_43844 = cljs.core.nth.call(null,inst_43842,(1),null);var inst_43845 = cljs.core.sequential_QMARK_.call(null,inst_43843__$1);var state_43885__$1 = (function (){var statearr_43887 = state_43885;(statearr_43887[(7)] = inst_43843__$1);
(statearr_43887[(8)] = inst_43844);
return statearr_43887;
})();if(inst_43845)
{var statearr_43888_43923 = state_43885__$1;(statearr_43888_43923[(1)] = (8));
} else
{var statearr_43889_43924 = state_43885__$1;(statearr_43889_43924[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (20)))
{var inst_43843 = (state_43885[(7)]);var state_43885__$1 = state_43885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(23),inst_43843);
} else
{if((state_val_43886 === (1)))
{var state_43885__$1 = state_43885;var statearr_43890_43925 = state_43885__$1;(statearr_43890_43925[(2)] = null);
(statearr_43890_43925[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (4)))
{var state_43885__$1 = state_43885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(7),ocomm);
} else
{if((state_val_43886 === (15)))
{var inst_43865 = (state_43885[(2)]);var state_43885__$1 = state_43885;var statearr_43891_43926 = state_43885__$1;(statearr_43891_43926[(2)] = inst_43865);
(statearr_43891_43926[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (21)))
{var state_43885__$1 = state_43885;var statearr_43892_43927 = state_43885__$1;(statearr_43892_43927[(2)] = null);
(statearr_43892_43927[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (13)))
{var inst_43848 = (state_43885[(9)]);var state_43885__$1 = state_43885;var statearr_43893_43928 = state_43885__$1;(statearr_43893_43928[(2)] = inst_43848);
(statearr_43893_43928[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (22)))
{var inst_43874 = (state_43885[(2)]);var state_43885__$1 = state_43885;var statearr_43894_43929 = state_43885__$1;(statearr_43894_43929[(2)] = inst_43874);
(statearr_43894_43929[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (6)))
{var inst_43881 = (state_43885[(2)]);var state_43885__$1 = state_43885;var statearr_43895_43930 = state_43885__$1;(statearr_43895_43930[(2)] = inst_43881);
(statearr_43895_43930[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (17)))
{var state_43885__$1 = state_43885;var statearr_43896_43931 = state_43885__$1;(statearr_43896_43931[(2)] = null);
(statearr_43896_43931[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (3)))
{var inst_43883 = (state_43885[(2)]);var state_43885__$1 = state_43885;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43885__$1,inst_43883);
} else
{if((state_val_43886 === (12)))
{var inst_43867 = (state_43885[(2)]);var state_43885__$1 = state_43885;var statearr_43897_43932 = state_43885__$1;(statearr_43897_43932[(2)] = inst_43867);
(statearr_43897_43932[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (2)))
{var state_43885__$1 = state_43885;if(true)
{var statearr_43898_43933 = state_43885__$1;(statearr_43898_43933[(1)] = (4));
} else
{var statearr_43899_43934 = state_43885__$1;(statearr_43899_43934[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (23)))
{var inst_43871 = (state_43885[(2)]);var state_43885__$1 = state_43885;var statearr_43900_43935 = state_43885__$1;(statearr_43900_43935[(2)] = inst_43871);
(statearr_43900_43935[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (19)))
{var inst_43858 = (state_43885[(2)]);var state_43885__$1 = state_43885;var statearr_43901_43936 = state_43885__$1;(statearr_43901_43936[(2)] = inst_43858);
(statearr_43901_43936[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (11)))
{var inst_43847 = (state_43885[(10)]);var inst_43850 = cljs.core.empty_QMARK_.call(null,inst_43847);var state_43885__$1 = state_43885;if(inst_43850)
{var statearr_43902_43937 = state_43885__$1;(statearr_43902_43937[(1)] = (13));
} else
{var statearr_43903_43938 = state_43885__$1;(statearr_43903_43938[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (9)))
{var inst_43843 = (state_43885[(7)]);var state_43885__$1 = state_43885;if(cljs.core.truth_(inst_43843))
{var statearr_43904_43939 = state_43885__$1;(statearr_43904_43939[(1)] = (20));
} else
{var statearr_43905_43940 = state_43885__$1;(statearr_43905_43940[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (5)))
{var state_43885__$1 = state_43885;var statearr_43906_43941 = state_43885__$1;(statearr_43906_43941[(2)] = null);
(statearr_43906_43941[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (14)))
{var inst_43847 = (state_43885[(10)]);var inst_43853 = cljs.core.rest.call(null,inst_43847);var inst_43854 = cljs.core.first.call(null,inst_43847);var state_43885__$1 = (function (){var statearr_43907 = state_43885;(statearr_43907[(11)] = inst_43853);
return statearr_43907;
})();if(cljs.core.truth_(inst_43854))
{var statearr_43908_43942 = state_43885__$1;(statearr_43908_43942[(1)] = (16));
} else
{var statearr_43909_43943 = state_43885__$1;(statearr_43909_43943[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (16)))
{var inst_43847 = (state_43885[(10)]);var inst_43856 = cljs.core.first.call(null,inst_43847);var state_43885__$1 = state_43885;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43885__$1,(19),inst_43856);
} else
{if((state_val_43886 === (10)))
{var inst_43844 = (state_43885[(8)]);var inst_43876 = (state_43885[(2)]);var inst_43877 = cljs.core.apply.call(null,handler,inst_43876,inst_43844);var state_43885__$1 = (function (){var statearr_43910 = state_43885;(statearr_43910[(12)] = inst_43877);
return statearr_43910;
})();var statearr_43911_43944 = state_43885__$1;(statearr_43911_43944[(2)] = null);
(statearr_43911_43944[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (18)))
{var inst_43853 = (state_43885[(11)]);var inst_43848 = (state_43885[(9)]);var inst_43861 = (state_43885[(2)]);var inst_43862 = cljs.core.conj.call(null,inst_43848,inst_43861);var inst_43847 = inst_43853;var inst_43848__$1 = inst_43862;var state_43885__$1 = (function (){var statearr_43912 = state_43885;(statearr_43912[(9)] = inst_43848__$1);
(statearr_43912[(10)] = inst_43847);
return statearr_43912;
})();var statearr_43913_43945 = state_43885__$1;(statearr_43913_43945[(2)] = null);
(statearr_43913_43945[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_43886 === (8)))
{var inst_43843 = (state_43885[(7)]);var inst_43847 = inst_43843;var inst_43848 = cljs.core.PersistentVector.EMPTY;var state_43885__$1 = (function (){var statearr_43914 = state_43885;(statearr_43914[(9)] = inst_43848);
(statearr_43914[(10)] = inst_43847);
return statearr_43914;
})();var statearr_43915_43946 = state_43885__$1;(statearr_43915_43946[(2)] = null);
(statearr_43915_43946[(1)] = (11));
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
});})(c__5693__auto__))
;return ((function (switch__5678__auto__,c__5693__auto__){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43919 = [null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_43919[(0)] = state_machine__5679__auto__);
(statearr_43919[(1)] = (1));
return statearr_43919;
});
var state_machine__5679__auto____1 = (function (state_43885){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_43885);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43920){if((e43920 instanceof Object))
{var ex__5682__auto__ = e43920;var statearr_43921_43947 = state_43885;(statearr_43921_43947[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43885);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e43920;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__43948 = state_43885;
state_43885 = G__43948;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43885){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__))
})();var state__5695__auto__ = (function (){var statearr_43922 = f__5694__auto__.call(null);(statearr_43922[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_43922;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__))
);
return c__5693__auto__;
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
var G__43951__delegate = function (req_args){var temp__4124__auto__ = cljs.core.apply.call(null,request_handler,req_args);if(cljs.core.truth_(temp__4124__auto__))
{var r = temp__4124__auto__;var rseq = ((cljs.core.sequential_QMARK_.call(null,r))?r:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [r], null));var vec__43950 = rseq;var rcomm = cljs.core.nth.call(null,vec__43950,(0),null);var result_handler_args = cljs.core.nthnext.call(null,vec__43950,(1));return cljs.core.async.put_BANG_.call(null,ocomm,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [rcomm,result_handler_args], null));
} else
{return null;
}
};
var G__43951 = function (var_args){
var req_args = null;if (arguments.length > 0) {
  req_args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return G__43951__delegate.call(this,req_args);};
G__43951.cljs$lang$maxFixedArity = 0;
G__43951.cljs$lang$applyTo = (function (arglist__43952){
var req_args = cljs.core.seq(arglist__43952);
return G__43951__delegate(req_args);
});
G__43951.cljs$core$IFn$_invoke$arity$variadic = G__43951__delegate;
return G__43951;
})()
;
;})(ocomm,_))
});
/**
* @param {...*} var_args
*/
clustermap.api.log_api = (function() { 
var log_api__delegate = function (f,args){var ch = cljs.core.apply.call(null,f,args);var c__5693__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto__,ch){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto__,ch){
return (function (state_43970){var state_val_43971 = (state_43970[(1)]);if((state_val_43971 === (2)))
{var inst_43967 = (state_43970[(2)]);var inst_43968 = console.log(inst_43967);var state_43970__$1 = state_43970;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_43970__$1,inst_43968);
} else
{if((state_val_43971 === (1)))
{var state_43970__$1 = state_43970;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_43970__$1,(2),ch);
} else
{return null;
}
}
});})(c__5693__auto__,ch))
;return ((function (switch__5678__auto__,c__5693__auto__,ch){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_43975 = [null,null,null,null,null,null,null];(statearr_43975[(0)] = state_machine__5679__auto__);
(statearr_43975[(1)] = (1));
return statearr_43975;
});
var state_machine__5679__auto____1 = (function (state_43970){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_43970);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e43976){if((e43976 instanceof Object))
{var ex__5682__auto__ = e43976;var statearr_43977_43979 = state_43970;(statearr_43977_43979[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_43970);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e43976;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__43980 = state_43970;
state_43970 = G__43980;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_43970){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_43970);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto__,ch))
})();var state__5695__auto__ = (function (){var statearr_43978 = f__5694__auto__.call(null);(statearr_43978[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto__);
return statearr_43978;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto__,ch))
);
return c__5693__auto__;
};
var log_api = function (f,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log_api__delegate.call(this,f,args);};
log_api.cljs$lang$maxFixedArity = 1;
log_api.cljs$lang$applyTo = (function (arglist__43981){
var f = cljs.core.first(arglist__43981);
var args = cljs.core.rest(arglist__43981);
return log_api__delegate(f,args);
});
log_api.cljs$core$IFn$_invoke$arity$variadic = log_api__delegate;
return log_api;
})()
;
clustermap.api.map_json_params = (function map_json_params(m){return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p__43984){var vec__43985 = p__43984;var k = cljs.core.nth.call(null,vec__43985,(0),null);var v = cljs.core.nth.call(null,vec__43985,(1),null);return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,k))+"="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(cljs.core.clj__GT_js.call(null,v))));
}),m));
});
/**
* put the results of an api call into an atom... makes ad-hoc api calls easy
*/
clustermap.api.fetch = (function fetch(comm){var r = cljs.core.atom.call(null,null);var c__5693__auto___44012 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5693__auto___44012,r){
return (function (){var f__5694__auto__ = (function (){var switch__5678__auto__ = ((function (c__5693__auto___44012,r){
return (function (state_44003){var state_val_44004 = (state_44003[(1)]);if((state_val_44004 === (2)))
{var inst_44000 = (state_44003[(2)]);var inst_44001 = cljs.core.reset_BANG_.call(null,r,inst_44000);var state_44003__$1 = state_44003;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_44003__$1,inst_44001);
} else
{if((state_val_44004 === (1)))
{var state_44003__$1 = state_44003;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_44003__$1,(2),comm);
} else
{return null;
}
}
});})(c__5693__auto___44012,r))
;return ((function (switch__5678__auto__,c__5693__auto___44012,r){
return (function() {
var state_machine__5679__auto__ = null;
var state_machine__5679__auto____0 = (function (){var statearr_44008 = [null,null,null,null,null,null,null];(statearr_44008[(0)] = state_machine__5679__auto__);
(statearr_44008[(1)] = (1));
return statearr_44008;
});
var state_machine__5679__auto____1 = (function (state_44003){while(true){
var ret_value__5680__auto__ = (function (){try{while(true){
var result__5681__auto__ = switch__5678__auto__.call(null,state_44003);if(cljs.core.keyword_identical_QMARK_.call(null,result__5681__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5681__auto__;
}
break;
}
}catch (e44009){if((e44009 instanceof Object))
{var ex__5682__auto__ = e44009;var statearr_44010_44013 = state_44003;(statearr_44010_44013[(5)] = ex__5682__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_44003);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e44009;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5680__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__44014 = state_44003;
state_44003 = G__44014;
continue;
}
} else
{return ret_value__5680__auto__;
}
break;
}
});
state_machine__5679__auto__ = function(state_44003){
switch(arguments.length){
case 0:
return state_machine__5679__auto____0.call(this);
case 1:
return state_machine__5679__auto____1.call(this,state_44003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5679__auto____0;
state_machine__5679__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5679__auto____1;
return state_machine__5679__auto__;
})()
;})(switch__5678__auto__,c__5693__auto___44012,r))
})();var state__5695__auto__ = (function (){var statearr_44011 = f__5694__auto__.call(null);(statearr_44011[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5693__auto___44012);
return statearr_44011;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5695__auto__);
});})(c__5693__auto___44012,r))
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
boundarylines.cljs$lang$applyTo = (function (arglist__44015){
var id = cljs.core.first(arglist__44015);
arglist__44015 = cljs.core.next(arglist__44015);
var tolerance = cljs.core.first(arglist__44015);
var opts = cljs.core.rest(arglist__44015);
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
boundaryline_collection_index.cljs$lang$applyTo = (function (arglist__44016){
var id = cljs.core.first(arglist__44016);
var opts = cljs.core.rest(arglist__44016);
return boundaryline_collection_index__delegate(id,opts);
});
boundaryline_collection_index.cljs$core$IFn$_invoke$arity$variadic = boundaryline_collection_index__delegate;
return boundaryline_collection_index;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.boundaryline_aggregation = (function() { 
var boundaryline_aggregation__delegate = function (index,type,blcoll,attr,p__44017){var vec__44019 = p__44017;var type_ids = cljs.core.nth.call(null,vec__44019,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/boundaryline-agg/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(blcoll)+"/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr)+"?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var boundaryline_aggregation = function (index,type,blcoll,attr,var_args){
var p__44017 = null;if (arguments.length > 4) {
  p__44017 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 4),0);} 
return boundaryline_aggregation__delegate.call(this,index,type,blcoll,attr,p__44017);};
boundaryline_aggregation.cljs$lang$maxFixedArity = 4;
boundaryline_aggregation.cljs$lang$applyTo = (function (arglist__44020){
var index = cljs.core.first(arglist__44020);
arglist__44020 = cljs.core.next(arglist__44020);
var type = cljs.core.first(arglist__44020);
arglist__44020 = cljs.core.next(arglist__44020);
var blcoll = cljs.core.first(arglist__44020);
arglist__44020 = cljs.core.next(arglist__44020);
var attr = cljs.core.first(arglist__44020);
var p__44017 = cljs.core.rest(arglist__44020);
return boundaryline_aggregation__delegate(index,type,blcoll,attr,p__44017);
});
boundaryline_aggregation.cljs$core$IFn$_invoke$arity$variadic = boundaryline_aggregation__delegate;
return boundaryline_aggregation;
})()
;
clustermap.api.search = (function search(q){if((cljs.core.count.call(null,clojure.string.trim.call(null,q)) > (0)))
{return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/search?q="+cljs.core.str.cljs$core$IFn$_invoke$arity$1(q)));
} else
{return cljs.core.async.to_chan.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [{}], null));
}
});
clustermap.api.constituency = (function constituency(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/constituencies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
clustermap.api.portfolio_company = (function portfolio_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites = (function() { 
var portfolio_company_sites__delegate = function (p__44021){var vec__44023 = p__44021;var type_ids = cljs.core.nth.call(null,vec__44023,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites = function (var_args){
var p__44021 = null;if (arguments.length > 0) {
  p__44021 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites__delegate.call(this,p__44021);};
portfolio_company_sites.cljs$lang$maxFixedArity = 0;
portfolio_company_sites.cljs$lang$applyTo = (function (arglist__44024){
var p__44021 = cljs.core.seq(arglist__44024);
return portfolio_company_sites__delegate(p__44021);
});
portfolio_company_sites.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites__delegate;
return portfolio_company_sites;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_sites_by_company = (function() { 
var portfolio_company_sites_by_company__delegate = function (p__44025){var vec__44027 = p__44025;var type_ids = cljs.core.nth.call(null,vec__44027,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(100),new cljs.core.Keyword(null,"sort","sort",953465918),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"!latest_turnover","!latest_turnover",-1853433972),"desc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-sites-by-company?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var portfolio_company_sites_by_company = function (var_args){
var p__44025 = null;if (arguments.length > 0) {
  p__44025 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_sites_by_company__delegate.call(this,p__44025);};
portfolio_company_sites_by_company.cljs$lang$maxFixedArity = 0;
portfolio_company_sites_by_company.cljs$lang$applyTo = (function (arglist__44028){
var p__44025 = cljs.core.seq(arglist__44028);
return portfolio_company_sites_by_company__delegate(p__44025);
});
portfolio_company_sites_by_company.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_sites_by_company__delegate;
return portfolio_company_sites_by_company;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_locations = (function() { 
var portfolio_company_locations__delegate = function (p__44029){var vec__44031 = p__44029;var type_ids = cljs.core.nth.call(null,vec__44031,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-locations?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_locations = function (var_args){
var p__44029 = null;if (arguments.length > 0) {
  p__44029 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_locations__delegate.call(this,p__44029);};
portfolio_company_locations.cljs$lang$maxFixedArity = 0;
portfolio_company_locations.cljs$lang$applyTo = (function (arglist__44032){
var p__44029 = cljs.core.seq(arglist__44032);
return portfolio_company_locations__delegate(p__44029);
});
portfolio_company_locations.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_locations__delegate;
return portfolio_company_locations;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_stats = (function() { 
var portfolio_company_site_stats__delegate = function (p__44033){var vec__44035 = p__44033;var type_ids = cljs.core.nth.call(null,vec__44035,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_stats = function (var_args){
var p__44033 = null;if (arguments.length > 0) {
  p__44033 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_stats__delegate.call(this,p__44033);};
portfolio_company_site_stats.cljs$lang$maxFixedArity = 0;
portfolio_company_site_stats.cljs$lang$applyTo = (function (arglist__44036){
var p__44033 = cljs.core.seq(arglist__44036);
return portfolio_company_site_stats__delegate(p__44033);
});
portfolio_company_site_stats.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_stats__delegate;
return portfolio_company_site_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.portfolio_company_site_account_timelines = (function() { 
var portfolio_company_site_account_timelines__delegate = function (p__44037){var vec__44039 = p__44037;var type_ids = cljs.core.nth.call(null,vec__44039,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/portfolio-company-site-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var portfolio_company_site_account_timelines = function (var_args){
var p__44037 = null;if (arguments.length > 0) {
  p__44037 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return portfolio_company_site_account_timelines__delegate.call(this,p__44037);};
portfolio_company_site_account_timelines.cljs$lang$maxFixedArity = 0;
portfolio_company_site_account_timelines.cljs$lang$applyTo = (function (arglist__44040){
var p__44037 = cljs.core.seq(arglist__44040);
return portfolio_company_site_account_timelines__delegate(p__44037);
});
portfolio_company_site_account_timelines.cljs$core$IFn$_invoke$arity$variadic = portfolio_company_site_account_timelines__delegate;
return portfolio_company_site_account_timelines;
})()
;
clustermap.api.investor_company = (function investor_company(id){return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investor-companies/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(id)));
});
/**
* @param {...*} var_args
*/
clustermap.api.investment_account_timelines = (function() { 
var investment_account_timelines__delegate = function (p__44041){var vec__44043 = p__44041;var type_ids = cljs.core.nth.call(null,vec__44043,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-account-timelines?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_account_timelines = function (var_args){
var p__44041 = null;if (arguments.length > 0) {
  p__44041 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_account_timelines__delegate.call(this,p__44041);};
investment_account_timelines.cljs$lang$maxFixedArity = 0;
investment_account_timelines.cljs$lang$applyTo = (function (arglist__44044){
var p__44041 = cljs.core.seq(arglist__44044);
return investment_account_timelines__delegate(p__44041);
});
investment_account_timelines.cljs$core$IFn$_invoke$arity$variadic = investment_account_timelines__delegate;
return investment_account_timelines;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_stats = (function() { 
var investment_stats__delegate = function (p__44045){var vec__44047 = p__44045;var type_ids = cljs.core.nth.call(null,vec__44047,(0),null);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-stats?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids))));
};
var investment_stats = function (var_args){
var p__44045 = null;if (arguments.length > 0) {
  p__44045 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_stats__delegate.call(this,p__44045);};
investment_stats.cljs$lang$maxFixedArity = 0;
investment_stats.cljs$lang$applyTo = (function (arglist__44048){
var p__44045 = cljs.core.seq(arglist__44048);
return investment_stats__delegate(p__44045);
});
investment_stats.cljs$core$IFn$_invoke$arity$variadic = investment_stats__delegate;
return investment_stats;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investment_aggs = (function() { 
var investment_aggs__delegate = function (p__44049){var vec__44051 = p__44049;var type_ids = cljs.core.nth.call(null,vec__44051,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"latest_turnover","latest_turnover",-1335568590),"desc"], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investment-aggs?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investment_aggs = function (var_args){
var p__44049 = null;if (arguments.length > 0) {
  p__44049 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investment_aggs__delegate.call(this,p__44049);};
investment_aggs.cljs$lang$maxFixedArity = 0;
investment_aggs.cljs$lang$applyTo = (function (arglist__44052){
var p__44049 = cljs.core.seq(arglist__44052);
return investment_aggs__delegate(p__44049);
});
investment_aggs.cljs$core$IFn$_invoke$arity$variadic = investment_aggs__delegate;
return investment_aggs;
})()
;
/**
* @param {...*} var_args
*/
clustermap.api.investments = (function() { 
var investments__delegate = function (p__44053){var vec__44055 = p__44053;var type_ids = cljs.core.nth.call(null,vec__44055,(0),null);var type_ids__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"size","size",1098693007),(50),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?boundaryline_compact_name_na","?boundaryline_compact_name_na",35068819),"asc"], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"?investor_company_name_na","?investor_company_name_na",2080546953),"asc"], null)], null)], null),type_ids);return clustermap.api.GET.call(null,("/api/"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.api_prefix)+"/investments?"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(clustermap.api.map_json_params.call(null,type_ids__$1))));
};
var investments = function (var_args){
var p__44053 = null;if (arguments.length > 0) {
  p__44053 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return investments__delegate.call(this,p__44053);};
investments.cljs$lang$maxFixedArity = 0;
investments.cljs$lang$applyTo = (function (arglist__44056){
var p__44053 = cljs.core.seq(arglist__44056);
return investments__delegate(p__44053);
});
investments.cljs$core$IFn$_invoke$arity$variadic = investments__delegate;
return investments;
})()
;

//# sourceMappingURL=api.js.map
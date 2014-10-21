// Compiled by ClojureScript 0.0-2356
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('goog.net.jsloader');
goog.require('goog.net.jsloader');
/**
* @param {...*} var_args
*/
figwheel.client.log = (function() { 
var log__delegate = function (p__86573,args){var map__86575 = p__86573;var map__86575__$1 = ((cljs.core.seq_QMARK_.call(null,map__86575))?cljs.core.apply.call(null,cljs.core.hash_map,map__86575):map__86575);var debug = cljs.core.get.call(null,map__86575__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__86573,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__86573,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__86576){
var p__86573 = cljs.core.first(arglist__86576);
var args = cljs.core.rest(arglist__86576);
return log__delegate(p__86573,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__86577){var map__86579 = p__86577;var map__86579__$1 = ((cljs.core.seq_QMARK_.call(null,map__86579))?cljs.core.apply.call(null,cljs.core.hash_map,map__86579):map__86579);var websocket_url = cljs.core.get.call(null,map__86579__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__86580,callback){var map__86582 = p__86580;var map__86582__$1 = ((cljs.core.seq_QMARK_.call(null,map__86582))?cljs.core.apply.call(null,cljs.core.hash_map,map__86582):map__86582);var msg = map__86582__$1;var dependency_file = cljs.core.get.call(null,map__86582__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__86582__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__86582__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3637__auto__ = dependency_file;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__86582,map__86582__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__86582,map__86582__$1,msg,dependency_file,namespace,request_url))
);
} else
{return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
}
});
figwheel.client.reload_js_file = (function reload_js_file(file_msg){var out = cljs.core.async.chan.call(null);figwheel.client.js_reload.call(null,file_msg,((function (out){
return (function (url){cljs.core.async.put_BANG_.call(null,out,url);
return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);
return out;
});
figwheel.client.load_all_js_files = (function load_all_js_files(files){return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,cljs.core.async.filter_LT_.call(null,cljs.core.identity,cljs.core.async.merge.call(null,cljs.core.mapv.call(null,figwheel.client.reload_js_file,files))));
});
figwheel.client.add_request_url = (function add_request_url(p__86583,p__86584){var map__86587 = p__86583;var map__86587__$1 = ((cljs.core.seq_QMARK_.call(null,map__86587))?cljs.core.apply.call(null,cljs.core.hash_map,map__86587):map__86587);var opts = map__86587__$1;var url_rewriter = cljs.core.get.call(null,map__86587__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__86588 = p__86584;var map__86588__$1 = ((cljs.core.seq_QMARK_.call(null,map__86588))?cljs.core.apply.call(null,cljs.core.hash_map,map__86588):map__86588);var d = map__86588__$1;var file = cljs.core.get.call(null,map__86588__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__86589,p__86590){var map__86632 = p__86589;var map__86632__$1 = ((cljs.core.seq_QMARK_.call(null,map__86632))?cljs.core.apply.call(null,cljs.core.hash_map,map__86632):map__86632);var opts = map__86632__$1;var on_jsload = cljs.core.get.call(null,map__86632__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__86632__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__86633 = p__86590;var map__86633__$1 = ((cljs.core.seq_QMARK_.call(null,map__86633))?cljs.core.apply.call(null,cljs.core.hash_map,map__86633):map__86633);var files = cljs.core.get.call(null,map__86633__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__86632,map__86632__$1,opts,on_jsload,before_jsload,map__86633,map__86633__$1,files){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__86632,map__86632__$1,opts,on_jsload,before_jsload,map__86633,map__86633__$1,files){
return (function (state_86656){var state_val_86657 = (state_86656[(1)]);if((state_val_86657 === (6)))
{var inst_86638 = (state_86656[(7)]);var inst_86647 = (state_86656[(2)]);var inst_86648 = cljs.core.PersistentVector.EMPTY_NODE;var inst_86649 = [inst_86638];var inst_86650 = (new cljs.core.PersistentVector(null,1,(5),inst_86648,inst_86649,null));var inst_86651 = cljs.core.apply.call(null,on_jsload,inst_86650);var state_86656__$1 = (function (){var statearr_86658 = state_86656;(statearr_86658[(8)] = inst_86647);
return statearr_86658;
})();var statearr_86659_86673 = state_86656__$1;(statearr_86659_86673[(2)] = inst_86651);
(statearr_86659_86673[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86657 === (5)))
{var inst_86654 = (state_86656[(2)]);var state_86656__$1 = state_86656;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86656__$1,inst_86654);
} else
{if((state_val_86657 === (4)))
{var state_86656__$1 = state_86656;var statearr_86660_86674 = state_86656__$1;(statearr_86660_86674[(2)] = null);
(statearr_86660_86674[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86657 === (3)))
{var inst_86638 = (state_86656[(7)]);var inst_86641 = console.debug("Figwheel: loaded these files");var inst_86642 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_86638);var inst_86643 = cljs.core.prn_str.call(null,inst_86642);var inst_86644 = console.log(inst_86643);var inst_86645 = cljs.core.async.timeout.call(null,(10));var state_86656__$1 = (function (){var statearr_86661 = state_86656;(statearr_86661[(9)] = inst_86644);
(statearr_86661[(10)] = inst_86641);
return statearr_86661;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86656__$1,(6),inst_86645);
} else
{if((state_val_86657 === (2)))
{var inst_86638 = (state_86656[(7)]);var inst_86638__$1 = (state_86656[(2)]);var inst_86639 = cljs.core.not_empty.call(null,inst_86638__$1);var state_86656__$1 = (function (){var statearr_86662 = state_86656;(statearr_86662[(7)] = inst_86638__$1);
return statearr_86662;
})();if(cljs.core.truth_(inst_86639))
{var statearr_86663_86675 = state_86656__$1;(statearr_86663_86675[(1)] = (3));
} else
{var statearr_86664_86676 = state_86656__$1;(statearr_86664_86676[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_86657 === (1)))
{var inst_86634 = before_jsload.call(null,files);var inst_86635 = figwheel.client.add_request_urls.call(null,opts,files);var inst_86636 = figwheel.client.load_all_js_files.call(null,inst_86635);var state_86656__$1 = (function (){var statearr_86665 = state_86656;(statearr_86665[(11)] = inst_86634);
return statearr_86665;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86656__$1,(2),inst_86636);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto__,map__86632,map__86632__$1,opts,on_jsload,before_jsload,map__86633,map__86633__$1,files))
;return ((function (switch__5804__auto__,c__5819__auto__,map__86632,map__86632__$1,opts,on_jsload,before_jsload,map__86633,map__86633__$1,files){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_86669 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_86669[(0)] = state_machine__5805__auto__);
(statearr_86669[(1)] = (1));
return statearr_86669;
});
var state_machine__5805__auto____1 = (function (state_86656){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86656);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86670){if((e86670 instanceof Object))
{var ex__5808__auto__ = e86670;var statearr_86671_86677 = state_86656;(statearr_86671_86677[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86656);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86670;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86678 = state_86656;
state_86656 = G__86678;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86656){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86656);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__86632,map__86632__$1,opts,on_jsload,before_jsload,map__86633,map__86633__$1,files))
})();var state__5821__auto__ = (function (){var statearr_86672 = f__5820__auto__.call(null);(statearr_86672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_86672;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__86632,map__86632__$1,opts,on_jsload,before_jsload,map__86633,map__86633__$1,files))
);
return c__5819__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__86679,link_href){var map__86681 = p__86679;var map__86681__$1 = ((cljs.core.seq_QMARK_.call(null,map__86681))?cljs.core.apply.call(null,cljs.core.hash_map,map__86681):map__86681);var request_url = cljs.core.get.call(null,map__86681__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__86681__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
});
figwheel.client.get_correct_link = (function get_correct_link(f_data){return cljs.core.some.call(null,(function (l){if(figwheel.client.matches_file_QMARK_.call(null,f_data,l.href))
{return l;
} else
{return null;
}
}),figwheel.client.current_links.call(null));
});
figwheel.client.clone_link = (function clone_link(link,url){var clone = document.createElement("link");clone.rel = "stylesheet";
clone.media = link.media;
clone.disabled = link.disabled;
clone.href = figwheel.client.add_cache_buster.call(null,url);
return clone;
});
figwheel.client.create_link = (function create_link(url){var link = document.createElement("link");link.rel = "stylesheet";
link.href = figwheel.client.add_cache_buster.call(null,url);
return link;
});
figwheel.client.add_link_to_doc = (function() {
var add_link_to_doc = null;
var add_link_to_doc__1 = (function (new_link){return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});
var add_link_to_doc__2 = (function (orig_link,klone){var parent = orig_link.parentNode;if(cljs.core._EQ_.call(null,orig_link,parent.lastChild))
{parent.appendChild(klone);
} else
{parent.insertBefore(klone,orig_link.nextSibling);
}
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,parent){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,parent){
return (function (state_86702){var state_val_86703 = (state_86702[(1)]);if((state_val_86703 === (2)))
{var inst_86699 = (state_86702[(2)]);var inst_86700 = parent.removeChild(orig_link);var state_86702__$1 = (function (){var statearr_86704 = state_86702;(statearr_86704[(7)] = inst_86699);
return statearr_86704;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86702__$1,inst_86700);
} else
{if((state_val_86703 === (1)))
{var inst_86697 = cljs.core.async.timeout.call(null,(200));var state_86702__$1 = state_86702;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86702__$1,(2),inst_86697);
} else
{return null;
}
}
});})(c__5819__auto__,parent))
;return ((function (switch__5804__auto__,c__5819__auto__,parent){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_86708 = [null,null,null,null,null,null,null,null];(statearr_86708[(0)] = state_machine__5805__auto__);
(statearr_86708[(1)] = (1));
return statearr_86708;
});
var state_machine__5805__auto____1 = (function (state_86702){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86702);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86709){if((e86709 instanceof Object))
{var ex__5808__auto__ = e86709;var statearr_86710_86712 = state_86702;(statearr_86710_86712[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86702);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86709;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86713 = state_86702;
state_86702 = G__86713;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86702){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86702);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,parent))
})();var state__5821__auto__ = (function (){var statearr_86711 = f__5820__auto__.call(null);(statearr_86711[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_86711;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,parent))
);
return c__5819__auto__;
});
add_link_to_doc = function(orig_link,klone){
switch(arguments.length){
case 1:
return add_link_to_doc__1.call(this,orig_link);
case 2:
return add_link_to_doc__2.call(this,orig_link,klone);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = add_link_to_doc__1;
add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = add_link_to_doc__2;
return add_link_to_doc;
})()
;
figwheel.client.reload_css_file = (function reload_css_file(p__86714){var map__86716 = p__86714;var map__86716__$1 = ((cljs.core.seq_QMARK_.call(null,map__86716))?cljs.core.apply.call(null,cljs.core.hash_map,map__86716):map__86716);var f_data = map__86716__$1;var request_url = cljs.core.get.call(null,map__86716__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__86716__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__86717,files_msg){var map__86739 = p__86717;var map__86739__$1 = ((cljs.core.seq_QMARK_.call(null,map__86739))?cljs.core.apply.call(null,cljs.core.hash_map,map__86739):map__86739);var opts = map__86739__$1;var on_cssload = cljs.core.get.call(null,map__86739__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__86740_86760 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__86741_86761 = null;var count__86742_86762 = (0);var i__86743_86763 = (0);while(true){
if((i__86743_86763 < count__86742_86762))
{var f_86764 = cljs.core._nth.call(null,chunk__86741_86761,i__86743_86763);figwheel.client.reload_css_file.call(null,f_86764);
{
var G__86765 = seq__86740_86760;
var G__86766 = chunk__86741_86761;
var G__86767 = count__86742_86762;
var G__86768 = (i__86743_86763 + (1));
seq__86740_86760 = G__86765;
chunk__86741_86761 = G__86766;
count__86742_86762 = G__86767;
i__86743_86763 = G__86768;
continue;
}
} else
{var temp__4126__auto___86769 = cljs.core.seq.call(null,seq__86740_86760);if(temp__4126__auto___86769)
{var seq__86740_86770__$1 = temp__4126__auto___86769;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86740_86770__$1))
{var c__4406__auto___86771 = cljs.core.chunk_first.call(null,seq__86740_86770__$1);{
var G__86772 = cljs.core.chunk_rest.call(null,seq__86740_86770__$1);
var G__86773 = c__4406__auto___86771;
var G__86774 = cljs.core.count.call(null,c__4406__auto___86771);
var G__86775 = (0);
seq__86740_86760 = G__86772;
chunk__86741_86761 = G__86773;
count__86742_86762 = G__86774;
i__86743_86763 = G__86775;
continue;
}
} else
{var f_86776 = cljs.core.first.call(null,seq__86740_86770__$1);figwheel.client.reload_css_file.call(null,f_86776);
{
var G__86777 = cljs.core.next.call(null,seq__86740_86770__$1);
var G__86778 = null;
var G__86779 = (0);
var G__86780 = (0);
seq__86740_86760 = G__86777;
chunk__86741_86761 = G__86778;
count__86742_86762 = G__86779;
i__86743_86763 = G__86780;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__86739,map__86739__$1,opts,on_cssload){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__86739,map__86739__$1,opts,on_cssload){
return (function (state_86750){var state_val_86751 = (state_86750[(1)]);if((state_val_86751 === (2)))
{var inst_86746 = (state_86750[(2)]);var inst_86747 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_86748 = on_cssload.call(null,inst_86747);var state_86750__$1 = (function (){var statearr_86752 = state_86750;(statearr_86752[(7)] = inst_86746);
return statearr_86752;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_86750__$1,inst_86748);
} else
{if((state_val_86751 === (1)))
{var inst_86744 = cljs.core.async.timeout.call(null,(100));var state_86750__$1 = state_86750;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_86750__$1,(2),inst_86744);
} else
{return null;
}
}
});})(c__5819__auto__,map__86739,map__86739__$1,opts,on_cssload))
;return ((function (switch__5804__auto__,c__5819__auto__,map__86739,map__86739__$1,opts,on_cssload){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_86756 = [null,null,null,null,null,null,null,null];(statearr_86756[(0)] = state_machine__5805__auto__);
(statearr_86756[(1)] = (1));
return statearr_86756;
});
var state_machine__5805__auto____1 = (function (state_86750){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_86750);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e86757){if((e86757 instanceof Object))
{var ex__5808__auto__ = e86757;var statearr_86758_86781 = state_86750;(statearr_86758_86781[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_86750);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e86757;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__86782 = state_86750;
state_86750 = G__86782;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_86750){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_86750);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__86739,map__86739__$1,opts,on_cssload))
})();var state__5821__auto__ = (function (){var statearr_86759 = f__5820__auto__.call(null);(statearr_86759[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_86759;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__86739,map__86739__$1,opts,on_cssload))
);
return c__5819__auto__;
});
figwheel.client.compile_failed = (function compile_failed(fail_msg,compile_fail_callback){return compile_fail_callback.call(null,cljs.core.dissoc.call(null,fail_msg,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)));
});
figwheel.client.figwheel_closure_import_script = (function figwheel_closure_import_script(src){if(cljs.core.truth_(goog.inHtmlDocument_()))
{goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,src));
return true;
} else
{return false;
}
});
figwheel.client.patch_goog_base = (function patch_goog_base(){goog.provide = goog.exportPath_;
return goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.figwheel_closure_import_script;
});
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__86783){var map__86788 = p__86783;var map__86788__$1 = ((cljs.core.seq_QMARK_.call(null,map__86788))?cljs.core.apply.call(null,cljs.core.hash_map,map__86788):map__86788);var opts = map__86788__$1;var on_compile_fail = cljs.core.get.call(null,map__86788__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__86788__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__86788__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__86788__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__86789 = cljs.core._EQ_;var expr__86790 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__86789.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__86790)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__86789.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__86790)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__86789.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__86790)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__86788,map__86788__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj86795 = {"detail":url};return obj86795;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__86796){var map__86798 = p__86796;var map__86798__$1 = ((cljs.core.seq_QMARK_.call(null,map__86798))?cljs.core.apply.call(null,cljs.core.hash_map,map__86798):map__86798);var class$ = cljs.core.get.call(null,map__86798__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__86798__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__86799){var map__86805 = p__86799;var map__86805__$1 = ((cljs.core.seq_QMARK_.call(null,map__86805))?cljs.core.apply.call(null,cljs.core.hash_map,map__86805):map__86805);var ed = map__86805__$1;var exception_data = cljs.core.get.call(null,map__86805__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__86805__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__86806_86810 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__86807_86811 = null;var count__86808_86812 = (0);var i__86809_86813 = (0);while(true){
if((i__86809_86813 < count__86808_86812))
{var msg_86814 = cljs.core._nth.call(null,chunk__86807_86811,i__86809_86813);console.log(msg_86814);
{
var G__86815 = seq__86806_86810;
var G__86816 = chunk__86807_86811;
var G__86817 = count__86808_86812;
var G__86818 = (i__86809_86813 + (1));
seq__86806_86810 = G__86815;
chunk__86807_86811 = G__86816;
count__86808_86812 = G__86817;
i__86809_86813 = G__86818;
continue;
}
} else
{var temp__4126__auto___86819 = cljs.core.seq.call(null,seq__86806_86810);if(temp__4126__auto___86819)
{var seq__86806_86820__$1 = temp__4126__auto___86819;if(cljs.core.chunked_seq_QMARK_.call(null,seq__86806_86820__$1))
{var c__4406__auto___86821 = cljs.core.chunk_first.call(null,seq__86806_86820__$1);{
var G__86822 = cljs.core.chunk_rest.call(null,seq__86806_86820__$1);
var G__86823 = c__4406__auto___86821;
var G__86824 = cljs.core.count.call(null,c__4406__auto___86821);
var G__86825 = (0);
seq__86806_86810 = G__86822;
chunk__86807_86811 = G__86823;
count__86808_86812 = G__86824;
i__86809_86813 = G__86825;
continue;
}
} else
{var msg_86826 = cljs.core.first.call(null,seq__86806_86820__$1);console.log(msg_86826);
{
var G__86827 = cljs.core.next.call(null,seq__86806_86820__$1);
var G__86828 = null;
var G__86829 = (0);
var G__86830 = (0);
seq__86806_86810 = G__86827;
chunk__86807_86811 = G__86828;
count__86808_86812 = G__86829;
i__86809_86813 = G__86830;
continue;
}
}
} else
{}
}
break;
}
return ed;
});
figwheel.client.default_before_load = (function default_before_load(files){console.debug("Figwheel: loading files");
return files;
});
figwheel.client.default_on_cssload = (function default_on_cssload(files){console.debug("Figwheel: loaded CSS files");
console.log(cljs.core.prn_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));
return files;
});
figwheel.client.watch_and_reload_with_opts = (function watch_and_reload_with_opts(opts){if(cljs.core.truth_(figwheel.client.hasOwnProperty("watch_and_reload_singleton")))
{return null;
} else
{figwheel.client.watch_and_reload_singleton = figwheel.client.watch_and_reload_STAR_.call(null,cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(100),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369),figwheel.client.default_on_jsload,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function (){var or__3637__auto__ = new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(opts);if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return figwheel.client.default_on_jsload;
}
})(),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318),figwheel.client.default_on_cssload,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),figwheel.client.default_before_load,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),figwheel.client.default_on_compile_fail,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838),cljs.core.identity,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),("ws://"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.host)+"/figwheel-ws")], null),opts));
}
});
/**
* @param {...*} var_args
*/
figwheel.client.watch_and_reload = (function() { 
var watch_and_reload__delegate = function (p__86831){var map__86833 = p__86831;var map__86833__$1 = ((cljs.core.seq_QMARK_.call(null,map__86833))?cljs.core.apply.call(null,cljs.core.hash_map,map__86833):map__86833);var opts = map__86833__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__86831 = null;if (arguments.length > 0) {
  p__86831 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__86831);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__86834){
var p__86831 = cljs.core.seq(arglist__86834);
return watch_and_reload__delegate(p__86831);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

//# sourceMappingURL=client.js.map
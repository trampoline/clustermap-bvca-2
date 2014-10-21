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
var log__delegate = function (p__24692,args){var map__24694 = p__24692;var map__24694__$1 = ((cljs.core.seq_QMARK_.call(null,map__24694))?cljs.core.apply.call(null,cljs.core.hash_map,map__24694):map__24694);var debug = cljs.core.get.call(null,map__24694__$1,new cljs.core.Keyword(null,"debug","debug",-1608172596));if(cljs.core.truth_(debug))
{return console.log(cljs.core.to_array.call(null,args));
} else
{return null;
}
};
var log = function (p__24692,var_args){
var args = null;if (arguments.length > 1) {
  args = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return log__delegate.call(this,p__24692,args);};
log.cljs$lang$maxFixedArity = 1;
log.cljs$lang$applyTo = (function (arglist__24695){
var p__24692 = cljs.core.first(arglist__24695);
var args = cljs.core.rest(arglist__24695);
return log__delegate(p__24692,args);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
figwheel.client.reload_host = (function reload_host(p__24696){var map__24698 = p__24696;var map__24698__$1 = ((cljs.core.seq_QMARK_.call(null,map__24698))?cljs.core.apply.call(null,cljs.core.hash_map,map__24698):map__24698);var websocket_url = cljs.core.get.call(null,map__24698__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));return cljs.core.first.call(null,clojure.string.split.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,websocket_url,/^ws:/,""),/^\/\//,""),/\//));
});
figwheel.client.add_cache_buster = (function add_cache_buster(url){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(url)+"?rel="+cljs.core.str.cljs$core$IFn$_invoke$arity$1((new Date()).getTime()));
});
figwheel.client.js_reload = (function js_reload(p__24699,callback){var map__24701 = p__24699;var map__24701__$1 = ((cljs.core.seq_QMARK_.call(null,map__24701))?cljs.core.apply.call(null,cljs.core.hash_map,map__24701):map__24701);var msg = map__24701__$1;var dependency_file = cljs.core.get.call(null,map__24701__$1,new cljs.core.Keyword(null,"dependency-file","dependency-file",-1682436382));var namespace = cljs.core.get.call(null,map__24701__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));var request_url = cljs.core.get.call(null,map__24701__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));if(cljs.core.truth_((function (){var or__3637__auto__ = dependency_file;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return goog.isProvided_(namespace);
}
})()))
{return goog.net.jsloader.load(figwheel.client.add_cache_buster.call(null,request_url)).addCallback(((function (map__24701,map__24701__$1,msg,dependency_file,namespace,request_url){
return (function (){return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [msg], null));
});})(map__24701,map__24701__$1,msg,dependency_file,namespace,request_url))
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
figwheel.client.add_request_url = (function add_request_url(p__24702,p__24703){var map__24706 = p__24702;var map__24706__$1 = ((cljs.core.seq_QMARK_.call(null,map__24706))?cljs.core.apply.call(null,cljs.core.hash_map,map__24706):map__24706);var opts = map__24706__$1;var url_rewriter = cljs.core.get.call(null,map__24706__$1,new cljs.core.Keyword(null,"url-rewriter","url-rewriter",200543838));var map__24707 = p__24703;var map__24707__$1 = ((cljs.core.seq_QMARK_.call(null,map__24707))?cljs.core.apply.call(null,cljs.core.hash_map,map__24707):map__24707);var d = map__24707__$1;var file = cljs.core.get.call(null,map__24707__$1,new cljs.core.Keyword(null,"file","file",-1269645878));return cljs.core.assoc.call(null,d,new cljs.core.Keyword(null,"request-url","request-url",2100346596),url_rewriter.call(null,("//"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.reload_host.call(null,opts))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(file))));
});
figwheel.client.add_request_urls = (function add_request_urls(opts,files){return cljs.core.map.call(null,cljs.core.partial.call(null,figwheel.client.add_request_url,opts),files);
});
figwheel.client.reload_js_files = (function reload_js_files(p__24708,p__24709){var map__24751 = p__24708;var map__24751__$1 = ((cljs.core.seq_QMARK_.call(null,map__24751))?cljs.core.apply.call(null,cljs.core.hash_map,map__24751):map__24751);var opts = map__24751__$1;var on_jsload = cljs.core.get.call(null,map__24751__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));var before_jsload = cljs.core.get.call(null,map__24751__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));var map__24752 = p__24709;var map__24752__$1 = ((cljs.core.seq_QMARK_.call(null,map__24752))?cljs.core.apply.call(null,cljs.core.hash_map,map__24752):map__24752);var files = cljs.core.get.call(null,map__24752__$1,new cljs.core.Keyword(null,"files","files",-472457450));var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__24751,map__24751__$1,opts,on_jsload,before_jsload,map__24752,map__24752__$1,files){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__24751,map__24751__$1,opts,on_jsload,before_jsload,map__24752,map__24752__$1,files){
return (function (state_24775){var state_val_24776 = (state_24775[(1)]);if((state_val_24776 === (6)))
{var inst_24757 = (state_24775[(7)]);var inst_24766 = (state_24775[(2)]);var inst_24767 = cljs.core.PersistentVector.EMPTY_NODE;var inst_24768 = [inst_24757];var inst_24769 = (new cljs.core.PersistentVector(null,1,(5),inst_24767,inst_24768,null));var inst_24770 = cljs.core.apply.call(null,on_jsload,inst_24769);var state_24775__$1 = (function (){var statearr_24777 = state_24775;(statearr_24777[(8)] = inst_24766);
return statearr_24777;
})();var statearr_24778_24792 = state_24775__$1;(statearr_24778_24792[(2)] = inst_24770);
(statearr_24778_24792[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24776 === (5)))
{var inst_24773 = (state_24775[(2)]);var state_24775__$1 = state_24775;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24775__$1,inst_24773);
} else
{if((state_val_24776 === (4)))
{var state_24775__$1 = state_24775;var statearr_24779_24793 = state_24775__$1;(statearr_24779_24793[(2)] = null);
(statearr_24779_24793[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24776 === (3)))
{var inst_24757 = (state_24775[(7)]);var inst_24760 = console.debug("Figwheel: loaded these files");var inst_24761 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_24757);var inst_24762 = cljs.core.prn_str.call(null,inst_24761);var inst_24763 = console.log(inst_24762);var inst_24764 = cljs.core.async.timeout.call(null,(10));var state_24775__$1 = (function (){var statearr_24780 = state_24775;(statearr_24780[(9)] = inst_24763);
(statearr_24780[(10)] = inst_24760);
return statearr_24780;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24775__$1,(6),inst_24764);
} else
{if((state_val_24776 === (2)))
{var inst_24757 = (state_24775[(7)]);var inst_24757__$1 = (state_24775[(2)]);var inst_24758 = cljs.core.not_empty.call(null,inst_24757__$1);var state_24775__$1 = (function (){var statearr_24781 = state_24775;(statearr_24781[(7)] = inst_24757__$1);
return statearr_24781;
})();if(cljs.core.truth_(inst_24758))
{var statearr_24782_24794 = state_24775__$1;(statearr_24782_24794[(1)] = (3));
} else
{var statearr_24783_24795 = state_24775__$1;(statearr_24783_24795[(1)] = (4));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_24776 === (1)))
{var inst_24753 = before_jsload.call(null,files);var inst_24754 = figwheel.client.add_request_urls.call(null,opts,files);var inst_24755 = figwheel.client.load_all_js_files.call(null,inst_24754);var state_24775__$1 = (function (){var statearr_24784 = state_24775;(statearr_24784[(11)] = inst_24753);
return statearr_24784;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24775__$1,(2),inst_24755);
} else
{return null;
}
}
}
}
}
}
});})(c__5819__auto__,map__24751,map__24751__$1,opts,on_jsload,before_jsload,map__24752,map__24752__$1,files))
;return ((function (switch__5804__auto__,c__5819__auto__,map__24751,map__24751__$1,opts,on_jsload,before_jsload,map__24752,map__24752__$1,files){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_24788 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_24788[(0)] = state_machine__5805__auto__);
(statearr_24788[(1)] = (1));
return statearr_24788;
});
var state_machine__5805__auto____1 = (function (state_24775){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_24775);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e24789){if((e24789 instanceof Object))
{var ex__5808__auto__ = e24789;var statearr_24790_24796 = state_24775;(statearr_24790_24796[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24775);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24789;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24797 = state_24775;
state_24775 = G__24797;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_24775){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_24775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__24751,map__24751__$1,opts,on_jsload,before_jsload,map__24752,map__24752__$1,files))
})();var state__5821__auto__ = (function (){var statearr_24791 = f__5820__auto__.call(null);(statearr_24791[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_24791;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__24751,map__24751__$1,opts,on_jsload,before_jsload,map__24752,map__24752__$1,files))
);
return c__5819__auto__;
});
figwheel.client.current_links = (function current_links(){return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.truncate_url = (function truncate_url(url){return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol)+"//"),""),"http://",""),"https://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.matches_file_QMARK_ = (function matches_file_QMARK_(p__24798,link_href){var map__24800 = p__24798;var map__24800__$1 = ((cljs.core.seq_QMARK_.call(null,map__24800))?cljs.core.apply.call(null,cljs.core.hash_map,map__24800):map__24800);var request_url = cljs.core.get.call(null,map__24800__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24800__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var trunc_href = figwheel.client.truncate_url.call(null,link_href);return (cljs.core._EQ_.call(null,file,trunc_href)) || (cljs.core._EQ_.call(null,figwheel.client.truncate_url.call(null,request_url),trunc_href));
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
return (function (state_24821){var state_val_24822 = (state_24821[(1)]);if((state_val_24822 === (2)))
{var inst_24818 = (state_24821[(2)]);var inst_24819 = parent.removeChild(orig_link);var state_24821__$1 = (function (){var statearr_24823 = state_24821;(statearr_24823[(7)] = inst_24818);
return statearr_24823;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24821__$1,inst_24819);
} else
{if((state_val_24822 === (1)))
{var inst_24816 = cljs.core.async.timeout.call(null,(200));var state_24821__$1 = state_24821;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24821__$1,(2),inst_24816);
} else
{return null;
}
}
});})(c__5819__auto__,parent))
;return ((function (switch__5804__auto__,c__5819__auto__,parent){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_24827 = [null,null,null,null,null,null,null,null];(statearr_24827[(0)] = state_machine__5805__auto__);
(statearr_24827[(1)] = (1));
return statearr_24827;
});
var state_machine__5805__auto____1 = (function (state_24821){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_24821);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e24828){if((e24828 instanceof Object))
{var ex__5808__auto__ = e24828;var statearr_24829_24831 = state_24821;(statearr_24829_24831[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24821);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24828;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24832 = state_24821;
state_24821 = G__24832;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_24821){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_24821);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,parent))
})();var state__5821__auto__ = (function (){var statearr_24830 = f__5820__auto__.call(null);(statearr_24830[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_24830;
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
figwheel.client.reload_css_file = (function reload_css_file(p__24833){var map__24835 = p__24833;var map__24835__$1 = ((cljs.core.seq_QMARK_.call(null,map__24835))?cljs.core.apply.call(null,cljs.core.hash_map,map__24835):map__24835);var f_data = map__24835__$1;var request_url = cljs.core.get.call(null,map__24835__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));var file = cljs.core.get.call(null,map__24835__$1,new cljs.core.Keyword(null,"file","file",-1269645878));var temp__4124__auto__ = figwheel.client.get_correct_link.call(null,f_data);if(cljs.core.truth_(temp__4124__auto__))
{var link = temp__4124__auto__;return figwheel.client.add_link_to_doc.call(null,link,figwheel.client.clone_link.call(null,link,request_url));
} else
{return figwheel.client.add_link_to_doc.call(null,figwheel.client.create_link.call(null,request_url));
}
});
figwheel.client.reload_css_files = (function reload_css_files(p__24836,files_msg){var map__24858 = p__24836;var map__24858__$1 = ((cljs.core.seq_QMARK_.call(null,map__24858))?cljs.core.apply.call(null,cljs.core.hash_map,map__24858):map__24858);var opts = map__24858__$1;var on_cssload = cljs.core.get.call(null,map__24858__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));var seq__24859_24879 = cljs.core.seq.call(null,figwheel.client.add_request_urls.call(null,opts,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));var chunk__24860_24880 = null;var count__24861_24881 = (0);var i__24862_24882 = (0);while(true){
if((i__24862_24882 < count__24861_24881))
{var f_24883 = cljs.core._nth.call(null,chunk__24860_24880,i__24862_24882);figwheel.client.reload_css_file.call(null,f_24883);
{
var G__24884 = seq__24859_24879;
var G__24885 = chunk__24860_24880;
var G__24886 = count__24861_24881;
var G__24887 = (i__24862_24882 + (1));
seq__24859_24879 = G__24884;
chunk__24860_24880 = G__24885;
count__24861_24881 = G__24886;
i__24862_24882 = G__24887;
continue;
}
} else
{var temp__4126__auto___24888 = cljs.core.seq.call(null,seq__24859_24879);if(temp__4126__auto___24888)
{var seq__24859_24889__$1 = temp__4126__auto___24888;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24859_24889__$1))
{var c__4406__auto___24890 = cljs.core.chunk_first.call(null,seq__24859_24889__$1);{
var G__24891 = cljs.core.chunk_rest.call(null,seq__24859_24889__$1);
var G__24892 = c__4406__auto___24890;
var G__24893 = cljs.core.count.call(null,c__4406__auto___24890);
var G__24894 = (0);
seq__24859_24879 = G__24891;
chunk__24860_24880 = G__24892;
count__24861_24881 = G__24893;
i__24862_24882 = G__24894;
continue;
}
} else
{var f_24895 = cljs.core.first.call(null,seq__24859_24889__$1);figwheel.client.reload_css_file.call(null,f_24895);
{
var G__24896 = cljs.core.next.call(null,seq__24859_24889__$1);
var G__24897 = null;
var G__24898 = (0);
var G__24899 = (0);
seq__24859_24879 = G__24896;
chunk__24860_24880 = G__24897;
count__24861_24881 = G__24898;
i__24862_24882 = G__24899;
continue;
}
}
} else
{}
}
break;
}
var c__5819__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__5819__auto__,map__24858,map__24858__$1,opts,on_cssload){
return (function (){var f__5820__auto__ = (function (){var switch__5804__auto__ = ((function (c__5819__auto__,map__24858,map__24858__$1,opts,on_cssload){
return (function (state_24869){var state_val_24870 = (state_24869[(1)]);if((state_val_24870 === (2)))
{var inst_24865 = (state_24869[(2)]);var inst_24866 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg);var inst_24867 = on_cssload.call(null,inst_24866);var state_24869__$1 = (function (){var statearr_24871 = state_24869;(statearr_24871[(7)] = inst_24865);
return statearr_24871;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24869__$1,inst_24867);
} else
{if((state_val_24870 === (1)))
{var inst_24863 = cljs.core.async.timeout.call(null,(100));var state_24869__$1 = state_24869;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24869__$1,(2),inst_24863);
} else
{return null;
}
}
});})(c__5819__auto__,map__24858,map__24858__$1,opts,on_cssload))
;return ((function (switch__5804__auto__,c__5819__auto__,map__24858,map__24858__$1,opts,on_cssload){
return (function() {
var state_machine__5805__auto__ = null;
var state_machine__5805__auto____0 = (function (){var statearr_24875 = [null,null,null,null,null,null,null,null];(statearr_24875[(0)] = state_machine__5805__auto__);
(statearr_24875[(1)] = (1));
return statearr_24875;
});
var state_machine__5805__auto____1 = (function (state_24869){while(true){
var ret_value__5806__auto__ = (function (){try{while(true){
var result__5807__auto__ = switch__5804__auto__.call(null,state_24869);if(cljs.core.keyword_identical_QMARK_.call(null,result__5807__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__5807__auto__;
}
break;
}
}catch (e24876){if((e24876 instanceof Object))
{var ex__5808__auto__ = e24876;var statearr_24877_24900 = state_24869;(statearr_24877_24900[(5)] = ex__5808__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24869);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e24876;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5806__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__24901 = state_24869;
state_24869 = G__24901;
continue;
}
} else
{return ret_value__5806__auto__;
}
break;
}
});
state_machine__5805__auto__ = function(state_24869){
switch(arguments.length){
case 0:
return state_machine__5805__auto____0.call(this);
case 1:
return state_machine__5805__auto____1.call(this,state_24869);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5805__auto____0;
state_machine__5805__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5805__auto____1;
return state_machine__5805__auto__;
})()
;})(switch__5804__auto__,c__5819__auto__,map__24858,map__24858__$1,opts,on_cssload))
})();var state__5821__auto__ = (function (){var statearr_24878 = f__5820__auto__.call(null);(statearr_24878[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5819__auto__);
return statearr_24878;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5821__auto__);
});})(c__5819__auto__,map__24858,map__24858__$1,opts,on_cssload))
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
figwheel.client.watch_and_reload_STAR_ = (function watch_and_reload_STAR_(p__24902){var map__24907 = p__24902;var map__24907__$1 = ((cljs.core.seq_QMARK_.call(null,map__24907))?cljs.core.apply.call(null,cljs.core.hash_map,map__24907):map__24907);var opts = map__24907__$1;var on_compile_fail = cljs.core.get.call(null,map__24907__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));var jsload_callback = cljs.core.get.call(null,map__24907__$1,new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));var websocket_url = cljs.core.get.call(null,map__24907__$1,new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938));var retry_count = cljs.core.get.call(null,map__24907__$1,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875));console.debug("Figwheel: trying to open cljs reload socket");
var socket = (new WebSocket(websocket_url));socket.onmessage = ((function (socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (msg_str){var msg = cljs.reader.read_string.call(null,msg_str.data);var pred__24908 = cljs.core._EQ_;var expr__24909 = new cljs.core.Keyword(null,"msg-name","msg-name",-353709863).cljs$core$IFn$_invoke$arity$1(msg);if(cljs.core.truth_(pred__24908.call(null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),expr__24909)))
{return figwheel.client.reload_js_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24908.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),expr__24909)))
{return figwheel.client.reload_css_files.call(null,opts,msg);
} else
{if(cljs.core.truth_(pred__24908.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__24909)))
{return figwheel.client.compile_failed.call(null,msg,on_compile_fail);
} else
{return null;
}
}
}
});})(socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onopen = ((function (socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.patch_goog_base.call(null);
return console.debug("Figwheel: socket connection established");
});})(socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
socket.onclose = ((function (socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){figwheel.client.log.call(null,opts,"Figwheel: socket closed or failed to open");
if((retry_count > (0)))
{return window.setTimeout(((function (socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (){return watch_and_reload_STAR_.call(null,cljs.core.assoc.call(null,opts,new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),(retry_count - (1))));
});})(socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
,(2000));
} else
{return null;
}
});})(socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
return socket.onerror = ((function (socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count){
return (function (x){return figwheel.client.log.call(null,opts,"Figwheel: socket error ");
});})(socket,map__24907,map__24907__$1,opts,on_compile_fail,jsload_callback,websocket_url,retry_count))
;
});
figwheel.client.default_on_jsload = (function default_on_jsload(url){return document.querySelector("body").dispatchEvent((new CustomEvent("figwheel.js-reload",(function (){var obj24914 = {"detail":url};return obj24914;
})())));
});
figwheel.client.get_essential_messages = (function get_essential_messages(ed){if(cljs.core.truth_(ed))
{return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else
{return null;
}
});
figwheel.client.error_msg_format = (function error_msg_format(p__24915){var map__24917 = p__24915;var map__24917__$1 = ((cljs.core.seq_QMARK_.call(null,map__24917))?cljs.core.apply.call(null,cljs.core.hash_map,map__24917):map__24917);var class$ = cljs.core.get.call(null,map__24917__$1,new cljs.core.Keyword(null,"class","class",-2030961996));var message = cljs.core.get.call(null,map__24917__$1,new cljs.core.Keyword(null,"message","message",-406056002));return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)+" : "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(message));
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.default_on_compile_fail = (function default_on_compile_fail(p__24918){var map__24924 = p__24918;var map__24924__$1 = ((cljs.core.seq_QMARK_.call(null,map__24924))?cljs.core.apply.call(null,cljs.core.hash_map,map__24924):map__24924);var ed = map__24924__$1;var exception_data = cljs.core.get.call(null,map__24924__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));var formatted_exception = cljs.core.get.call(null,map__24924__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));console.debug("Figwheel: Compile Exception");
var seq__24925_24929 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));var chunk__24926_24930 = null;var count__24927_24931 = (0);var i__24928_24932 = (0);while(true){
if((i__24928_24932 < count__24927_24931))
{var msg_24933 = cljs.core._nth.call(null,chunk__24926_24930,i__24928_24932);console.log(msg_24933);
{
var G__24934 = seq__24925_24929;
var G__24935 = chunk__24926_24930;
var G__24936 = count__24927_24931;
var G__24937 = (i__24928_24932 + (1));
seq__24925_24929 = G__24934;
chunk__24926_24930 = G__24935;
count__24927_24931 = G__24936;
i__24928_24932 = G__24937;
continue;
}
} else
{var temp__4126__auto___24938 = cljs.core.seq.call(null,seq__24925_24929);if(temp__4126__auto___24938)
{var seq__24925_24939__$1 = temp__4126__auto___24938;if(cljs.core.chunked_seq_QMARK_.call(null,seq__24925_24939__$1))
{var c__4406__auto___24940 = cljs.core.chunk_first.call(null,seq__24925_24939__$1);{
var G__24941 = cljs.core.chunk_rest.call(null,seq__24925_24939__$1);
var G__24942 = c__4406__auto___24940;
var G__24943 = cljs.core.count.call(null,c__4406__auto___24940);
var G__24944 = (0);
seq__24925_24929 = G__24941;
chunk__24926_24930 = G__24942;
count__24927_24931 = G__24943;
i__24928_24932 = G__24944;
continue;
}
} else
{var msg_24945 = cljs.core.first.call(null,seq__24925_24939__$1);console.log(msg_24945);
{
var G__24946 = cljs.core.next.call(null,seq__24925_24939__$1);
var G__24947 = null;
var G__24948 = (0);
var G__24949 = (0);
seq__24925_24929 = G__24946;
chunk__24926_24930 = G__24947;
count__24927_24931 = G__24948;
i__24928_24932 = G__24949;
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
var watch_and_reload__delegate = function (p__24950){var map__24952 = p__24950;var map__24952__$1 = ((cljs.core.seq_QMARK_.call(null,map__24952))?cljs.core.apply.call(null,cljs.core.hash_map,map__24952):map__24952);var opts = map__24952__$1;return figwheel.client.watch_and_reload_with_opts.call(null,opts);
};
var watch_and_reload = function (var_args){
var p__24950 = null;if (arguments.length > 0) {
  p__24950 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return watch_and_reload__delegate.call(this,p__24950);};
watch_and_reload.cljs$lang$maxFixedArity = 0;
watch_and_reload.cljs$lang$applyTo = (function (arglist__24953){
var p__24950 = cljs.core.seq(arglist__24953);
return watch_and_reload__delegate(p__24950);
});
watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = watch_and_reload__delegate;
return watch_and_reload;
})()
;

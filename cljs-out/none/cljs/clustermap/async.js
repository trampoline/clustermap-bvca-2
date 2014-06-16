// Compiled by ClojureScript 0.0-2173
goog.provide('clustermap.async');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
/**
* asynchronously maps a function over some colls
* @param {...*} var_args
*/
clustermap.async.map_async = (function() { 
var map_async__delegate = function (f,colls){var coll_chs = cljs.core.map.call(null,(function (coll){var ch = cljs.core.async.chan.call(null);cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
}),colls);return cljs.core.async.map.call(null,f,coll_chs);
};
var map_async = function (f,var_args){
var colls = null;if (arguments.length > 1) {
  colls = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return map_async__delegate.call(this,f,colls);};
map_async.cljs$lang$maxFixedArity = 1;
map_async.cljs$lang$applyTo = (function (arglist__22699){
var f = cljs.core.first(arglist__22699);
var colls = cljs.core.rest(arglist__22699);
return map_async__delegate(f,colls);
});
map_async.cljs$core$IFn$_invoke$arity$variadic = map_async__delegate;
return map_async;
})()
;
/**
* async consume all values from a channel
* @param {...*} var_args
*/
clustermap.async.dorun_async = (function() { 
var dorun_async__delegate = function (ch,p__22700){var map__22760 = p__22700;var map__22760__$1 = ((cljs.core.seq_QMARK_.call(null,map__22760))?cljs.core.apply.call(null,cljs.core.hash_map,map__22760):map__22760);var delay = cljs.core.get.call(null,map__22760__$1,new cljs.core.Keyword(null,"delay","delay",1109372149));var log = cljs.core.get.call(null,map__22760__$1,new cljs.core.Keyword(null,"log","log",1014011574));var c__5562__auto___22819 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5563__auto__ = (function (){var switch__5547__auto__ = (function (state_22789){var state_val_22790 = (state_22789[1]);if((state_val_22790 === 1))
{var state_22789__$1 = state_22789;var statearr_22791_22820 = state_22789__$1;(statearr_22791_22820[2] = null);
(statearr_22791_22820[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 2))
{var state_22789__$1 = state_22789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22789__$1,4,ch);
} else
{if((state_val_22790 === 3))
{var inst_22787 = (state_22789[2]);var state_22789__$1 = state_22789;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_22789__$1,inst_22787);
} else
{if((state_val_22790 === 4))
{var inst_22763 = (state_22789[7]);var inst_22763__$1 = (state_22789[2]);var state_22789__$1 = (function (){var statearr_22792 = state_22789;(statearr_22792[7] = inst_22763__$1);
return statearr_22792;
})();if(cljs.core.truth_(inst_22763__$1))
{var statearr_22793_22821 = state_22789__$1;(statearr_22793_22821[1] = 5);
} else
{var statearr_22794_22822 = state_22789__$1;(statearr_22794_22822[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 5))
{var state_22789__$1 = state_22789;if(cljs.core.truth_(delay))
{var statearr_22795_22823 = state_22789__$1;(statearr_22795_22823[1] = 8);
} else
{var statearr_22796_22824 = state_22789__$1;(statearr_22796_22824[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 6))
{var state_22789__$1 = state_22789;var statearr_22797_22825 = state_22789__$1;(statearr_22797_22825[2] = null);
(statearr_22797_22825[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 7))
{var inst_22780 = (state_22789[2]);var state_22789__$1 = state_22789;if(cljs.core.truth_(inst_22780))
{var statearr_22798_22826 = state_22789__$1;(statearr_22798_22826[1] = 15);
} else
{var statearr_22799_22827 = state_22789__$1;(statearr_22799_22827[1] = 16);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 8))
{var inst_22766 = cljs.core.async.timeout.call(null,delay);var state_22789__$1 = state_22789;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_22789__$1,11,inst_22766);
} else
{if((state_val_22790 === 9))
{var state_22789__$1 = state_22789;var statearr_22800_22828 = state_22789__$1;(statearr_22800_22828[2] = null);
(statearr_22800_22828[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 10))
{var inst_22771 = (state_22789[2]);var state_22789__$1 = (function (){var statearr_22801 = state_22789;(statearr_22801[8] = inst_22771);
return statearr_22801;
})();if(cljs.core.truth_(log))
{var statearr_22802_22829 = state_22789__$1;(statearr_22802_22829[1] = 12);
} else
{var statearr_22803_22830 = state_22789__$1;(statearr_22803_22830[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 11))
{var inst_22768 = (state_22789[2]);var state_22789__$1 = state_22789;var statearr_22804_22831 = state_22789__$1;(statearr_22804_22831[2] = inst_22768);
(statearr_22804_22831[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 12))
{var inst_22763 = (state_22789[7]);var inst_22773 = cljs.core.clj__GT_js.call(null,inst_22763);var inst_22774 = console.log(inst_22773);var state_22789__$1 = state_22789;var statearr_22805_22832 = state_22789__$1;(statearr_22805_22832[2] = inst_22774);
(statearr_22805_22832[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 13))
{var state_22789__$1 = state_22789;var statearr_22806_22833 = state_22789__$1;(statearr_22806_22833[2] = null);
(statearr_22806_22833[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 14))
{var inst_22763 = (state_22789[7]);var inst_22777 = (state_22789[2]);var state_22789__$1 = (function (){var statearr_22807 = state_22789;(statearr_22807[9] = inst_22777);
return statearr_22807;
})();var statearr_22808_22834 = state_22789__$1;(statearr_22808_22834[2] = inst_22763);
(statearr_22808_22834[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 15))
{var state_22789__$1 = state_22789;var statearr_22809_22835 = state_22789__$1;(statearr_22809_22835[2] = null);
(statearr_22809_22835[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 16))
{var state_22789__$1 = state_22789;var statearr_22810_22836 = state_22789__$1;(statearr_22810_22836[2] = null);
(statearr_22810_22836[1] = 17);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_22790 === 17))
{var inst_22785 = (state_22789[2]);var state_22789__$1 = state_22789;var statearr_22811_22837 = state_22789__$1;(statearr_22811_22837[2] = inst_22785);
(statearr_22811_22837[1] = 3);
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
});return ((function (switch__5547__auto__){
return (function() {
var state_machine__5548__auto__ = null;
var state_machine__5548__auto____0 = (function (){var statearr_22815 = [null,null,null,null,null,null,null,null,null,null];(statearr_22815[0] = state_machine__5548__auto__);
(statearr_22815[1] = 1);
return statearr_22815;
});
var state_machine__5548__auto____1 = (function (state_22789){while(true){
var ret_value__5549__auto__ = (function (){try{while(true){
var result__5550__auto__ = switch__5547__auto__.call(null,state_22789);if(cljs.core.keyword_identical_QMARK_.call(null,result__5550__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5550__auto__;
}
break;
}
}catch (e22816){if((e22816 instanceof Object))
{var ex__5551__auto__ = e22816;var statearr_22817_22838 = state_22789;(statearr_22817_22838[5] = ex__5551__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_22789);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e22816;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5549__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__22839 = state_22789;
state_22789 = G__22839;
continue;
}
} else
{return ret_value__5549__auto__;
}
break;
}
});
state_machine__5548__auto__ = function(state_22789){
switch(arguments.length){
case 0:
return state_machine__5548__auto____0.call(this);
case 1:
return state_machine__5548__auto____1.call(this,state_22789);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5548__auto____0;
state_machine__5548__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5548__auto____1;
return state_machine__5548__auto__;
})()
;})(switch__5547__auto__))
})();var state__5564__auto__ = (function (){var statearr_22818 = f__5563__auto__.call(null);(statearr_22818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5562__auto___22819);
return statearr_22818;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5564__auto__);
}));
return null;
};
var dorun_async = function (ch,var_args){
var p__22700 = null;if (arguments.length > 1) {
  p__22700 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return dorun_async__delegate.call(this,ch,p__22700);};
dorun_async.cljs$lang$maxFixedArity = 1;
dorun_async.cljs$lang$applyTo = (function (arglist__22840){
var ch = cljs.core.first(arglist__22840);
var p__22700 = cljs.core.rest(arglist__22840);
return dorun_async__delegate(ch,p__22700);
});
dorun_async.cljs$core$IFn$_invoke$arity$variadic = dorun_async__delegate;
return dorun_async;
})()
;

//# sourceMappingURL=async.js.map
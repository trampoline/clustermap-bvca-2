// Compiled by ClojureScript 0.0-2080
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = 0;
cljs.core.async.impl.ioc_helpers.STATE_IDX = 1;
cljs.core.async.impl.ioc_helpers.VALUE_IDX = 2;
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = 3;
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = 4;
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = 5;
cljs.core.async.impl.ioc_helpers.USER_START_IDX = 6;
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$86);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t32357 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t32357 = (function (f,fn_handler,meta32358){
this.f = f;
this.fn_handler = fn_handler;
this.meta32358 = meta32358;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t32357.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t32357.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t32357";
cljs.core.async.impl.ioc_helpers.t32357.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async.impl.ioc-helpers/t32357");
});
cljs.core.async.impl.ioc_helpers.t32357.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t32357.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t32357.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t32357.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32359){var self__ = this;
var _32359__$1 = this;return self__.meta32358;
});
cljs.core.async.impl.ioc_helpers.t32357.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32359,meta32358__$1){var self__ = this;
var _32359__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t32357(self__.f,self__.fn_handler,meta32358__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t32357 = (function __GT_t32357(f__$1,fn_handler__$1,meta32358){return (new cljs.core.async.impl.ioc_helpers.t32357(f__$1,fn_handler__$1,meta32358));
});
}
return (new cljs.core.async.impl.ioc_helpers.t32357(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e32361){if((e32361 instanceof Object))
{var ex = e32361;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$62)
{throw e32361;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_32364_32366 = state;(statearr_32364_32366[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_32364_32366[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_32365_32367 = state;(statearr_32365_32367[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_32365_32367[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$87;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_32370_32372 = state;(statearr_32370_32372[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_32370_32372[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_32371_32373 = state;(statearr_32371_32373[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_32371_32373[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$87;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__32374){var map__32379 = p__32374;var map__32379__$1 = ((cljs.core.seq_QMARK_(map__32379))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32379):map__32379);var opts = map__32379__$1;var statearr_32380_32383 = state;(statearr_32380_32383[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts((function (val){var statearr_32381_32384 = state;(statearr_32381_32384[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_32382_32385 = state;(statearr_32382_32385[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$87;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__32374 = null;if (arguments.length > 3) {
  p__32374 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__32374);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__32386){
var state = cljs.core.first(arglist__32386);
arglist__32386 = cljs.core.next(arglist__32386);
var cont_block = cljs.core.first(arglist__32386);
arglist__32386 = cljs.core.next(arglist__32386);
var ports = cljs.core.first(arglist__32386);
var p__32374 = cljs.core.rest(arglist__32386);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__32374);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler((function (){return null;
})));
}
c.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
return c;
});

/**
* @constructor
* @param {*} catch_block
* @param {*} catch_exception
* @param {*} finally_block
* @param {*} continue_block
* @param {*} prev
* @param {*} __meta
* @param {*} __extmap
* @param {*=} __meta 
* @param {*=} __extmap
*/
cljs.core.async.impl.ioc_helpers.ExceptionFrame = (function (catch_block,catch_exception,finally_block,continue_block,prev,__meta,__extmap){
this.catch_block = catch_block;
this.catch_exception = catch_exception;
this.finally_block = finally_block;
this.continue_block = continue_block;
this.prev = prev;
this.__meta = __meta;
this.__extmap = __extmap;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__3848__auto__){var self__ = this;
var this__3848__auto____$1 = this;var h__3702__auto__ = self__.__hash;if(!((h__3702__auto__ == null)))
{return h__3702__auto__;
} else
{var h__3702__auto____$1 = cljs.core.hash_imap(this__3848__auto____$1);self__.__hash = h__3702__auto____$1;
return h__3702__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__3853__auto__,k__3854__auto__){var self__ = this;
var this__3853__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__3853__auto____$1,k__3854__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3855__auto__,k32388,else__3856__auto__){var self__ = this;
var this__3855__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k32388,cljs.core.constant$keyword$88))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k32388,cljs.core.constant$keyword$89))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k32388,cljs.core.constant$keyword$90))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k32388,cljs.core.constant$keyword$91))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k32388,cljs.core.constant$keyword$92))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$62)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32388,else__3856__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3860__auto__,k__3861__auto__,G__32387){var self__ = this;
var this__3860__auto____$1 = this;var pred__32390 = cljs.core.keyword_identical_QMARK_;var expr__32391 = k__3861__auto__;if(cljs.core.truth_((pred__32390.cljs$core$IFn$_invoke$arity$2 ? pred__32390.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$88,expr__32391) : pred__32390.call(null,cljs.core.constant$keyword$88,expr__32391))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__32387,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__32390.cljs$core$IFn$_invoke$arity$2 ? pred__32390.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$89,expr__32391) : pred__32390.call(null,cljs.core.constant$keyword$89,expr__32391))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__32387,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__32390.cljs$core$IFn$_invoke$arity$2 ? pred__32390.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$90,expr__32391) : pred__32390.call(null,cljs.core.constant$keyword$90,expr__32391))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__32387,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__32390.cljs$core$IFn$_invoke$arity$2 ? pred__32390.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$91,expr__32391) : pred__32390.call(null,cljs.core.constant$keyword$91,expr__32391))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__32387,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__32390.cljs$core$IFn$_invoke$arity$2 ? pred__32390.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$92,expr__32391) : pred__32390.call(null,cljs.core.constant$keyword$92,expr__32391))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__32387,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3861__auto__,G__32387),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3867__auto__,writer__3868__auto__,opts__3869__auto__){var self__ = this;
var this__3867__auto____$1 = this;var pr_pair__3870__auto__ = (function (keyval__3871__auto__){return cljs.core.pr_sequential_writer(writer__3868__auto__,cljs.core.pr_writer,""," ","",opts__3869__auto__,keyval__3871__auto__);
});return cljs.core.pr_sequential_writer(writer__3868__auto__,pr_pair__3870__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__3869__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$92,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3858__auto__,entry__3859__auto__){var self__ = this;
var this__3858__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3859__auto__))
{return cljs.core._assoc(this__3858__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3859__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3859__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3858__auto____$1,entry__3859__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3865__auto__){var self__ = this;
var this__3865__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$88,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$89,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$90,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$91,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$92,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__3857__auto__){var self__ = this;
var this__3857__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__3849__auto__,other__3850__auto__){var self__ = this;
var this__3849__auto____$1 = this;if(cljs.core.truth_((function (){var and__3279__auto__ = other__3850__auto__;if(cljs.core.truth_(and__3279__auto__))
{return ((this__3849__auto____$1.constructor === other__3850__auto__.constructor)) && (cljs.core.equiv_map(this__3849__auto____$1,other__3850__auto__));
} else
{return and__3279__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3852__auto__,G__32387){var self__ = this;
var this__3852__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__32387,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3851__auto__){var self__ = this;
var this__3851__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3862__auto__,k__3863__auto__){var self__ = this;
var this__3862__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$90,null,cljs.core.constant$keyword$88,null,cljs.core.constant$keyword$89,null,cljs.core.constant$keyword$91,null,cljs.core.constant$keyword$92,null], null), null),k__3863__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__3862__auto____$1),self__.__meta),k__3863__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__3863__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__3887__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__3887__auto__,writer__3888__auto__){return cljs.core._write(writer__3888__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__32389){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(G__32389),cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(G__32389),cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(G__32389),cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(G__32389),cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(G__32389),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32389,cljs.core.constant$keyword$88,cljs.core.array_seq([cljs.core.constant$keyword$89,cljs.core.constant$keyword$90,cljs.core.constant$keyword$91,cljs.core.constant$keyword$92], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_32394 = state;(statearr_32394[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_32394;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$88.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$89.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3279__auto__ = exception;if(cljs.core.truth_(and__3279__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3279__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3279__auto__ = exception;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = catch_block;if(cljs.core.truth_(and__3279__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var statearr_32400 = state;(statearr_32400[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_32400[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_32400[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_32400[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$88,null,cljs.core.array_seq([cljs.core.constant$keyword$89,null], 0)));
return statearr_32400;
} else
{if(cljs.core.truth_((function (){var and__3279__auto__ = exception;if(cljs.core.truth_(and__3279__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3279__auto__;
}
})()))
{var statearr_32401_32405 = state;(statearr_32401_32405[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__32406 = state;
state = G__32406;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3279__auto__ = exception;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not(catch_block);if(and__3279__auto____$1)
{return cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var statearr_32402 = state;(statearr_32402[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_32402[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$90,null));
return statearr_32402;
} else
{if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not(exception);if(and__3279__auto__)
{return cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3279__auto__;
}
})()))
{var statearr_32403 = state;(statearr_32403[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_32403[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$90,null));
return statearr_32403;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$90.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_32404 = state;(statearr_32404[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$91.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_32404[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$92.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_32404;
} else
{if(cljs.core.constant$keyword$62)
{if(false)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("No matching clause"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0)))].join('')));
}
} else
{return null;
}
}
}
}
}
}
}
break;
}
});

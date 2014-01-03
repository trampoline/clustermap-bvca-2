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
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$16);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t19454 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t19454 = (function (f,fn_handler,meta19455){
this.f = f;
this.fn_handler = fn_handler;
this.meta19455 = meta19455;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t19454.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t19454.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t19454";
cljs.core.async.impl.ioc_helpers.t19454.cljs$lang$ctorPrWriter = (function (this__3835__auto__,writer__3836__auto__,opt__3837__auto__){return cljs.core._write(writer__3836__auto__,"cljs.core.async.impl.ioc-helpers/t19454");
});
cljs.core.async.impl.ioc_helpers.t19454.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t19454.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t19454.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t19454.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_19456){var self__ = this;
var _19456__$1 = this;return self__.meta19455;
});
cljs.core.async.impl.ioc_helpers.t19454.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_19456,meta19455__$1){var self__ = this;
var _19456__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t19454(self__.f,self__.fn_handler,meta19455__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t19454 = (function __GT_t19454(f__$1,fn_handler__$1,meta19455){return (new cljs.core.async.impl.ioc_helpers.t19454(f__$1,fn_handler__$1,meta19455));
});
}
return (new cljs.core.async.impl.ioc_helpers.t19454(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e19458){if((e19458 instanceof Object))
{var ex = e19458;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$6)
{throw e19458;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_19461_19463 = state;(statearr_19461_19463[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_19461_19463[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_19462_19464 = state;(statearr_19462_19464[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_19462_19464[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$17;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4090__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_19467_19469 = state;(statearr_19467_19469[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_19467_19469[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4090__auto__))
{var cb = temp__4090__auto__;var statearr_19468_19470 = state;(statearr_19468_19470[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_19468_19470[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$17;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__19471){var map__19476 = p__19471;var map__19476__$1 = ((cljs.core.seq_QMARK_(map__19476))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19476):map__19476);var opts = map__19476__$1;var statearr_19477_19480 = state;(statearr_19477_19480[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4092__auto__ = cljs.core.async.do_alts((function (val){var statearr_19478_19481 = state;(statearr_19478_19481[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);if(cljs.core.truth_(temp__4092__auto__))
{var cb = temp__4092__auto__;var statearr_19479_19482 = state;(statearr_19479_19482[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$17;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__19471 = null;if (arguments.length > 3) {
  p__19471 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__19471);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__19483){
var state = cljs.core.first(arglist__19483);
arglist__19483 = cljs.core.next(arglist__19483);
var cont_block = cljs.core.first(arglist__19483);
arglist__19483 = cljs.core.next(arglist__19483);
var ports = cljs.core.first(arglist__19483);
var p__19471 = cljs.core.rest(arglist__19483);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__19471);
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__3855__auto__,k19485,else__3856__auto__){var self__ = this;
var this__3855__auto____$1 = this;if(cljs.core.keyword_identical_QMARK_(k19485,cljs.core.constant$keyword$18))
{return self__.catch_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k19485,cljs.core.constant$keyword$19))
{return self__.catch_exception;
} else
{if(cljs.core.keyword_identical_QMARK_(k19485,cljs.core.constant$keyword$20))
{return self__.finally_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k19485,cljs.core.constant$keyword$21))
{return self__.continue_block;
} else
{if(cljs.core.keyword_identical_QMARK_(k19485,cljs.core.constant$keyword$22))
{return self__.prev;
} else
{if(cljs.core.constant$keyword$6)
{return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k19485,else__3856__auto__);
} else
{return null;
}
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__3860__auto__,k__3861__auto__,G__19484){var self__ = this;
var this__3860__auto____$1 = this;var pred__19487 = cljs.core.keyword_identical_QMARK_;var expr__19488 = k__3861__auto__;if(cljs.core.truth_((pred__19487.cljs$core$IFn$_invoke$arity$2 ? pred__19487.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$18,expr__19488) : pred__19487.call(null,cljs.core.constant$keyword$18,expr__19488))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__19484,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__19487.cljs$core$IFn$_invoke$arity$2 ? pred__19487.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$19,expr__19488) : pred__19487.call(null,cljs.core.constant$keyword$19,expr__19488))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__19484,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__19487.cljs$core$IFn$_invoke$arity$2 ? pred__19487.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$20,expr__19488) : pred__19487.call(null,cljs.core.constant$keyword$20,expr__19488))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__19484,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__19487.cljs$core$IFn$_invoke$arity$2 ? pred__19487.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$21,expr__19488) : pred__19487.call(null,cljs.core.constant$keyword$21,expr__19488))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__19484,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__19487.cljs$core$IFn$_invoke$arity$2 ? pred__19487.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$22,expr__19488) : pred__19487.call(null,cljs.core.constant$keyword$22,expr__19488))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__19484,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__3861__auto__,G__19484),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__3867__auto__,writer__3868__auto__,opts__3869__auto__){var self__ = this;
var this__3867__auto____$1 = this;var pr_pair__3870__auto__ = (function (keyval__3871__auto__){return cljs.core.pr_sequential_writer(writer__3868__auto__,cljs.core.pr_writer,""," ","",opts__3869__auto__,keyval__3871__auto__);
});return cljs.core.pr_sequential_writer(writer__3868__auto__,pr_pair__3870__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__3869__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__3858__auto__,entry__3859__auto__){var self__ = this;
var this__3858__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__3859__auto__))
{return cljs.core._assoc(this__3858__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3859__auto__,0),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__3859__auto__,1));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__3858__auto____$1,entry__3859__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__3865__auto__){var self__ = this;
var this__3865__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$18,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$19,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$20,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$21,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,5,cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$22,self__.prev],null))], null),self__.__extmap));
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
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__3852__auto__,G__19484){var self__ = this;
var this__3852__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__19484,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__3851__auto__){var self__ = this;
var this__3851__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__3862__auto__,k__3863__auto__){var self__ = this;
var this__3862__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$20,null,cljs.core.constant$keyword$18,null,cljs.core.constant$keyword$19,null,cljs.core.constant$keyword$21,null,cljs.core.constant$keyword$22,null], null), null),k__3863__auto__))
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
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__19486){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(G__19486),cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(G__19486),cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(G__19486),cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(G__19486),cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(G__19486),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__19486,cljs.core.constant$keyword$18,cljs.core.array_seq([cljs.core.constant$keyword$19,cljs.core.constant$keyword$20,cljs.core.constant$keyword$21,cljs.core.constant$keyword$22], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_19491 = state;(statearr_19491[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_19491;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$18.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$19.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3279__auto__ = exception;if(cljs.core.truth_(and__3279__auto__))
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
{var statearr_19497 = state;(statearr_19497[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_19497[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_19497[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_19497[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$18,null,cljs.core.array_seq([cljs.core.constant$keyword$19,null], 0)));
return statearr_19497;
} else
{if(cljs.core.truth_((function (){var and__3279__auto__ = exception;if(cljs.core.truth_(and__3279__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3279__auto__;
}
})()))
{var statearr_19498_19502 = state;(statearr_19498_19502[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__19503 = state;
state = G__19503;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3279__auto__ = exception;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not(catch_block);if(and__3279__auto____$1)
{return cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var statearr_19499 = state;(statearr_19499[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_19499[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$20,null));
return statearr_19499;
} else
{if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not(exception);if(and__3279__auto__)
{return cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3279__auto__;
}
})()))
{var statearr_19500 = state;(statearr_19500[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_19500[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$20,null));
return statearr_19500;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$20.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_19501 = state;(statearr_19501[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$21.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_19501[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$22.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_19501;
} else
{if(cljs.core.constant$keyword$6)
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

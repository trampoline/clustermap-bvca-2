// Compiled by ClojureScript 0.0-2268
goog.provide('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.protocols');
cljs.core.async.impl.ioc_helpers.FN_IDX = (0);
cljs.core.async.impl.ioc_helpers.STATE_IDX = (1);
cljs.core.async.impl.ioc_helpers.VALUE_IDX = (2);
cljs.core.async.impl.ioc_helpers.BINDINGS_IDX = (3);
cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES = (4);
cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION = (5);
cljs.core.async.impl.ioc_helpers.USER_START_IDX = (6);
cljs.core.async.impl.ioc_helpers.aset_object = (function aset_object(arr,idx,o){return (arr[idx][o]);
});
cljs.core.async.impl.ioc_helpers.aget_object = (function aget_object(arr,idx){return (arr[idx]);
});
/**
* Returns true if the machine is in a finished state
*/
cljs.core.async.impl.ioc_helpers.finished_QMARK_ = (function finished_QMARK_(state_array){return cljs.core.keyword_identical_QMARK_((state_array[cljs.core.async.impl.ioc_helpers.STATE_IDX]),cljs.core.constant$keyword$786);
});
cljs.core.async.impl.ioc_helpers.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.impl.ioc_helpers.t42689 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.impl.ioc_helpers.t42689 = (function (f,fn_handler,meta42690){
this.f = f;
this.fn_handler = fn_handler;
this.meta42690 = meta42690;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.impl.ioc_helpers.t42689.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.t42689.cljs$lang$ctorStr = "cljs.core.async.impl.ioc-helpers/t42689";
cljs.core.async.impl.ioc_helpers.t42689.cljs$lang$ctorPrWriter = (function (this__4108__auto__,writer__4109__auto__,opt__4110__auto__){return cljs.core._write(writer__4109__auto__,"cljs.core.async.impl.ioc-helpers/t42689");
});
cljs.core.async.impl.ioc_helpers.t42689.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.impl.ioc_helpers.t42689.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.impl.ioc_helpers.t42689.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.impl.ioc_helpers.t42689.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42691){var self__ = this;
var _42691__$1 = this;return self__.meta42690;
});
cljs.core.async.impl.ioc_helpers.t42689.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42691,meta42690__$1){var self__ = this;
var _42691__$1 = this;return (new cljs.core.async.impl.ioc_helpers.t42689(self__.f,self__.fn_handler,meta42690__$1));
});
cljs.core.async.impl.ioc_helpers.__GT_t42689 = (function __GT_t42689(f__$1,fn_handler__$1,meta42690){return (new cljs.core.async.impl.ioc_helpers.t42689(f__$1,fn_handler__$1,meta42690));
});
}
return (new cljs.core.async.impl.ioc_helpers.t42689(f,fn_handler,null));
});
cljs.core.async.impl.ioc_helpers.run_state_machine = (function run_state_machine(state){return cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.FN_IDX).call(null,state);
});
cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped = (function run_state_machine_wrapped(state){try{return cljs.core.async.impl.ioc_helpers.run_state_machine(state);
}catch (e42693){if((e42693 instanceof Object))
{var ex = e42693;cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.USER_START_IDX).cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
throw ex;
} else
{if(cljs.core.constant$keyword$778)
{throw e42693;
} else
{return null;
}
}
}});
cljs.core.async.impl.ioc_helpers.take_BANG_ = (function take_BANG_(state,blk,c){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(null,cljs.core.async.impl.ioc_helpers.fn_handler((function (x){var statearr_42696_42698 = state;(statearr_42696_42698[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = x);
(statearr_42696_42698[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_42697_42699 = state;(statearr_42697_42699[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_42697_42699[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$787;
} else
{return null;
}
});
cljs.core.async.impl.ioc_helpers.put_BANG_ = (function put_BANG_(state,blk,c,val){var temp__4124__auto__ = c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,val,cljs.core.async.impl.ioc_helpers.fn_handler((function (){var statearr_42702_42704 = state;(statearr_42702_42704[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = null);
(statearr_42702_42704[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
})));if(cljs.core.truth_(temp__4124__auto__))
{var cb = temp__4124__auto__;var statearr_42703_42705 = state;(statearr_42703_42705[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
(statearr_42703_42705[cljs.core.async.impl.ioc_helpers.STATE_IDX] = blk);
return cljs.core.constant$keyword$787;
} else
{return null;
}
});
/**
* @param {...*} var_args
*/
cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_ = (function() { 
var ioc_alts_BANG___delegate = function (state,cont_block,ports,p__42706){var map__42711 = p__42706;var map__42711__$1 = ((cljs.core.seq_QMARK_(map__42711))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42711):map__42711);var opts = map__42711__$1;var statearr_42712_42715 = state;(statearr_42712_42715[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);
var temp__4126__auto__ = cljs.core.async.do_alts(((function (map__42711,map__42711__$1,opts){
return (function (val){var statearr_42713_42716 = state;(statearr_42713_42716[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__42711,map__42711__$1,opts))
,ports,opts);if(cljs.core.truth_(temp__4126__auto__))
{var cb = temp__4126__auto__;var statearr_42714_42717 = state;(statearr_42714_42717[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref(cb));
return cljs.core.constant$keyword$787;
} else
{return null;
}
};
var ioc_alts_BANG_ = function (state,cont_block,ports,var_args){
var p__42706 = null;if (arguments.length > 3) {
  p__42706 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 3),0);} 
return ioc_alts_BANG___delegate.call(this,state,cont_block,ports,p__42706);};
ioc_alts_BANG_.cljs$lang$maxFixedArity = 3;
ioc_alts_BANG_.cljs$lang$applyTo = (function (arglist__42718){
var state = cljs.core.first(arglist__42718);
arglist__42718 = cljs.core.next(arglist__42718);
var cont_block = cljs.core.first(arglist__42718);
arglist__42718 = cljs.core.next(arglist__42718);
var ports = cljs.core.first(arglist__42718);
var p__42706 = cljs.core.rest(arglist__42718);
return ioc_alts_BANG___delegate(state,cont_block,ports,p__42706);
});
ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = ioc_alts_BANG___delegate;
return ioc_alts_BANG_;
})()
;
cljs.core.async.impl.ioc_helpers.return_chan = (function return_chan(state,value){var c = (state[cljs.core.async.impl.ioc_helpers.USER_START_IDX]);if((value == null))
{} else
{c.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(null,value,cljs.core.async.impl.ioc_helpers.fn_handler(((function (c){
return (function (){return null;
});})(c))
));
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
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
if(arguments.length>5){
this.__meta = __meta;
this.__extmap = __extmap;
} else {
this.__meta=null;
this.__extmap=null;
}
})
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4127__auto__,k__4128__auto__){var self__ = this;
var this__4127__auto____$1 = this;return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4127__auto____$1,k__4128__auto__,null);
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4129__auto__,k42720,else__4130__auto__){var self__ = this;
var this__4129__auto____$1 = this;var G__42722 = (((k42720 instanceof cljs.core.Keyword))?k42720.fqn:null);switch (G__42722) {
case "prev":
return self__.prev;

break;
case "continue-block":
return self__.continue_block;

break;
case "finally-block":
return self__.finally_block;

break;
case "catch-exception":
return self__.catch_exception;

break;
case "catch-block":
return self__.catch_block;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k42720,else__4130__auto__);

}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4141__auto__,writer__4142__auto__,opts__4143__auto__){var self__ = this;
var this__4141__auto____$1 = this;var pr_pair__4144__auto__ = ((function (this__4141__auto____$1){
return (function (keyval__4145__auto__){return cljs.core.pr_sequential_writer(writer__4142__auto__,cljs.core.pr_writer,""," ","",opts__4143__auto__,keyval__4145__auto__);
});})(this__4141__auto____$1))
;return cljs.core.pr_sequential_writer(writer__4142__auto__,pr_pair__4144__auto__,"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",opts__4143__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$788,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$789,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$790,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$791,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$792,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4125__auto__){var self__ = this;
var this__4125__auto____$1 = this;return self__.__meta;
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4121__auto__){var self__ = this;
var this__4121__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4131__auto__){var self__ = this;
var this__4131__auto____$1 = this;return (5 + cljs.core.count(self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4122__auto__){var self__ = this;
var this__4122__auto____$1 = this;var h__3952__auto__ = self__.__hash;if(!((h__3952__auto__ == null)))
{return h__3952__auto__;
} else
{var h__3952__auto____$1 = cljs.core.hash_imap(this__4122__auto____$1);self__.__hash = h__3952__auto____$1;
return h__3952__auto____$1;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4123__auto__,other__4124__auto__){var self__ = this;
var this__4123__auto____$1 = this;if(cljs.core.truth_((function (){var and__3529__auto__ = other__4124__auto__;if(cljs.core.truth_(and__3529__auto__))
{return ((this__4123__auto____$1.constructor === other__4124__auto__.constructor)) && (cljs.core.equiv_map(this__4123__auto____$1,other__4124__auto__));
} else
{return and__3529__auto__;
}
})()))
{return true;
} else
{return false;
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4136__auto__,k__4137__auto__){var self__ = this;
var this__4136__auto____$1 = this;if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$790,null,cljs.core.constant$keyword$788,null,cljs.core.constant$keyword$789,null,cljs.core.constant$keyword$792,null,cljs.core.constant$keyword$791,null], null), null),k__4137__auto__))
{return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into(cljs.core.PersistentArrayMap.EMPTY,this__4136__auto____$1),self__.__meta),k__4137__auto__);
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4137__auto__)),null));
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4134__auto__,k__4135__auto__,G__42719){var self__ = this;
var this__4134__auto____$1 = this;var pred__42723 = cljs.core.keyword_identical_QMARK_;var expr__42724 = k__4135__auto__;if(cljs.core.truth_((pred__42723.cljs$core$IFn$_invoke$arity$2 ? pred__42723.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$788,expr__42724) : pred__42723.call(null,cljs.core.constant$keyword$788,expr__42724))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(G__42719,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__42723.cljs$core$IFn$_invoke$arity$2 ? pred__42723.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$789,expr__42724) : pred__42723.call(null,cljs.core.constant$keyword$789,expr__42724))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,G__42719,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__42723.cljs$core$IFn$_invoke$arity$2 ? pred__42723.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$790,expr__42724) : pred__42723.call(null,cljs.core.constant$keyword$790,expr__42724))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,G__42719,self__.continue_block,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__42723.cljs$core$IFn$_invoke$arity$2 ? pred__42723.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$791,expr__42724) : pred__42723.call(null,cljs.core.constant$keyword$791,expr__42724))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,G__42719,self__.prev,self__.__meta,self__.__extmap,null));
} else
{if(cljs.core.truth_((pred__42723.cljs$core$IFn$_invoke$arity$2 ? pred__42723.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$792,expr__42724) : pred__42723.call(null,cljs.core.constant$keyword$792,expr__42724))))
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,G__42719,self__.__meta,self__.__extmap,null));
} else
{return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4135__auto__,G__42719),null));
}
}
}
}
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4139__auto__){var self__ = this;
var this__4139__auto____$1 = this;return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$788,self__.catch_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$789,self__.catch_exception],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$790,self__.finally_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$791,self__.continue_block],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$792,self__.prev],null))], null),self__.__extmap));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4126__auto__,G__42719){var self__ = this;
var this__4126__auto____$1 = this;return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(self__.catch_block,self__.catch_exception,self__.finally_block,self__.continue_block,self__.prev,G__42719,self__.__extmap,self__.__hash));
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4132__auto__,entry__4133__auto__){var self__ = this;
var this__4132__auto____$1 = this;if(cljs.core.vector_QMARK_(entry__4133__auto__))
{return cljs.core._assoc(this__4132__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4133__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4133__auto__,(1)));
} else
{return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4132__auto____$1,entry__4133__auto__);
}
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$type = true;
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrSeq = (function (this__4161__auto__){return cljs.core._conj(cljs.core.List.EMPTY,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.ExceptionFrame.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__){return cljs.core._write(writer__4162__auto__,"cljs.core.async.impl.ioc-helpers/ExceptionFrame");
});
cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame = (function __GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,prev));
});
cljs.core.async.impl.ioc_helpers.map__GT_ExceptionFrame = (function map__GT_ExceptionFrame(G__42721){return (new cljs.core.async.impl.ioc_helpers.ExceptionFrame(cljs.core.constant$keyword$788.cljs$core$IFn$_invoke$arity$1(G__42721),cljs.core.constant$keyword$789.cljs$core$IFn$_invoke$arity$1(G__42721),cljs.core.constant$keyword$790.cljs$core$IFn$_invoke$arity$1(G__42721),cljs.core.constant$keyword$791.cljs$core$IFn$_invoke$arity$1(G__42721),cljs.core.constant$keyword$792.cljs$core$IFn$_invoke$arity$1(G__42721),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__42721,cljs.core.constant$keyword$788,cljs.core.array_seq([cljs.core.constant$keyword$789,cljs.core.constant$keyword$790,cljs.core.constant$keyword$791,cljs.core.constant$keyword$792], 0))));
});
cljs.core.async.impl.ioc_helpers.add_exception_frame = (function add_exception_frame(state,catch_block,catch_exception,finally_block,continue_block){var statearr_42728 = state;(statearr_42728[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.async.impl.ioc_helpers.__GT_ExceptionFrame(catch_block,catch_exception,finally_block,continue_block,cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES)));
return statearr_42728;
});
cljs.core.async.impl.ioc_helpers.process_exception = (function process_exception(state){while(true){
var exception_frame = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES);var catch_block = cljs.core.constant$keyword$788.cljs$core$IFn$_invoke$arity$1(exception_frame);var catch_exception = cljs.core.constant$keyword$789.cljs$core$IFn$_invoke$arity$1(exception_frame);var exception = cljs.core.async.impl.ioc_helpers.aget_object(state,cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION);if(cljs.core.truth_((function (){var and__3529__auto__ = exception;if(cljs.core.truth_(and__3529__auto__))
{return cljs.core.not(exception_frame);
} else
{return and__3529__auto__;
}
})()))
{throw exception;
} else
{if(cljs.core.truth_((function (){var and__3529__auto__ = exception;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = catch_block;if(cljs.core.truth_(and__3529__auto____$1))
{return (exception instanceof catch_exception);
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{var statearr_42734 = state;(statearr_42734[cljs.core.async.impl.ioc_helpers.STATE_IDX] = catch_block);
(statearr_42734[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = exception);
(statearr_42734[cljs.core.async.impl.ioc_helpers.CURRENT_EXCEPTION] = null);
(statearr_42734[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(exception_frame,cljs.core.constant$keyword$788,null,cljs.core.array_seq([cljs.core.constant$keyword$789,null], 0)));
return statearr_42734;
} else
{if(cljs.core.truth_((function (){var and__3529__auto__ = exception;if(cljs.core.truth_(and__3529__auto__))
{return (cljs.core.not(catch_block)) && (cljs.core.not(cljs.core.constant$keyword$790.cljs$core$IFn$_invoke$arity$1(exception_frame)));
} else
{return and__3529__auto__;
}
})()))
{var statearr_42735_42739 = state;(statearr_42735_42739[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$792.cljs$core$IFn$_invoke$arity$1(exception_frame));
{
var G__42740 = state;
state = G__42740;
continue;
}
} else
{if(cljs.core.truth_((function (){var and__3529__auto__ = exception;if(cljs.core.truth_(and__3529__auto__))
{var and__3529__auto____$1 = cljs.core.not(catch_block);if(and__3529__auto____$1)
{return cljs.core.constant$keyword$790.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3529__auto____$1;
}
} else
{return and__3529__auto__;
}
})()))
{var statearr_42736 = state;(statearr_42736[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$790.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_42736[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$790,null));
return statearr_42736;
} else
{if(cljs.core.truth_((function (){var and__3529__auto__ = cljs.core.not(exception);if(and__3529__auto__)
{return cljs.core.constant$keyword$790.cljs$core$IFn$_invoke$arity$1(exception_frame);
} else
{return and__3529__auto__;
}
})()))
{var statearr_42737 = state;(statearr_42737[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$790.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_42737[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(exception_frame,cljs.core.constant$keyword$790,null));
return statearr_42737;
} else
{if((cljs.core.not(exception)) && (cljs.core.not(cljs.core.constant$keyword$790.cljs$core$IFn$_invoke$arity$1(exception_frame))))
{var statearr_42738 = state;(statearr_42738[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cljs.core.constant$keyword$791.cljs$core$IFn$_invoke$arity$1(exception_frame));
(statearr_42738[cljs.core.async.impl.ioc_helpers.EXCEPTION_FRAMES] = cljs.core.constant$keyword$792.cljs$core$IFn$_invoke$arity$1(exception_frame));
return statearr_42738;
} else
{if(cljs.core.constant$keyword$778)
{if(false)
{return null;
} else
{throw (new Error(("Assert failed: No matching clause\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([false], 0))))));
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

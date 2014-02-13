// Compiled by ClojureScript 0.0-2138
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t33752 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33752 = (function (f,fn_handler,meta33753){
this.f = f;
this.fn_handler = fn_handler;
this.meta33753 = meta33753;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33752.cljs$lang$type = true;
cljs.core.async.t33752.cljs$lang$ctorStr = "cljs.core.async/t33752";
cljs.core.async.t33752.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33752");
});
cljs.core.async.t33752.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33752.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t33752.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t33752.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33754){var self__ = this;
var _33754__$1 = this;return self__.meta33753;
});
cljs.core.async.t33752.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33754,meta33753__$1){var self__ = this;
var _33754__$1 = this;return (new cljs.core.async.t33752(self__.f,self__.fn_handler,meta33753__$1));
});
cljs.core.async.__GT_t33752 = (function __GT_t33752(f__$1,fn_handler__$1,meta33753){return (new cljs.core.async.t33752(f__$1,fn_handler__$1,meta33753));
});
}
return (new cljs.core.async.t33752(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__33756 = buff;if(G__33756)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__33756.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__33756.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33756);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__33756);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,0))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("<! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_33757 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_33757);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_33757);
}));
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(">! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3394__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___33758 = n;var x_33759 = 0;while(true){
if((x_33759 < n__4248__auto___33758))
{(a[x_33759] = 0);
{
var G__33760 = (x_33759 + 1);
x_33759 = G__33760;
continue;
}
} else
{}
break;
}
var i = 1;while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__33761 = (i + 1);
i = G__33761;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t33765 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33765 = (function (flag,alt_flag,meta33766){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta33766 = meta33766;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33765.cljs$lang$type = true;
cljs.core.async.t33765.cljs$lang$ctorStr = "cljs.core.async/t33765";
cljs.core.async.t33765.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33765");
});
cljs.core.async.t33765.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33765.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t33765.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t33765.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33767){var self__ = this;
var _33767__$1 = this;return self__.meta33766;
});
cljs.core.async.t33765.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33767,meta33766__$1){var self__ = this;
var _33767__$1 = this;return (new cljs.core.async.t33765(self__.flag,self__.alt_flag,meta33766__$1));
});
cljs.core.async.__GT_t33765 = (function __GT_t33765(flag__$1,alt_flag__$1,meta33766){return (new cljs.core.async.t33765(flag__$1,alt_flag__$1,meta33766));
});
}
return (new cljs.core.async.t33765(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t33771 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33771 = (function (cb,flag,alt_handler,meta33772){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta33772 = meta33772;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33771.cljs$lang$type = true;
cljs.core.async.t33771.cljs$lang$ctorStr = "cljs.core.async/t33771";
cljs.core.async.t33771.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33771");
});
cljs.core.async.t33771.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33771.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t33771.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t33771.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33773){var self__ = this;
var _33773__$1 = this;return self__.meta33772;
});
cljs.core.async.t33771.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33773,meta33772__$1){var self__ = this;
var _33773__$1 = this;return (new cljs.core.async.t33771(self__.cb,self__.flag,self__.alt_handler,meta33772__$1));
});
cljs.core.async.__GT_t33771 = (function __GT_t33771(cb__$1,flag__$1,alt_handler__$1,meta33772){return (new cljs.core.async.t33771(cb__$1,flag__$1,alt_handler__$1,meta33772));
});
}
return (new cljs.core.async.t33771(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",4143410454).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = 0;while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,0):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,1);return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33774_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33774_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3406__auto__ = wport;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__33775 = (i + 1);
i = G__33775;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3406__auto__ = ret;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",2558708147)))
{var temp__4092__auto__ = (function (){var and__3394__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3394__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3394__auto__;
}
})();if(cljs.core.truth_(temp__4092__auto__))
{var got = temp__4092__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",2558708147)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__33776){var map__33778 = p__33776;var map__33778__$1 = ((cljs.core.seq_QMARK_.call(null,map__33778))?cljs.core.apply.call(null,cljs.core.hash_map,map__33778):map__33778);var opts = map__33778__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__33776 = null;if (arguments.length > 1) {
  p__33776 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__33776);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__33779){
var ports = cljs.core.first(arglist__33779);
var p__33776 = cljs.core.rest(arglist__33779);
return alts_BANG___delegate(ports,p__33776);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t33787 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33787 = (function (ch,f,map_LT_,meta33788){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33788 = meta33788;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33787.cljs$lang$type = true;
cljs.core.async.t33787.cljs$lang$ctorStr = "cljs.core.async/t33787";
cljs.core.async.t33787.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33787");
});
cljs.core.async.t33787.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33787.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t33787.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33787.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t33790 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33790 = (function (fn1,_,meta33788,ch,f,map_LT_,meta33791){
this.fn1 = fn1;
this._ = _;
this.meta33788 = meta33788;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta33791 = meta33791;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33790.cljs$lang$type = true;
cljs.core.async.t33790.cljs$lang$ctorStr = "cljs.core.async/t33790";
cljs.core.async.t33790.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33790");
});
cljs.core.async.t33790.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t33790.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t33790.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t33790.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__33780_SHARP_){return f1.call(null,(((p1__33780_SHARP_ == null))?null:self__.f.call(null,p1__33780_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t33790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33792){var self__ = this;
var _33792__$1 = this;return self__.meta33791;
});
cljs.core.async.t33790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33792,meta33791__$1){var self__ = this;
var _33792__$1 = this;return (new cljs.core.async.t33790(self__.fn1,self__._,self__.meta33788,self__.ch,self__.f,self__.map_LT_,meta33791__$1));
});
cljs.core.async.__GT_t33790 = (function __GT_t33790(fn1__$1,___$2,meta33788__$1,ch__$2,f__$2,map_LT___$2,meta33791){return (new cljs.core.async.t33790(fn1__$1,___$2,meta33788__$1,ch__$2,f__$2,map_LT___$2,meta33791));
});
}
return (new cljs.core.async.t33790(fn1,___$1,self__.meta33788,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3394__auto__ = ret;if(cljs.core.truth_(and__3394__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3394__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t33787.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33787.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33787.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33789){var self__ = this;
var _33789__$1 = this;return self__.meta33788;
});
cljs.core.async.t33787.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33789,meta33788__$1){var self__ = this;
var _33789__$1 = this;return (new cljs.core.async.t33787(self__.ch,self__.f,self__.map_LT_,meta33788__$1));
});
cljs.core.async.__GT_t33787 = (function __GT_t33787(ch__$1,f__$1,map_LT___$1,meta33788){return (new cljs.core.async.t33787(ch__$1,f__$1,map_LT___$1,meta33788));
});
}
return (new cljs.core.async.t33787(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t33796 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33796 = (function (ch,f,map_GT_,meta33797){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta33797 = meta33797;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33796.cljs$lang$type = true;
cljs.core.async.t33796.cljs$lang$ctorStr = "cljs.core.async/t33796";
cljs.core.async.t33796.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33796");
});
cljs.core.async.t33796.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t33796.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33796.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33798){var self__ = this;
var _33798__$1 = this;return self__.meta33797;
});
cljs.core.async.t33796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33798,meta33797__$1){var self__ = this;
var _33798__$1 = this;return (new cljs.core.async.t33796(self__.ch,self__.f,self__.map_GT_,meta33797__$1));
});
cljs.core.async.__GT_t33796 = (function __GT_t33796(ch__$1,f__$1,map_GT___$1,meta33797){return (new cljs.core.async.t33796(ch__$1,f__$1,map_GT___$1,meta33797));
});
}
return (new cljs.core.async.t33796(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t33802 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33802 = (function (ch,p,filter_GT_,meta33803){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta33803 = meta33803;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33802.cljs$lang$type = true;
cljs.core.async.t33802.cljs$lang$ctorStr = "cljs.core.async/t33802";
cljs.core.async.t33802.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33802");
});
cljs.core.async.t33802.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t33802.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t33802.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t33802.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t33802.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t33802.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t33802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33804){var self__ = this;
var _33804__$1 = this;return self__.meta33803;
});
cljs.core.async.t33802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33804,meta33803__$1){var self__ = this;
var _33804__$1 = this;return (new cljs.core.async.t33802(self__.ch,self__.p,self__.filter_GT_,meta33803__$1));
});
cljs.core.async.__GT_t33802 = (function __GT_t33802(ch__$1,p__$1,filter_GT___$1,meta33803){return (new cljs.core.async.t33802(ch__$1,p__$1,filter_GT___$1,meta33803));
});
}
return (new cljs.core.async.t33802(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___33887 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33866){var state_val_33867 = (state_33866[1]);if((state_val_33867 === 1))
{var state_33866__$1 = state_33866;var statearr_33868_33888 = state_33866__$1;(statearr_33868_33888[2] = null);
(statearr_33868_33888[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33867 === 2))
{var state_33866__$1 = state_33866;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33866__$1,4,ch);
} else
{if((state_val_33867 === 3))
{var inst_33864 = (state_33866[2]);var state_33866__$1 = state_33866;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33866__$1,inst_33864);
} else
{if((state_val_33867 === 4))
{var inst_33848 = (state_33866[7]);var inst_33848__$1 = (state_33866[2]);var inst_33849 = (inst_33848__$1 == null);var state_33866__$1 = (function (){var statearr_33869 = state_33866;(statearr_33869[7] = inst_33848__$1);
return statearr_33869;
})();if(cljs.core.truth_(inst_33849))
{var statearr_33870_33889 = state_33866__$1;(statearr_33870_33889[1] = 5);
} else
{var statearr_33871_33890 = state_33866__$1;(statearr_33871_33890[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33867 === 5))
{var inst_33851 = cljs.core.async.close_BANG_.call(null,out);var state_33866__$1 = state_33866;var statearr_33872_33891 = state_33866__$1;(statearr_33872_33891[2] = inst_33851);
(statearr_33872_33891[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33867 === 6))
{var inst_33848 = (state_33866[7]);var inst_33853 = p.call(null,inst_33848);var state_33866__$1 = state_33866;if(cljs.core.truth_(inst_33853))
{var statearr_33873_33892 = state_33866__$1;(statearr_33873_33892[1] = 8);
} else
{var statearr_33874_33893 = state_33866__$1;(statearr_33874_33893[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33867 === 7))
{var inst_33862 = (state_33866[2]);var state_33866__$1 = state_33866;var statearr_33875_33894 = state_33866__$1;(statearr_33875_33894[2] = inst_33862);
(statearr_33875_33894[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33867 === 8))
{var inst_33848 = (state_33866[7]);var state_33866__$1 = state_33866;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33866__$1,11,out,inst_33848);
} else
{if((state_val_33867 === 9))
{var state_33866__$1 = state_33866;var statearr_33876_33895 = state_33866__$1;(statearr_33876_33895[2] = null);
(statearr_33876_33895[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33867 === 10))
{var inst_33859 = (state_33866[2]);var state_33866__$1 = (function (){var statearr_33877 = state_33866;(statearr_33877[8] = inst_33859);
return statearr_33877;
})();var statearr_33878_33896 = state_33866__$1;(statearr_33878_33896[2] = null);
(statearr_33878_33896[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33867 === 11))
{var inst_33856 = (state_33866[2]);var state_33866__$1 = state_33866;var statearr_33879_33897 = state_33866__$1;(statearr_33879_33897[2] = inst_33856);
(statearr_33879_33897[1] = 10);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_33883 = [null,null,null,null,null,null,null,null,null];(statearr_33883[0] = state_machine__5507__auto__);
(statearr_33883[1] = 1);
return statearr_33883;
});
var state_machine__5507__auto____1 = (function (state_33866){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33866);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33884){if((e33884 instanceof Object))
{var ex__5510__auto__ = e33884;var statearr_33885_33898 = state_33866;(statearr_33885_33898[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33866);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33884;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33899 = state_33866;
state_33866 = G__33899;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33866){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33866);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33886 = f__5522__auto__.call(null);(statearr_33886[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33887);
return statearr_33886;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34051){var state_val_34052 = (state_34051[1]);if((state_val_34052 === 1))
{var state_34051__$1 = state_34051;var statearr_34053_34090 = state_34051__$1;(statearr_34053_34090[2] = null);
(statearr_34053_34090[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 2))
{var state_34051__$1 = state_34051;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34051__$1,4,in$);
} else
{if((state_val_34052 === 3))
{var inst_34049 = (state_34051[2]);var state_34051__$1 = state_34051;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34051__$1,inst_34049);
} else
{if((state_val_34052 === 4))
{var inst_33997 = (state_34051[7]);var inst_33997__$1 = (state_34051[2]);var inst_33998 = (inst_33997__$1 == null);var state_34051__$1 = (function (){var statearr_34054 = state_34051;(statearr_34054[7] = inst_33997__$1);
return statearr_34054;
})();if(cljs.core.truth_(inst_33998))
{var statearr_34055_34091 = state_34051__$1;(statearr_34055_34091[1] = 5);
} else
{var statearr_34056_34092 = state_34051__$1;(statearr_34056_34092[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 5))
{var inst_34000 = cljs.core.async.close_BANG_.call(null,out);var state_34051__$1 = state_34051;var statearr_34057_34093 = state_34051__$1;(statearr_34057_34093[2] = inst_34000);
(statearr_34057_34093[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 6))
{var inst_33997 = (state_34051[7]);var inst_34002 = f.call(null,inst_33997);var inst_34007 = cljs.core.seq.call(null,inst_34002);var inst_34008 = inst_34007;var inst_34009 = null;var inst_34010 = 0;var inst_34011 = 0;var state_34051__$1 = (function (){var statearr_34058 = state_34051;(statearr_34058[8] = inst_34008);
(statearr_34058[9] = inst_34009);
(statearr_34058[10] = inst_34011);
(statearr_34058[11] = inst_34010);
return statearr_34058;
})();var statearr_34059_34094 = state_34051__$1;(statearr_34059_34094[2] = null);
(statearr_34059_34094[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 7))
{var inst_34047 = (state_34051[2]);var state_34051__$1 = state_34051;var statearr_34060_34095 = state_34051__$1;(statearr_34060_34095[2] = inst_34047);
(statearr_34060_34095[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 8))
{var inst_34011 = (state_34051[10]);var inst_34010 = (state_34051[11]);var inst_34013 = (inst_34011 < inst_34010);var inst_34014 = inst_34013;var state_34051__$1 = state_34051;if(cljs.core.truth_(inst_34014))
{var statearr_34061_34096 = state_34051__$1;(statearr_34061_34096[1] = 10);
} else
{var statearr_34062_34097 = state_34051__$1;(statearr_34062_34097[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 9))
{var inst_34044 = (state_34051[2]);var state_34051__$1 = (function (){var statearr_34063 = state_34051;(statearr_34063[12] = inst_34044);
return statearr_34063;
})();var statearr_34064_34098 = state_34051__$1;(statearr_34064_34098[2] = null);
(statearr_34064_34098[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 10))
{var inst_34009 = (state_34051[9]);var inst_34011 = (state_34051[10]);var inst_34016 = cljs.core._nth.call(null,inst_34009,inst_34011);var state_34051__$1 = state_34051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34051__$1,13,out,inst_34016);
} else
{if((state_val_34052 === 11))
{var inst_34008 = (state_34051[8]);var inst_34022 = (state_34051[13]);var inst_34022__$1 = cljs.core.seq.call(null,inst_34008);var state_34051__$1 = (function (){var statearr_34068 = state_34051;(statearr_34068[13] = inst_34022__$1);
return statearr_34068;
})();if(inst_34022__$1)
{var statearr_34069_34099 = state_34051__$1;(statearr_34069_34099[1] = 14);
} else
{var statearr_34070_34100 = state_34051__$1;(statearr_34070_34100[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 12))
{var inst_34042 = (state_34051[2]);var state_34051__$1 = state_34051;var statearr_34071_34101 = state_34051__$1;(statearr_34071_34101[2] = inst_34042);
(statearr_34071_34101[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 13))
{var inst_34008 = (state_34051[8]);var inst_34009 = (state_34051[9]);var inst_34011 = (state_34051[10]);var inst_34010 = (state_34051[11]);var inst_34018 = (state_34051[2]);var inst_34019 = (inst_34011 + 1);var tmp34065 = inst_34008;var tmp34066 = inst_34009;var tmp34067 = inst_34010;var inst_34008__$1 = tmp34065;var inst_34009__$1 = tmp34066;var inst_34010__$1 = tmp34067;var inst_34011__$1 = inst_34019;var state_34051__$1 = (function (){var statearr_34072 = state_34051;(statearr_34072[8] = inst_34008__$1);
(statearr_34072[9] = inst_34009__$1);
(statearr_34072[10] = inst_34011__$1);
(statearr_34072[11] = inst_34010__$1);
(statearr_34072[14] = inst_34018);
return statearr_34072;
})();var statearr_34073_34102 = state_34051__$1;(statearr_34073_34102[2] = null);
(statearr_34073_34102[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 14))
{var inst_34022 = (state_34051[13]);var inst_34024 = cljs.core.chunked_seq_QMARK_.call(null,inst_34022);var state_34051__$1 = state_34051;if(inst_34024)
{var statearr_34074_34103 = state_34051__$1;(statearr_34074_34103[1] = 17);
} else
{var statearr_34075_34104 = state_34051__$1;(statearr_34075_34104[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 15))
{var state_34051__$1 = state_34051;var statearr_34076_34105 = state_34051__$1;(statearr_34076_34105[2] = null);
(statearr_34076_34105[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 16))
{var inst_34040 = (state_34051[2]);var state_34051__$1 = state_34051;var statearr_34077_34106 = state_34051__$1;(statearr_34077_34106[2] = inst_34040);
(statearr_34077_34106[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 17))
{var inst_34022 = (state_34051[13]);var inst_34026 = cljs.core.chunk_first.call(null,inst_34022);var inst_34027 = cljs.core.chunk_rest.call(null,inst_34022);var inst_34028 = cljs.core.count.call(null,inst_34026);var inst_34008 = inst_34027;var inst_34009 = inst_34026;var inst_34010 = inst_34028;var inst_34011 = 0;var state_34051__$1 = (function (){var statearr_34078 = state_34051;(statearr_34078[8] = inst_34008);
(statearr_34078[9] = inst_34009);
(statearr_34078[10] = inst_34011);
(statearr_34078[11] = inst_34010);
return statearr_34078;
})();var statearr_34079_34107 = state_34051__$1;(statearr_34079_34107[2] = null);
(statearr_34079_34107[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 18))
{var inst_34022 = (state_34051[13]);var inst_34031 = cljs.core.first.call(null,inst_34022);var state_34051__$1 = state_34051;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34051__$1,20,out,inst_34031);
} else
{if((state_val_34052 === 19))
{var inst_34037 = (state_34051[2]);var state_34051__$1 = state_34051;var statearr_34080_34108 = state_34051__$1;(statearr_34080_34108[2] = inst_34037);
(statearr_34080_34108[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34052 === 20))
{var inst_34022 = (state_34051[13]);var inst_34033 = (state_34051[2]);var inst_34034 = cljs.core.next.call(null,inst_34022);var inst_34008 = inst_34034;var inst_34009 = null;var inst_34010 = 0;var inst_34011 = 0;var state_34051__$1 = (function (){var statearr_34081 = state_34051;(statearr_34081[8] = inst_34008);
(statearr_34081[9] = inst_34009);
(statearr_34081[10] = inst_34011);
(statearr_34081[11] = inst_34010);
(statearr_34081[15] = inst_34033);
return statearr_34081;
})();var statearr_34082_34109 = state_34051__$1;(statearr_34082_34109[2] = null);
(statearr_34082_34109[1] = 8);
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
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34086 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34086[0] = state_machine__5507__auto__);
(statearr_34086[1] = 1);
return statearr_34086;
});
var state_machine__5507__auto____1 = (function (state_34051){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34051);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34087){if((e34087 instanceof Object))
{var ex__5510__auto__ = e34087;var statearr_34088_34110 = state_34051;(statearr_34088_34110[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34051);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34087;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34111 = state_34051;
state_34051 = G__34111;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34051){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34051);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34089 = f__5522__auto__.call(null);(statearr_34089[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34089;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___34192 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34171){var state_val_34172 = (state_34171[1]);if((state_val_34172 === 1))
{var state_34171__$1 = state_34171;var statearr_34173_34193 = state_34171__$1;(statearr_34173_34193[2] = null);
(statearr_34173_34193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 2))
{var state_34171__$1 = state_34171;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34171__$1,4,from);
} else
{if((state_val_34172 === 3))
{var inst_34169 = (state_34171[2]);var state_34171__$1 = state_34171;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34171__$1,inst_34169);
} else
{if((state_val_34172 === 4))
{var inst_34154 = (state_34171[7]);var inst_34154__$1 = (state_34171[2]);var inst_34155 = (inst_34154__$1 == null);var state_34171__$1 = (function (){var statearr_34174 = state_34171;(statearr_34174[7] = inst_34154__$1);
return statearr_34174;
})();if(cljs.core.truth_(inst_34155))
{var statearr_34175_34194 = state_34171__$1;(statearr_34175_34194[1] = 5);
} else
{var statearr_34176_34195 = state_34171__$1;(statearr_34176_34195[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 5))
{var state_34171__$1 = state_34171;if(cljs.core.truth_(close_QMARK_))
{var statearr_34177_34196 = state_34171__$1;(statearr_34177_34196[1] = 8);
} else
{var statearr_34178_34197 = state_34171__$1;(statearr_34178_34197[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 6))
{var inst_34154 = (state_34171[7]);var state_34171__$1 = state_34171;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34171__$1,11,to,inst_34154);
} else
{if((state_val_34172 === 7))
{var inst_34167 = (state_34171[2]);var state_34171__$1 = state_34171;var statearr_34179_34198 = state_34171__$1;(statearr_34179_34198[2] = inst_34167);
(statearr_34179_34198[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 8))
{var inst_34158 = cljs.core.async.close_BANG_.call(null,to);var state_34171__$1 = state_34171;var statearr_34180_34199 = state_34171__$1;(statearr_34180_34199[2] = inst_34158);
(statearr_34180_34199[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 9))
{var state_34171__$1 = state_34171;var statearr_34181_34200 = state_34171__$1;(statearr_34181_34200[2] = null);
(statearr_34181_34200[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 10))
{var inst_34161 = (state_34171[2]);var state_34171__$1 = state_34171;var statearr_34182_34201 = state_34171__$1;(statearr_34182_34201[2] = inst_34161);
(statearr_34182_34201[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34172 === 11))
{var inst_34164 = (state_34171[2]);var state_34171__$1 = (function (){var statearr_34183 = state_34171;(statearr_34183[8] = inst_34164);
return statearr_34183;
})();var statearr_34184_34202 = state_34171__$1;(statearr_34184_34202[2] = null);
(statearr_34184_34202[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34188 = [null,null,null,null,null,null,null,null,null];(statearr_34188[0] = state_machine__5507__auto__);
(statearr_34188[1] = 1);
return statearr_34188;
});
var state_machine__5507__auto____1 = (function (state_34171){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34171);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34189){if((e34189 instanceof Object))
{var ex__5510__auto__ = e34189;var statearr_34190_34203 = state_34171;(statearr_34190_34203[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34171);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34189;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34204 = state_34171;
state_34171 = G__34204;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34171){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34191 = f__5522__auto__.call(null);(statearr_34191[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34192);
return statearr_34191;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___34291 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34269){var state_val_34270 = (state_34269[1]);if((state_val_34270 === 1))
{var state_34269__$1 = state_34269;var statearr_34271_34292 = state_34269__$1;(statearr_34271_34292[2] = null);
(statearr_34271_34292[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34270 === 2))
{var state_34269__$1 = state_34269;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34269__$1,4,ch);
} else
{if((state_val_34270 === 3))
{var inst_34267 = (state_34269[2]);var state_34269__$1 = state_34269;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34269__$1,inst_34267);
} else
{if((state_val_34270 === 4))
{var inst_34250 = (state_34269[7]);var inst_34250__$1 = (state_34269[2]);var inst_34251 = (inst_34250__$1 == null);var state_34269__$1 = (function (){var statearr_34272 = state_34269;(statearr_34272[7] = inst_34250__$1);
return statearr_34272;
})();if(cljs.core.truth_(inst_34251))
{var statearr_34273_34293 = state_34269__$1;(statearr_34273_34293[1] = 5);
} else
{var statearr_34274_34294 = state_34269__$1;(statearr_34274_34294[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34270 === 5))
{var inst_34253 = cljs.core.async.close_BANG_.call(null,tc);var inst_34254 = cljs.core.async.close_BANG_.call(null,fc);var state_34269__$1 = (function (){var statearr_34275 = state_34269;(statearr_34275[8] = inst_34253);
return statearr_34275;
})();var statearr_34276_34295 = state_34269__$1;(statearr_34276_34295[2] = inst_34254);
(statearr_34276_34295[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34270 === 6))
{var inst_34250 = (state_34269[7]);var inst_34256 = p.call(null,inst_34250);var state_34269__$1 = state_34269;if(cljs.core.truth_(inst_34256))
{var statearr_34277_34296 = state_34269__$1;(statearr_34277_34296[1] = 9);
} else
{var statearr_34278_34297 = state_34269__$1;(statearr_34278_34297[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34270 === 7))
{var inst_34265 = (state_34269[2]);var state_34269__$1 = state_34269;var statearr_34279_34298 = state_34269__$1;(statearr_34279_34298[2] = inst_34265);
(statearr_34279_34298[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34270 === 8))
{var inst_34262 = (state_34269[2]);var state_34269__$1 = (function (){var statearr_34280 = state_34269;(statearr_34280[9] = inst_34262);
return statearr_34280;
})();var statearr_34281_34299 = state_34269__$1;(statearr_34281_34299[2] = null);
(statearr_34281_34299[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34270 === 9))
{var state_34269__$1 = state_34269;var statearr_34282_34300 = state_34269__$1;(statearr_34282_34300[2] = tc);
(statearr_34282_34300[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34270 === 10))
{var state_34269__$1 = state_34269;var statearr_34283_34301 = state_34269__$1;(statearr_34283_34301[2] = fc);
(statearr_34283_34301[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34270 === 11))
{var inst_34250 = (state_34269[7]);var inst_34260 = (state_34269[2]);var state_34269__$1 = state_34269;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34269__$1,8,inst_34260,inst_34250);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34287 = [null,null,null,null,null,null,null,null,null,null];(statearr_34287[0] = state_machine__5507__auto__);
(statearr_34287[1] = 1);
return statearr_34287;
});
var state_machine__5507__auto____1 = (function (state_34269){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34269);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34288){if((e34288 instanceof Object))
{var ex__5510__auto__ = e34288;var statearr_34289_34302 = state_34269;(statearr_34289_34302[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34269);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34288;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34303 = state_34269;
state_34269 = G__34303;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34269){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34269);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34290 = f__5522__auto__.call(null);(statearr_34290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34291);
return statearr_34290;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34350){var state_val_34351 = (state_34350[1]);if((state_val_34351 === 7))
{var inst_34346 = (state_34350[2]);var state_34350__$1 = state_34350;var statearr_34352_34368 = state_34350__$1;(statearr_34352_34368[2] = inst_34346);
(statearr_34352_34368[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34351 === 6))
{var inst_34336 = (state_34350[7]);var inst_34339 = (state_34350[8]);var inst_34343 = f.call(null,inst_34336,inst_34339);var inst_34336__$1 = inst_34343;var state_34350__$1 = (function (){var statearr_34353 = state_34350;(statearr_34353[7] = inst_34336__$1);
return statearr_34353;
})();var statearr_34354_34369 = state_34350__$1;(statearr_34354_34369[2] = null);
(statearr_34354_34369[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34351 === 5))
{var inst_34336 = (state_34350[7]);var state_34350__$1 = state_34350;var statearr_34355_34370 = state_34350__$1;(statearr_34355_34370[2] = inst_34336);
(statearr_34355_34370[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34351 === 4))
{var inst_34339 = (state_34350[8]);var inst_34339__$1 = (state_34350[2]);var inst_34340 = (inst_34339__$1 == null);var state_34350__$1 = (function (){var statearr_34356 = state_34350;(statearr_34356[8] = inst_34339__$1);
return statearr_34356;
})();if(cljs.core.truth_(inst_34340))
{var statearr_34357_34371 = state_34350__$1;(statearr_34357_34371[1] = 5);
} else
{var statearr_34358_34372 = state_34350__$1;(statearr_34358_34372[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34351 === 3))
{var inst_34348 = (state_34350[2]);var state_34350__$1 = state_34350;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34350__$1,inst_34348);
} else
{if((state_val_34351 === 2))
{var state_34350__$1 = state_34350;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34350__$1,4,ch);
} else
{if((state_val_34351 === 1))
{var inst_34336 = init;var state_34350__$1 = (function (){var statearr_34359 = state_34350;(statearr_34359[7] = inst_34336);
return statearr_34359;
})();var statearr_34360_34373 = state_34350__$1;(statearr_34360_34373[2] = null);
(statearr_34360_34373[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34364 = [null,null,null,null,null,null,null,null,null];(statearr_34364[0] = state_machine__5507__auto__);
(statearr_34364[1] = 1);
return statearr_34364;
});
var state_machine__5507__auto____1 = (function (state_34350){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34350);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34365){if((e34365 instanceof Object))
{var ex__5510__auto__ = e34365;var statearr_34366_34374 = state_34350;(statearr_34366_34374[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34350);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34365;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34375 = state_34350;
state_34350 = G__34375;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34350){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34350);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34367 = f__5522__auto__.call(null);(statearr_34367[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34367;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34437){var state_val_34438 = (state_34437[1]);if((state_val_34438 === 1))
{var inst_34417 = cljs.core.seq.call(null,coll);var inst_34418 = inst_34417;var state_34437__$1 = (function (){var statearr_34439 = state_34437;(statearr_34439[7] = inst_34418);
return statearr_34439;
})();var statearr_34440_34458 = state_34437__$1;(statearr_34440_34458[2] = null);
(statearr_34440_34458[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34438 === 2))
{var inst_34418 = (state_34437[7]);var state_34437__$1 = state_34437;if(cljs.core.truth_(inst_34418))
{var statearr_34441_34459 = state_34437__$1;(statearr_34441_34459[1] = 4);
} else
{var statearr_34442_34460 = state_34437__$1;(statearr_34442_34460[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34438 === 3))
{var inst_34435 = (state_34437[2]);var state_34437__$1 = state_34437;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34437__$1,inst_34435);
} else
{if((state_val_34438 === 4))
{var inst_34418 = (state_34437[7]);var inst_34421 = cljs.core.first.call(null,inst_34418);var state_34437__$1 = state_34437;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34437__$1,7,ch,inst_34421);
} else
{if((state_val_34438 === 5))
{var state_34437__$1 = state_34437;if(cljs.core.truth_(close_QMARK_))
{var statearr_34443_34461 = state_34437__$1;(statearr_34443_34461[1] = 8);
} else
{var statearr_34444_34462 = state_34437__$1;(statearr_34444_34462[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34438 === 6))
{var inst_34433 = (state_34437[2]);var state_34437__$1 = state_34437;var statearr_34445_34463 = state_34437__$1;(statearr_34445_34463[2] = inst_34433);
(statearr_34445_34463[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34438 === 7))
{var inst_34418 = (state_34437[7]);var inst_34423 = (state_34437[2]);var inst_34424 = cljs.core.next.call(null,inst_34418);var inst_34418__$1 = inst_34424;var state_34437__$1 = (function (){var statearr_34446 = state_34437;(statearr_34446[7] = inst_34418__$1);
(statearr_34446[8] = inst_34423);
return statearr_34446;
})();var statearr_34447_34464 = state_34437__$1;(statearr_34447_34464[2] = null);
(statearr_34447_34464[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34438 === 8))
{var inst_34428 = cljs.core.async.close_BANG_.call(null,ch);var state_34437__$1 = state_34437;var statearr_34448_34465 = state_34437__$1;(statearr_34448_34465[2] = inst_34428);
(statearr_34448_34465[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34438 === 9))
{var state_34437__$1 = state_34437;var statearr_34449_34466 = state_34437__$1;(statearr_34449_34466[2] = null);
(statearr_34449_34466[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34438 === 10))
{var inst_34431 = (state_34437[2]);var state_34437__$1 = state_34437;var statearr_34450_34467 = state_34437__$1;(statearr_34450_34467[2] = inst_34431);
(statearr_34450_34467[1] = 6);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34454 = [null,null,null,null,null,null,null,null,null];(statearr_34454[0] = state_machine__5507__auto__);
(statearr_34454[1] = 1);
return statearr_34454;
});
var state_machine__5507__auto____1 = (function (state_34437){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34437);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34455){if((e34455 instanceof Object))
{var ex__5510__auto__ = e34455;var statearr_34456_34468 = state_34437;(statearr_34456_34468[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34437);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34455;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34469 = state_34437;
state_34437 = G__34469;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34437){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34437);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34457 = f__5522__auto__.call(null);(statearr_34457[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34457;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return c__5521__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,100,coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj34471 = {};return obj34471;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3394__auto__ = _;if(and__3394__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4027__auto__ = (((_ == null))?null:_);return (function (){var or__3406__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj34473 = {};return obj34473;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* Items received when there are no taps get dropped.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t34697 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34697 = (function (cs,ch,mult,meta34698){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta34698 = meta34698;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34697.cljs$lang$type = true;
cljs.core.async.t34697.cljs$lang$ctorStr = "cljs.core.async/t34697";
cljs.core.async.t34697.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34697");
});})(cs))
;
cljs.core.async.t34697.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t34697.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t34697.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t34697.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t34697.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34697.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t34697.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34699){var self__ = this;
var _34699__$1 = this;return self__.meta34698;
});})(cs))
;
cljs.core.async.t34697.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34699,meta34698__$1){var self__ = this;
var _34699__$1 = this;return (new cljs.core.async.t34697(self__.cs,self__.ch,self__.mult,meta34698__$1));
});})(cs))
;
cljs.core.async.__GT_t34697 = ((function (cs){
return (function __GT_t34697(cs__$1,ch__$1,mult__$1,meta34698){return (new cljs.core.async.t34697(cs__$1,ch__$1,mult__$1,meta34698));
});})(cs))
;
}
return (new cljs.core.async.t34697(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___34920 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34834){var state_val_34835 = (state_34834[1]);if((state_val_34835 === 32))
{var inst_34702 = (state_34834[7]);var inst_34778 = (state_34834[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34834,31,Object,null,30);var inst_34785 = cljs.core.async.put_BANG_.call(null,inst_34778,inst_34702,done);var state_34834__$1 = state_34834;var statearr_34836_34921 = state_34834__$1;(statearr_34836_34921[2] = inst_34785);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34834__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 1))
{var state_34834__$1 = state_34834;var statearr_34837_34922 = state_34834__$1;(statearr_34837_34922[2] = null);
(statearr_34837_34922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 33))
{var inst_34791 = (state_34834[9]);var inst_34793 = cljs.core.chunked_seq_QMARK_.call(null,inst_34791);var state_34834__$1 = state_34834;if(inst_34793)
{var statearr_34838_34923 = state_34834__$1;(statearr_34838_34923[1] = 36);
} else
{var statearr_34839_34924 = state_34834__$1;(statearr_34839_34924[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 2))
{var state_34834__$1 = state_34834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34834__$1,4,ch);
} else
{if((state_val_34835 === 34))
{var state_34834__$1 = state_34834;var statearr_34840_34925 = state_34834__$1;(statearr_34840_34925[2] = null);
(statearr_34840_34925[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 3))
{var inst_34832 = (state_34834[2]);var state_34834__$1 = state_34834;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34834__$1,inst_34832);
} else
{if((state_val_34835 === 35))
{var inst_34816 = (state_34834[2]);var state_34834__$1 = state_34834;var statearr_34841_34926 = state_34834__$1;(statearr_34841_34926[2] = inst_34816);
(statearr_34841_34926[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 4))
{var inst_34702 = (state_34834[7]);var inst_34702__$1 = (state_34834[2]);var inst_34703 = (inst_34702__$1 == null);var state_34834__$1 = (function (){var statearr_34842 = state_34834;(statearr_34842[7] = inst_34702__$1);
return statearr_34842;
})();if(cljs.core.truth_(inst_34703))
{var statearr_34843_34927 = state_34834__$1;(statearr_34843_34927[1] = 5);
} else
{var statearr_34844_34928 = state_34834__$1;(statearr_34844_34928[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 36))
{var inst_34791 = (state_34834[9]);var inst_34795 = cljs.core.chunk_first.call(null,inst_34791);var inst_34796 = cljs.core.chunk_rest.call(null,inst_34791);var inst_34797 = cljs.core.count.call(null,inst_34795);var inst_34770 = inst_34796;var inst_34771 = inst_34795;var inst_34772 = inst_34797;var inst_34773 = 0;var state_34834__$1 = (function (){var statearr_34845 = state_34834;(statearr_34845[10] = inst_34773);
(statearr_34845[11] = inst_34772);
(statearr_34845[12] = inst_34770);
(statearr_34845[13] = inst_34771);
return statearr_34845;
})();var statearr_34846_34929 = state_34834__$1;(statearr_34846_34929[2] = null);
(statearr_34846_34929[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 5))
{var inst_34709 = cljs.core.deref.call(null,cs);var inst_34710 = cljs.core.seq.call(null,inst_34709);var inst_34711 = inst_34710;var inst_34712 = null;var inst_34713 = 0;var inst_34714 = 0;var state_34834__$1 = (function (){var statearr_34847 = state_34834;(statearr_34847[14] = inst_34711);
(statearr_34847[15] = inst_34712);
(statearr_34847[16] = inst_34713);
(statearr_34847[17] = inst_34714);
return statearr_34847;
})();var statearr_34848_34930 = state_34834__$1;(statearr_34848_34930[2] = null);
(statearr_34848_34930[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 37))
{var inst_34791 = (state_34834[9]);var inst_34800 = cljs.core.first.call(null,inst_34791);var state_34834__$1 = (function (){var statearr_34849 = state_34834;(statearr_34849[18] = inst_34800);
return statearr_34849;
})();var statearr_34850_34931 = state_34834__$1;(statearr_34850_34931[2] = null);
(statearr_34850_34931[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 6))
{var inst_34762 = (state_34834[19]);var inst_34761 = cljs.core.deref.call(null,cs);var inst_34762__$1 = cljs.core.keys.call(null,inst_34761);var inst_34763 = cljs.core.count.call(null,inst_34762__$1);var inst_34764 = cljs.core.reset_BANG_.call(null,dctr,inst_34763);var inst_34769 = cljs.core.seq.call(null,inst_34762__$1);var inst_34770 = inst_34769;var inst_34771 = null;var inst_34772 = 0;var inst_34773 = 0;var state_34834__$1 = (function (){var statearr_34851 = state_34834;(statearr_34851[10] = inst_34773);
(statearr_34851[11] = inst_34772);
(statearr_34851[12] = inst_34770);
(statearr_34851[13] = inst_34771);
(statearr_34851[20] = inst_34764);
(statearr_34851[19] = inst_34762__$1);
return statearr_34851;
})();var statearr_34852_34932 = state_34834__$1;(statearr_34852_34932[2] = null);
(statearr_34852_34932[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 38))
{var inst_34813 = (state_34834[2]);var state_34834__$1 = state_34834;var statearr_34853_34933 = state_34834__$1;(statearr_34853_34933[2] = inst_34813);
(statearr_34853_34933[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 7))
{var inst_34830 = (state_34834[2]);var state_34834__$1 = state_34834;var statearr_34854_34934 = state_34834__$1;(statearr_34854_34934[2] = inst_34830);
(statearr_34854_34934[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 39))
{var inst_34791 = (state_34834[9]);var inst_34809 = (state_34834[2]);var inst_34810 = cljs.core.next.call(null,inst_34791);var inst_34770 = inst_34810;var inst_34771 = null;var inst_34772 = 0;var inst_34773 = 0;var state_34834__$1 = (function (){var statearr_34855 = state_34834;(statearr_34855[10] = inst_34773);
(statearr_34855[11] = inst_34772);
(statearr_34855[12] = inst_34770);
(statearr_34855[13] = inst_34771);
(statearr_34855[21] = inst_34809);
return statearr_34855;
})();var statearr_34856_34935 = state_34834__$1;(statearr_34856_34935[2] = null);
(statearr_34856_34935[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 8))
{var inst_34713 = (state_34834[16]);var inst_34714 = (state_34834[17]);var inst_34716 = (inst_34714 < inst_34713);var inst_34717 = inst_34716;var state_34834__$1 = state_34834;if(cljs.core.truth_(inst_34717))
{var statearr_34857_34936 = state_34834__$1;(statearr_34857_34936[1] = 10);
} else
{var statearr_34858_34937 = state_34834__$1;(statearr_34858_34937[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 40))
{var inst_34800 = (state_34834[18]);var inst_34801 = (state_34834[2]);var inst_34802 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34803 = cljs.core.async.untap_STAR_.call(null,m,inst_34800);var state_34834__$1 = (function (){var statearr_34859 = state_34834;(statearr_34859[22] = inst_34801);
(statearr_34859[23] = inst_34802);
return statearr_34859;
})();var statearr_34860_34938 = state_34834__$1;(statearr_34860_34938[2] = inst_34803);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34834__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 9))
{var inst_34759 = (state_34834[2]);var state_34834__$1 = state_34834;var statearr_34861_34939 = state_34834__$1;(statearr_34861_34939[2] = inst_34759);
(statearr_34861_34939[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 41))
{var inst_34800 = (state_34834[18]);var inst_34702 = (state_34834[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34834,40,Object,null,39);var inst_34807 = cljs.core.async.put_BANG_.call(null,inst_34800,inst_34702,done);var state_34834__$1 = state_34834;var statearr_34862_34940 = state_34834__$1;(statearr_34862_34940[2] = inst_34807);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34834__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 10))
{var inst_34712 = (state_34834[15]);var inst_34714 = (state_34834[17]);var inst_34720 = cljs.core._nth.call(null,inst_34712,inst_34714);var inst_34721 = cljs.core.nth.call(null,inst_34720,0,null);var inst_34722 = cljs.core.nth.call(null,inst_34720,1,null);var state_34834__$1 = (function (){var statearr_34863 = state_34834;(statearr_34863[24] = inst_34721);
return statearr_34863;
})();if(cljs.core.truth_(inst_34722))
{var statearr_34864_34941 = state_34834__$1;(statearr_34864_34941[1] = 13);
} else
{var statearr_34865_34942 = state_34834__$1;(statearr_34865_34942[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 42))
{var state_34834__$1 = state_34834;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34834__$1,45,dchan);
} else
{if((state_val_34835 === 11))
{var inst_34731 = (state_34834[25]);var inst_34711 = (state_34834[14]);var inst_34731__$1 = cljs.core.seq.call(null,inst_34711);var state_34834__$1 = (function (){var statearr_34866 = state_34834;(statearr_34866[25] = inst_34731__$1);
return statearr_34866;
})();if(inst_34731__$1)
{var statearr_34867_34943 = state_34834__$1;(statearr_34867_34943[1] = 16);
} else
{var statearr_34868_34944 = state_34834__$1;(statearr_34868_34944[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 43))
{var state_34834__$1 = state_34834;var statearr_34869_34945 = state_34834__$1;(statearr_34869_34945[2] = null);
(statearr_34869_34945[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 12))
{var inst_34757 = (state_34834[2]);var state_34834__$1 = state_34834;var statearr_34870_34946 = state_34834__$1;(statearr_34870_34946[2] = inst_34757);
(statearr_34870_34946[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 44))
{var inst_34827 = (state_34834[2]);var state_34834__$1 = (function (){var statearr_34871 = state_34834;(statearr_34871[26] = inst_34827);
return statearr_34871;
})();var statearr_34872_34947 = state_34834__$1;(statearr_34872_34947[2] = null);
(statearr_34872_34947[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 13))
{var inst_34721 = (state_34834[24]);var inst_34724 = cljs.core.async.close_BANG_.call(null,inst_34721);var state_34834__$1 = state_34834;var statearr_34873_34948 = state_34834__$1;(statearr_34873_34948[2] = inst_34724);
(statearr_34873_34948[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 45))
{var inst_34824 = (state_34834[2]);var state_34834__$1 = state_34834;var statearr_34877_34949 = state_34834__$1;(statearr_34877_34949[2] = inst_34824);
(statearr_34877_34949[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 14))
{var state_34834__$1 = state_34834;var statearr_34878_34950 = state_34834__$1;(statearr_34878_34950[2] = null);
(statearr_34878_34950[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 15))
{var inst_34711 = (state_34834[14]);var inst_34712 = (state_34834[15]);var inst_34713 = (state_34834[16]);var inst_34714 = (state_34834[17]);var inst_34727 = (state_34834[2]);var inst_34728 = (inst_34714 + 1);var tmp34874 = inst_34711;var tmp34875 = inst_34712;var tmp34876 = inst_34713;var inst_34711__$1 = tmp34874;var inst_34712__$1 = tmp34875;var inst_34713__$1 = tmp34876;var inst_34714__$1 = inst_34728;var state_34834__$1 = (function (){var statearr_34879 = state_34834;(statearr_34879[14] = inst_34711__$1);
(statearr_34879[15] = inst_34712__$1);
(statearr_34879[16] = inst_34713__$1);
(statearr_34879[17] = inst_34714__$1);
(statearr_34879[27] = inst_34727);
return statearr_34879;
})();var statearr_34880_34951 = state_34834__$1;(statearr_34880_34951[2] = null);
(statearr_34880_34951[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 16))
{var inst_34731 = (state_34834[25]);var inst_34733 = cljs.core.chunked_seq_QMARK_.call(null,inst_34731);var state_34834__$1 = state_34834;if(inst_34733)
{var statearr_34881_34952 = state_34834__$1;(statearr_34881_34952[1] = 19);
} else
{var statearr_34882_34953 = state_34834__$1;(statearr_34882_34953[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 17))
{var state_34834__$1 = state_34834;var statearr_34883_34954 = state_34834__$1;(statearr_34883_34954[2] = null);
(statearr_34883_34954[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 18))
{var inst_34755 = (state_34834[2]);var state_34834__$1 = state_34834;var statearr_34884_34955 = state_34834__$1;(statearr_34884_34955[2] = inst_34755);
(statearr_34884_34955[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 19))
{var inst_34731 = (state_34834[25]);var inst_34735 = cljs.core.chunk_first.call(null,inst_34731);var inst_34736 = cljs.core.chunk_rest.call(null,inst_34731);var inst_34737 = cljs.core.count.call(null,inst_34735);var inst_34711 = inst_34736;var inst_34712 = inst_34735;var inst_34713 = inst_34737;var inst_34714 = 0;var state_34834__$1 = (function (){var statearr_34885 = state_34834;(statearr_34885[14] = inst_34711);
(statearr_34885[15] = inst_34712);
(statearr_34885[16] = inst_34713);
(statearr_34885[17] = inst_34714);
return statearr_34885;
})();var statearr_34886_34956 = state_34834__$1;(statearr_34886_34956[2] = null);
(statearr_34886_34956[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 20))
{var inst_34731 = (state_34834[25]);var inst_34741 = cljs.core.first.call(null,inst_34731);var inst_34742 = cljs.core.nth.call(null,inst_34741,0,null);var inst_34743 = cljs.core.nth.call(null,inst_34741,1,null);var state_34834__$1 = (function (){var statearr_34887 = state_34834;(statearr_34887[28] = inst_34742);
return statearr_34887;
})();if(cljs.core.truth_(inst_34743))
{var statearr_34888_34957 = state_34834__$1;(statearr_34888_34957[1] = 22);
} else
{var statearr_34889_34958 = state_34834__$1;(statearr_34889_34958[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 21))
{var inst_34752 = (state_34834[2]);var state_34834__$1 = state_34834;var statearr_34890_34959 = state_34834__$1;(statearr_34890_34959[2] = inst_34752);
(statearr_34890_34959[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 22))
{var inst_34742 = (state_34834[28]);var inst_34745 = cljs.core.async.close_BANG_.call(null,inst_34742);var state_34834__$1 = state_34834;var statearr_34891_34960 = state_34834__$1;(statearr_34891_34960[2] = inst_34745);
(statearr_34891_34960[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 23))
{var state_34834__$1 = state_34834;var statearr_34892_34961 = state_34834__$1;(statearr_34892_34961[2] = null);
(statearr_34892_34961[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 24))
{var inst_34731 = (state_34834[25]);var inst_34748 = (state_34834[2]);var inst_34749 = cljs.core.next.call(null,inst_34731);var inst_34711 = inst_34749;var inst_34712 = null;var inst_34713 = 0;var inst_34714 = 0;var state_34834__$1 = (function (){var statearr_34893 = state_34834;(statearr_34893[29] = inst_34748);
(statearr_34893[14] = inst_34711);
(statearr_34893[15] = inst_34712);
(statearr_34893[16] = inst_34713);
(statearr_34893[17] = inst_34714);
return statearr_34893;
})();var statearr_34894_34962 = state_34834__$1;(statearr_34894_34962[2] = null);
(statearr_34894_34962[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 25))
{var inst_34773 = (state_34834[10]);var inst_34772 = (state_34834[11]);var inst_34775 = (inst_34773 < inst_34772);var inst_34776 = inst_34775;var state_34834__$1 = state_34834;if(cljs.core.truth_(inst_34776))
{var statearr_34895_34963 = state_34834__$1;(statearr_34895_34963[1] = 27);
} else
{var statearr_34896_34964 = state_34834__$1;(statearr_34896_34964[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 26))
{var inst_34762 = (state_34834[19]);var inst_34820 = (state_34834[2]);var inst_34821 = cljs.core.seq.call(null,inst_34762);var state_34834__$1 = (function (){var statearr_34897 = state_34834;(statearr_34897[30] = inst_34820);
return statearr_34897;
})();if(inst_34821)
{var statearr_34898_34965 = state_34834__$1;(statearr_34898_34965[1] = 42);
} else
{var statearr_34899_34966 = state_34834__$1;(statearr_34899_34966[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 27))
{var inst_34773 = (state_34834[10]);var inst_34771 = (state_34834[13]);var inst_34778 = cljs.core._nth.call(null,inst_34771,inst_34773);var state_34834__$1 = (function (){var statearr_34900 = state_34834;(statearr_34900[8] = inst_34778);
return statearr_34900;
})();var statearr_34901_34967 = state_34834__$1;(statearr_34901_34967[2] = null);
(statearr_34901_34967[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 28))
{var inst_34770 = (state_34834[12]);var inst_34791 = (state_34834[9]);var inst_34791__$1 = cljs.core.seq.call(null,inst_34770);var state_34834__$1 = (function (){var statearr_34905 = state_34834;(statearr_34905[9] = inst_34791__$1);
return statearr_34905;
})();if(inst_34791__$1)
{var statearr_34906_34968 = state_34834__$1;(statearr_34906_34968[1] = 33);
} else
{var statearr_34907_34969 = state_34834__$1;(statearr_34907_34969[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 29))
{var inst_34818 = (state_34834[2]);var state_34834__$1 = state_34834;var statearr_34908_34970 = state_34834__$1;(statearr_34908_34970[2] = inst_34818);
(statearr_34908_34970[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 30))
{var inst_34773 = (state_34834[10]);var inst_34772 = (state_34834[11]);var inst_34770 = (state_34834[12]);var inst_34771 = (state_34834[13]);var inst_34787 = (state_34834[2]);var inst_34788 = (inst_34773 + 1);var tmp34902 = inst_34772;var tmp34903 = inst_34770;var tmp34904 = inst_34771;var inst_34770__$1 = tmp34903;var inst_34771__$1 = tmp34904;var inst_34772__$1 = tmp34902;var inst_34773__$1 = inst_34788;var state_34834__$1 = (function (){var statearr_34909 = state_34834;(statearr_34909[10] = inst_34773__$1);
(statearr_34909[11] = inst_34772__$1);
(statearr_34909[12] = inst_34770__$1);
(statearr_34909[13] = inst_34771__$1);
(statearr_34909[31] = inst_34787);
return statearr_34909;
})();var statearr_34910_34971 = state_34834__$1;(statearr_34910_34971[2] = null);
(statearr_34910_34971[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34835 === 31))
{var inst_34778 = (state_34834[8]);var inst_34779 = (state_34834[2]);var inst_34780 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_34781 = cljs.core.async.untap_STAR_.call(null,m,inst_34778);var state_34834__$1 = (function (){var statearr_34911 = state_34834;(statearr_34911[32] = inst_34780);
(statearr_34911[33] = inst_34779);
return statearr_34911;
})();var statearr_34912_34972 = state_34834__$1;(statearr_34912_34972[2] = inst_34781);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34834__$1);
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
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_34916 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34916[0] = state_machine__5507__auto__);
(statearr_34916[1] = 1);
return statearr_34916;
});
var state_machine__5507__auto____1 = (function (state_34834){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34834);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34917){if((e34917 instanceof Object))
{var ex__5510__auto__ = e34917;var statearr_34918_34973 = state_34834;(statearr_34918_34973[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34834);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34917;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34974 = state_34834;
state_34834 = G__34974;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34834){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34834);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34919 = f__5522__auto__.call(null);(statearr_34919[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34920);
return statearr_34919;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj34976 = {};return obj34976;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3394__auto__ = m;if(and__3394__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4027__auto__ = (((m == null))?null:m);return (function (){var or__3406__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",1120344424),null,new cljs.core.Keyword(null,"mute","mute",1017267595),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",1017440337));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",1017440337),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",1120344424),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1123523302),solos,new cljs.core.Keyword(null,"mutes","mutes",1118168300),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1017267595),chs),new cljs.core.Keyword(null,"reads","reads",1122290959),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",1120344424))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t35086 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35086 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta35087){
this.pick = pick;
this.out = out;
this.attrs = attrs;
this.cs = cs;
this.calc_state = calc_state;
this.solo_modes = solo_modes;
this.mix = mix;
this.changed = changed;
this.change = change;
this.solo_mode = solo_mode;
this.meta35087 = meta35087;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35086.cljs$lang$type = true;
cljs.core.async.t35086.cljs$lang$ctorStr = "cljs.core.async/t35086";
cljs.core.async.t35086.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35086");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35086.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35086.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35086.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35086.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35086.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35086.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35086.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35086.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35086.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35088){var self__ = this;
var _35088__$1 = this;return self__.meta35087;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35086.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35088,meta35087__$1){var self__ = this;
var _35088__$1 = this;return (new cljs.core.async.t35086(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta35087__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35086 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35086(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35087){return (new cljs.core.async.t35086(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35087));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35086(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___35195 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35153){var state_val_35154 = (state_35153[1]);if((state_val_35154 === 1))
{var inst_35092 = (state_35153[7]);var inst_35092__$1 = calc_state.call(null);var inst_35093 = cljs.core.seq_QMARK_.call(null,inst_35092__$1);var state_35153__$1 = (function (){var statearr_35155 = state_35153;(statearr_35155[7] = inst_35092__$1);
return statearr_35155;
})();if(inst_35093)
{var statearr_35156_35196 = state_35153__$1;(statearr_35156_35196[1] = 2);
} else
{var statearr_35157_35197 = state_35153__$1;(statearr_35157_35197[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 2))
{var inst_35092 = (state_35153[7]);var inst_35095 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35092);var state_35153__$1 = state_35153;var statearr_35158_35198 = state_35153__$1;(statearr_35158_35198[2] = inst_35095);
(statearr_35158_35198[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 3))
{var inst_35092 = (state_35153[7]);var state_35153__$1 = state_35153;var statearr_35159_35199 = state_35153__$1;(statearr_35159_35199[2] = inst_35092);
(statearr_35159_35199[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 4))
{var inst_35092 = (state_35153[7]);var inst_35098 = (state_35153[2]);var inst_35099 = cljs.core.get.call(null,inst_35098,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35100 = cljs.core.get.call(null,inst_35098,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35101 = cljs.core.get.call(null,inst_35098,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35102 = inst_35092;var state_35153__$1 = (function (){var statearr_35160 = state_35153;(statearr_35160[8] = inst_35099);
(statearr_35160[9] = inst_35102);
(statearr_35160[10] = inst_35100);
(statearr_35160[11] = inst_35101);
return statearr_35160;
})();var statearr_35161_35200 = state_35153__$1;(statearr_35161_35200[2] = null);
(statearr_35161_35200[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 5))
{var inst_35102 = (state_35153[9]);var inst_35105 = cljs.core.seq_QMARK_.call(null,inst_35102);var state_35153__$1 = state_35153;if(inst_35105)
{var statearr_35162_35201 = state_35153__$1;(statearr_35162_35201[1] = 7);
} else
{var statearr_35163_35202 = state_35153__$1;(statearr_35163_35202[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 6))
{var inst_35151 = (state_35153[2]);var state_35153__$1 = state_35153;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35153__$1,inst_35151);
} else
{if((state_val_35154 === 7))
{var inst_35102 = (state_35153[9]);var inst_35107 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35102);var state_35153__$1 = state_35153;var statearr_35164_35203 = state_35153__$1;(statearr_35164_35203[2] = inst_35107);
(statearr_35164_35203[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 8))
{var inst_35102 = (state_35153[9]);var state_35153__$1 = state_35153;var statearr_35165_35204 = state_35153__$1;(statearr_35165_35204[2] = inst_35102);
(statearr_35165_35204[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 9))
{var inst_35110 = (state_35153[12]);var inst_35110__$1 = (state_35153[2]);var inst_35111 = cljs.core.get.call(null,inst_35110__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35112 = cljs.core.get.call(null,inst_35110__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35113 = cljs.core.get.call(null,inst_35110__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35153__$1 = (function (){var statearr_35166 = state_35153;(statearr_35166[13] = inst_35112);
(statearr_35166[12] = inst_35110__$1);
(statearr_35166[14] = inst_35113);
return statearr_35166;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35153__$1,10,inst_35111);
} else
{if((state_val_35154 === 10))
{var inst_35117 = (state_35153[15]);var inst_35118 = (state_35153[16]);var inst_35116 = (state_35153[2]);var inst_35117__$1 = cljs.core.nth.call(null,inst_35116,0,null);var inst_35118__$1 = cljs.core.nth.call(null,inst_35116,1,null);var inst_35119 = (inst_35117__$1 == null);var inst_35120 = cljs.core._EQ_.call(null,inst_35118__$1,change);var inst_35121 = (inst_35119) || (inst_35120);var state_35153__$1 = (function (){var statearr_35167 = state_35153;(statearr_35167[15] = inst_35117__$1);
(statearr_35167[16] = inst_35118__$1);
return statearr_35167;
})();if(cljs.core.truth_(inst_35121))
{var statearr_35168_35205 = state_35153__$1;(statearr_35168_35205[1] = 11);
} else
{var statearr_35169_35206 = state_35153__$1;(statearr_35169_35206[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 11))
{var inst_35117 = (state_35153[15]);var inst_35123 = (inst_35117 == null);var state_35153__$1 = state_35153;if(cljs.core.truth_(inst_35123))
{var statearr_35170_35207 = state_35153__$1;(statearr_35170_35207[1] = 14);
} else
{var statearr_35171_35208 = state_35153__$1;(statearr_35171_35208[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 12))
{var inst_35132 = (state_35153[17]);var inst_35118 = (state_35153[16]);var inst_35113 = (state_35153[14]);var inst_35132__$1 = inst_35113.call(null,inst_35118);var state_35153__$1 = (function (){var statearr_35172 = state_35153;(statearr_35172[17] = inst_35132__$1);
return statearr_35172;
})();if(cljs.core.truth_(inst_35132__$1))
{var statearr_35173_35209 = state_35153__$1;(statearr_35173_35209[1] = 17);
} else
{var statearr_35174_35210 = state_35153__$1;(statearr_35174_35210[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 13))
{var inst_35149 = (state_35153[2]);var state_35153__$1 = state_35153;var statearr_35175_35211 = state_35153__$1;(statearr_35175_35211[2] = inst_35149);
(statearr_35175_35211[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 14))
{var inst_35118 = (state_35153[16]);var inst_35125 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35118);var state_35153__$1 = state_35153;var statearr_35176_35212 = state_35153__$1;(statearr_35176_35212[2] = inst_35125);
(statearr_35176_35212[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 15))
{var state_35153__$1 = state_35153;var statearr_35177_35213 = state_35153__$1;(statearr_35177_35213[2] = null);
(statearr_35177_35213[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 16))
{var inst_35128 = (state_35153[2]);var inst_35129 = calc_state.call(null);var inst_35102 = inst_35129;var state_35153__$1 = (function (){var statearr_35178 = state_35153;(statearr_35178[9] = inst_35102);
(statearr_35178[18] = inst_35128);
return statearr_35178;
})();var statearr_35179_35214 = state_35153__$1;(statearr_35179_35214[2] = null);
(statearr_35179_35214[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 17))
{var inst_35132 = (state_35153[17]);var state_35153__$1 = state_35153;var statearr_35180_35215 = state_35153__$1;(statearr_35180_35215[2] = inst_35132);
(statearr_35180_35215[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 18))
{var inst_35112 = (state_35153[13]);var inst_35118 = (state_35153[16]);var inst_35113 = (state_35153[14]);var inst_35135 = cljs.core.empty_QMARK_.call(null,inst_35113);var inst_35136 = inst_35112.call(null,inst_35118);var inst_35137 = cljs.core.not.call(null,inst_35136);var inst_35138 = (inst_35135) && (inst_35137);var state_35153__$1 = state_35153;var statearr_35181_35216 = state_35153__$1;(statearr_35181_35216[2] = inst_35138);
(statearr_35181_35216[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 19))
{var inst_35140 = (state_35153[2]);var state_35153__$1 = state_35153;if(cljs.core.truth_(inst_35140))
{var statearr_35182_35217 = state_35153__$1;(statearr_35182_35217[1] = 20);
} else
{var statearr_35183_35218 = state_35153__$1;(statearr_35183_35218[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 20))
{var inst_35117 = (state_35153[15]);var state_35153__$1 = state_35153;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35153__$1,23,out,inst_35117);
} else
{if((state_val_35154 === 21))
{var state_35153__$1 = state_35153;var statearr_35184_35219 = state_35153__$1;(statearr_35184_35219[2] = null);
(statearr_35184_35219[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 22))
{var inst_35110 = (state_35153[12]);var inst_35146 = (state_35153[2]);var inst_35102 = inst_35110;var state_35153__$1 = (function (){var statearr_35185 = state_35153;(statearr_35185[19] = inst_35146);
(statearr_35185[9] = inst_35102);
return statearr_35185;
})();var statearr_35186_35220 = state_35153__$1;(statearr_35186_35220[2] = null);
(statearr_35186_35220[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35154 === 23))
{var inst_35143 = (state_35153[2]);var state_35153__$1 = state_35153;var statearr_35187_35221 = state_35153__$1;(statearr_35187_35221[2] = inst_35143);
(statearr_35187_35221[1] = 22);
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
}
}
}
}
}
}
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35191 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35191[0] = state_machine__5507__auto__);
(statearr_35191[1] = 1);
return statearr_35191;
});
var state_machine__5507__auto____1 = (function (state_35153){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35153);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35192){if((e35192 instanceof Object))
{var ex__5510__auto__ = e35192;var statearr_35193_35222 = state_35153;(statearr_35193_35222[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35153);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35192;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35223 = state_35153;
state_35153 = G__35223;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35153){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35153);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35194 = f__5522__auto__.call(null);(statearr_35194[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35195);
return statearr_35194;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj35225 = {};return obj35225;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3394__auto__ = p;if(and__3394__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3394__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4027__auto__ = (((p == null))?null:p);return (function (){var or__3406__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4027__auto__)]);if(or__3406__auto__)
{return or__3406__auto__;
} else
{var or__3406__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3406__auto____$1)
{return or__3406__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Items received when there are no matching subs get dropped.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3406__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3406__auto__,mults){
return (function (p1__35226_SHARP_){if(cljs.core.truth_(p1__35226_SHARP_.call(null,topic)))
{return p1__35226_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__35226_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t35351 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35351 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta35352){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta35352 = meta35352;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35351.cljs$lang$type = true;
cljs.core.async.t35351.cljs$lang$ctorStr = "cljs.core.async/t35351";
cljs.core.async.t35351.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35351");
});})(mults,ensure_mult))
;
cljs.core.async.t35351.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t35351.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t35351.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t35351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t35351.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t35351.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35351.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t35351.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35353){var self__ = this;
var _35353__$1 = this;return self__.meta35352;
});})(mults,ensure_mult))
;
cljs.core.async.t35351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35353,meta35352__$1){var self__ = this;
var _35353__$1 = this;return (new cljs.core.async.t35351(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta35352__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t35351 = ((function (mults,ensure_mult){
return (function __GT_t35351(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35352){return (new cljs.core.async.t35351(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta35352));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t35351(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___35475 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35427){var state_val_35428 = (state_35427[1]);if((state_val_35428 === 1))
{var state_35427__$1 = state_35427;var statearr_35429_35476 = state_35427__$1;(statearr_35429_35476[2] = null);
(statearr_35429_35476[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 2))
{var state_35427__$1 = state_35427;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35427__$1,4,ch);
} else
{if((state_val_35428 === 3))
{var inst_35425 = (state_35427[2]);var state_35427__$1 = state_35427;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35427__$1,inst_35425);
} else
{if((state_val_35428 === 4))
{var inst_35356 = (state_35427[7]);var inst_35356__$1 = (state_35427[2]);var inst_35357 = (inst_35356__$1 == null);var state_35427__$1 = (function (){var statearr_35430 = state_35427;(statearr_35430[7] = inst_35356__$1);
return statearr_35430;
})();if(cljs.core.truth_(inst_35357))
{var statearr_35431_35477 = state_35427__$1;(statearr_35431_35477[1] = 5);
} else
{var statearr_35432_35478 = state_35427__$1;(statearr_35432_35478[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 5))
{var inst_35363 = cljs.core.deref.call(null,mults);var inst_35364 = cljs.core.vals.call(null,inst_35363);var inst_35365 = cljs.core.seq.call(null,inst_35364);var inst_35366 = inst_35365;var inst_35367 = null;var inst_35368 = 0;var inst_35369 = 0;var state_35427__$1 = (function (){var statearr_35433 = state_35427;(statearr_35433[8] = inst_35369);
(statearr_35433[9] = inst_35368);
(statearr_35433[10] = inst_35367);
(statearr_35433[11] = inst_35366);
return statearr_35433;
})();var statearr_35434_35479 = state_35427__$1;(statearr_35434_35479[2] = null);
(statearr_35434_35479[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 6))
{var inst_35404 = (state_35427[12]);var inst_35406 = (state_35427[13]);var inst_35356 = (state_35427[7]);var inst_35404__$1 = topic_fn.call(null,inst_35356);var inst_35405 = cljs.core.deref.call(null,mults);var inst_35406__$1 = cljs.core.get.call(null,inst_35405,inst_35404__$1);var state_35427__$1 = (function (){var statearr_35435 = state_35427;(statearr_35435[12] = inst_35404__$1);
(statearr_35435[13] = inst_35406__$1);
return statearr_35435;
})();if(cljs.core.truth_(inst_35406__$1))
{var statearr_35436_35480 = state_35427__$1;(statearr_35436_35480[1] = 19);
} else
{var statearr_35437_35481 = state_35427__$1;(statearr_35437_35481[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 7))
{var inst_35423 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35438_35482 = state_35427__$1;(statearr_35438_35482[2] = inst_35423);
(statearr_35438_35482[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 8))
{var inst_35369 = (state_35427[8]);var inst_35368 = (state_35427[9]);var inst_35371 = (inst_35369 < inst_35368);var inst_35372 = inst_35371;var state_35427__$1 = state_35427;if(cljs.core.truth_(inst_35372))
{var statearr_35442_35483 = state_35427__$1;(statearr_35442_35483[1] = 10);
} else
{var statearr_35443_35484 = state_35427__$1;(statearr_35443_35484[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 9))
{var inst_35402 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35444_35485 = state_35427__$1;(statearr_35444_35485[2] = inst_35402);
(statearr_35444_35485[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 10))
{var inst_35369 = (state_35427[8]);var inst_35368 = (state_35427[9]);var inst_35367 = (state_35427[10]);var inst_35366 = (state_35427[11]);var inst_35374 = cljs.core._nth.call(null,inst_35367,inst_35369);var inst_35375 = cljs.core.async.muxch_STAR_.call(null,inst_35374);var inst_35376 = cljs.core.async.close_BANG_.call(null,inst_35375);var inst_35377 = (inst_35369 + 1);var tmp35439 = inst_35368;var tmp35440 = inst_35367;var tmp35441 = inst_35366;var inst_35366__$1 = tmp35441;var inst_35367__$1 = tmp35440;var inst_35368__$1 = tmp35439;var inst_35369__$1 = inst_35377;var state_35427__$1 = (function (){var statearr_35445 = state_35427;(statearr_35445[14] = inst_35376);
(statearr_35445[8] = inst_35369__$1);
(statearr_35445[9] = inst_35368__$1);
(statearr_35445[10] = inst_35367__$1);
(statearr_35445[11] = inst_35366__$1);
return statearr_35445;
})();var statearr_35446_35486 = state_35427__$1;(statearr_35446_35486[2] = null);
(statearr_35446_35486[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 11))
{var inst_35380 = (state_35427[15]);var inst_35366 = (state_35427[11]);var inst_35380__$1 = cljs.core.seq.call(null,inst_35366);var state_35427__$1 = (function (){var statearr_35447 = state_35427;(statearr_35447[15] = inst_35380__$1);
return statearr_35447;
})();if(inst_35380__$1)
{var statearr_35448_35487 = state_35427__$1;(statearr_35448_35487[1] = 13);
} else
{var statearr_35449_35488 = state_35427__$1;(statearr_35449_35488[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 12))
{var inst_35400 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35450_35489 = state_35427__$1;(statearr_35450_35489[2] = inst_35400);
(statearr_35450_35489[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 13))
{var inst_35380 = (state_35427[15]);var inst_35382 = cljs.core.chunked_seq_QMARK_.call(null,inst_35380);var state_35427__$1 = state_35427;if(inst_35382)
{var statearr_35451_35490 = state_35427__$1;(statearr_35451_35490[1] = 16);
} else
{var statearr_35452_35491 = state_35427__$1;(statearr_35452_35491[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 14))
{var state_35427__$1 = state_35427;var statearr_35453_35492 = state_35427__$1;(statearr_35453_35492[2] = null);
(statearr_35453_35492[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 15))
{var inst_35398 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35454_35493 = state_35427__$1;(statearr_35454_35493[2] = inst_35398);
(statearr_35454_35493[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 16))
{var inst_35380 = (state_35427[15]);var inst_35384 = cljs.core.chunk_first.call(null,inst_35380);var inst_35385 = cljs.core.chunk_rest.call(null,inst_35380);var inst_35386 = cljs.core.count.call(null,inst_35384);var inst_35366 = inst_35385;var inst_35367 = inst_35384;var inst_35368 = inst_35386;var inst_35369 = 0;var state_35427__$1 = (function (){var statearr_35455 = state_35427;(statearr_35455[8] = inst_35369);
(statearr_35455[9] = inst_35368);
(statearr_35455[10] = inst_35367);
(statearr_35455[11] = inst_35366);
return statearr_35455;
})();var statearr_35456_35494 = state_35427__$1;(statearr_35456_35494[2] = null);
(statearr_35456_35494[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 17))
{var inst_35380 = (state_35427[15]);var inst_35389 = cljs.core.first.call(null,inst_35380);var inst_35390 = cljs.core.async.muxch_STAR_.call(null,inst_35389);var inst_35391 = cljs.core.async.close_BANG_.call(null,inst_35390);var inst_35392 = cljs.core.next.call(null,inst_35380);var inst_35366 = inst_35392;var inst_35367 = null;var inst_35368 = 0;var inst_35369 = 0;var state_35427__$1 = (function (){var statearr_35457 = state_35427;(statearr_35457[8] = inst_35369);
(statearr_35457[16] = inst_35391);
(statearr_35457[9] = inst_35368);
(statearr_35457[10] = inst_35367);
(statearr_35457[11] = inst_35366);
return statearr_35457;
})();var statearr_35458_35495 = state_35427__$1;(statearr_35458_35495[2] = null);
(statearr_35458_35495[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 18))
{var inst_35395 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35459_35496 = state_35427__$1;(statearr_35459_35496[2] = inst_35395);
(statearr_35459_35496[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 19))
{var state_35427__$1 = state_35427;var statearr_35460_35497 = state_35427__$1;(statearr_35460_35497[2] = null);
(statearr_35460_35497[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 20))
{var state_35427__$1 = state_35427;var statearr_35461_35498 = state_35427__$1;(statearr_35461_35498[2] = null);
(statearr_35461_35498[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 21))
{var inst_35420 = (state_35427[2]);var state_35427__$1 = (function (){var statearr_35462 = state_35427;(statearr_35462[17] = inst_35420);
return statearr_35462;
})();var statearr_35463_35499 = state_35427__$1;(statearr_35463_35499[2] = null);
(statearr_35463_35499[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 22))
{var inst_35417 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35464_35500 = state_35427__$1;(statearr_35464_35500[2] = inst_35417);
(statearr_35464_35500[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 23))
{var inst_35404 = (state_35427[12]);var inst_35408 = (state_35427[2]);var inst_35409 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35404);var state_35427__$1 = (function (){var statearr_35465 = state_35427;(statearr_35465[18] = inst_35408);
return statearr_35465;
})();var statearr_35466_35501 = state_35427__$1;(statearr_35466_35501[2] = inst_35409);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35427__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35428 === 24))
{var inst_35406 = (state_35427[13]);var inst_35356 = (state_35427[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35427,23,Object,null,22);var inst_35413 = cljs.core.async.muxch_STAR_.call(null,inst_35406);var state_35427__$1 = state_35427;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35427__$1,25,inst_35413,inst_35356);
} else
{if((state_val_35428 === 25))
{var inst_35415 = (state_35427[2]);var state_35427__$1 = state_35427;var statearr_35467_35502 = state_35427__$1;(statearr_35467_35502[2] = inst_35415);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35427__$1);
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
}
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
var state_machine__5507__auto____0 = (function (){var statearr_35471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35471[0] = state_machine__5507__auto__);
(statearr_35471[1] = 1);
return statearr_35471;
});
var state_machine__5507__auto____1 = (function (state_35427){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35427);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35472){if((e35472 instanceof Object))
{var ex__5510__auto__ = e35472;var statearr_35473_35503 = state_35427;(statearr_35473_35503[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35427);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35472;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35504 = state_35427;
state_35427 = G__35504;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35427){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35427);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35474 = f__5522__auto__.call(null);(statearr_35474[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35475);
return statearr_35474;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice(0));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__5521__auto___35641 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35611){var state_val_35612 = (state_35611[1]);if((state_val_35612 === 1))
{var state_35611__$1 = state_35611;var statearr_35613_35642 = state_35611__$1;(statearr_35613_35642[2] = null);
(statearr_35613_35642[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 2))
{var inst_35574 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_35575 = 0;var state_35611__$1 = (function (){var statearr_35614 = state_35611;(statearr_35614[7] = inst_35574);
(statearr_35614[8] = inst_35575);
return statearr_35614;
})();var statearr_35615_35643 = state_35611__$1;(statearr_35615_35643[2] = null);
(statearr_35615_35643[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 3))
{var inst_35609 = (state_35611[2]);var state_35611__$1 = state_35611;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35611__$1,inst_35609);
} else
{if((state_val_35612 === 4))
{var inst_35575 = (state_35611[8]);var inst_35577 = (inst_35575 < cnt);var state_35611__$1 = state_35611;if(cljs.core.truth_(inst_35577))
{var statearr_35616_35644 = state_35611__$1;(statearr_35616_35644[1] = 6);
} else
{var statearr_35617_35645 = state_35611__$1;(statearr_35617_35645[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 5))
{var inst_35595 = (state_35611[2]);var state_35611__$1 = (function (){var statearr_35618 = state_35611;(statearr_35618[9] = inst_35595);
return statearr_35618;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35611__$1,12,dchan);
} else
{if((state_val_35612 === 6))
{var state_35611__$1 = state_35611;var statearr_35619_35646 = state_35611__$1;(statearr_35619_35646[2] = null);
(statearr_35619_35646[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 7))
{var state_35611__$1 = state_35611;var statearr_35620_35647 = state_35611__$1;(statearr_35620_35647[2] = null);
(statearr_35620_35647[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 8))
{var inst_35593 = (state_35611[2]);var state_35611__$1 = state_35611;var statearr_35621_35648 = state_35611__$1;(statearr_35621_35648[2] = inst_35593);
(statearr_35621_35648[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 9))
{var inst_35575 = (state_35611[8]);var inst_35588 = (state_35611[2]);var inst_35589 = (inst_35575 + 1);var inst_35575__$1 = inst_35589;var state_35611__$1 = (function (){var statearr_35622 = state_35611;(statearr_35622[10] = inst_35588);
(statearr_35622[8] = inst_35575__$1);
return statearr_35622;
})();var statearr_35623_35649 = state_35611__$1;(statearr_35623_35649[2] = null);
(statearr_35623_35649[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 10))
{var inst_35579 = (state_35611[2]);var inst_35580 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_35611__$1 = (function (){var statearr_35624 = state_35611;(statearr_35624[11] = inst_35579);
return statearr_35624;
})();var statearr_35625_35650 = state_35611__$1;(statearr_35625_35650[2] = inst_35580);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35611__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 11))
{var inst_35575 = (state_35611[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35611,10,Object,null,9);var inst_35584 = chs__$1.call(null,inst_35575);var inst_35585 = done.call(null,inst_35575);var inst_35586 = cljs.core.async.take_BANG_.call(null,inst_35584,inst_35585);var state_35611__$1 = state_35611;var statearr_35626_35651 = state_35611__$1;(statearr_35626_35651[2] = inst_35586);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35611__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 12))
{var inst_35597 = (state_35611[12]);var inst_35597__$1 = (state_35611[2]);var inst_35598 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35597__$1);var state_35611__$1 = (function (){var statearr_35627 = state_35611;(statearr_35627[12] = inst_35597__$1);
return statearr_35627;
})();if(cljs.core.truth_(inst_35598))
{var statearr_35628_35652 = state_35611__$1;(statearr_35628_35652[1] = 13);
} else
{var statearr_35629_35653 = state_35611__$1;(statearr_35629_35653[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 13))
{var inst_35600 = cljs.core.async.close_BANG_.call(null,out);var state_35611__$1 = state_35611;var statearr_35630_35654 = state_35611__$1;(statearr_35630_35654[2] = inst_35600);
(statearr_35630_35654[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 14))
{var inst_35597 = (state_35611[12]);var inst_35602 = cljs.core.apply.call(null,f,inst_35597);var state_35611__$1 = state_35611;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35611__$1,16,out,inst_35602);
} else
{if((state_val_35612 === 15))
{var inst_35607 = (state_35611[2]);var state_35611__$1 = state_35611;var statearr_35631_35655 = state_35611__$1;(statearr_35631_35655[2] = inst_35607);
(statearr_35631_35655[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35612 === 16))
{var inst_35604 = (state_35611[2]);var state_35611__$1 = (function (){var statearr_35632 = state_35611;(statearr_35632[13] = inst_35604);
return statearr_35632;
})();var statearr_35633_35656 = state_35611__$1;(statearr_35633_35656[2] = null);
(statearr_35633_35656[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35637 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35637[0] = state_machine__5507__auto__);
(statearr_35637[1] = 1);
return statearr_35637;
});
var state_machine__5507__auto____1 = (function (state_35611){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35611);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35638){if((e35638 instanceof Object))
{var ex__5510__auto__ = e35638;var statearr_35639_35657 = state_35611;(statearr_35639_35657[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35611);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35638;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35658 = state_35611;
state_35611 = G__35658;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35611){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35611);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35640 = f__5522__auto__.call(null);(statearr_35640[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35641);
return statearr_35640;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35766 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35742){var state_val_35743 = (state_35742[1]);if((state_val_35743 === 1))
{var inst_35713 = cljs.core.vec.call(null,chs);var inst_35714 = inst_35713;var state_35742__$1 = (function (){var statearr_35744 = state_35742;(statearr_35744[7] = inst_35714);
return statearr_35744;
})();var statearr_35745_35767 = state_35742__$1;(statearr_35745_35767[2] = null);
(statearr_35745_35767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35743 === 2))
{var inst_35714 = (state_35742[7]);var inst_35716 = cljs.core.count.call(null,inst_35714);var inst_35717 = (inst_35716 > 0);var state_35742__$1 = state_35742;if(cljs.core.truth_(inst_35717))
{var statearr_35746_35768 = state_35742__$1;(statearr_35746_35768[1] = 4);
} else
{var statearr_35747_35769 = state_35742__$1;(statearr_35747_35769[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35743 === 3))
{var inst_35740 = (state_35742[2]);var state_35742__$1 = state_35742;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35742__$1,inst_35740);
} else
{if((state_val_35743 === 4))
{var inst_35714 = (state_35742[7]);var state_35742__$1 = state_35742;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35742__$1,7,inst_35714);
} else
{if((state_val_35743 === 5))
{var inst_35736 = cljs.core.async.close_BANG_.call(null,out);var state_35742__$1 = state_35742;var statearr_35748_35770 = state_35742__$1;(statearr_35748_35770[2] = inst_35736);
(statearr_35748_35770[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35743 === 6))
{var inst_35738 = (state_35742[2]);var state_35742__$1 = state_35742;var statearr_35749_35771 = state_35742__$1;(statearr_35749_35771[2] = inst_35738);
(statearr_35749_35771[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35743 === 7))
{var inst_35722 = (state_35742[8]);var inst_35721 = (state_35742[9]);var inst_35721__$1 = (state_35742[2]);var inst_35722__$1 = cljs.core.nth.call(null,inst_35721__$1,0,null);var inst_35723 = cljs.core.nth.call(null,inst_35721__$1,1,null);var inst_35724 = (inst_35722__$1 == null);var state_35742__$1 = (function (){var statearr_35750 = state_35742;(statearr_35750[8] = inst_35722__$1);
(statearr_35750[10] = inst_35723);
(statearr_35750[9] = inst_35721__$1);
return statearr_35750;
})();if(cljs.core.truth_(inst_35724))
{var statearr_35751_35772 = state_35742__$1;(statearr_35751_35772[1] = 8);
} else
{var statearr_35752_35773 = state_35742__$1;(statearr_35752_35773[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35743 === 8))
{var inst_35722 = (state_35742[8]);var inst_35723 = (state_35742[10]);var inst_35721 = (state_35742[9]);var inst_35714 = (state_35742[7]);var inst_35726 = (function (){var c = inst_35723;var v = inst_35722;var vec__35719 = inst_35721;var cs = inst_35714;return ((function (c,v,vec__35719,cs,inst_35722,inst_35723,inst_35721,inst_35714,state_val_35743){
return (function (p1__35659_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__35659_SHARP_);
});
;})(c,v,vec__35719,cs,inst_35722,inst_35723,inst_35721,inst_35714,state_val_35743))
})();var inst_35727 = cljs.core.filterv.call(null,inst_35726,inst_35714);var inst_35714__$1 = inst_35727;var state_35742__$1 = (function (){var statearr_35753 = state_35742;(statearr_35753[7] = inst_35714__$1);
return statearr_35753;
})();var statearr_35754_35774 = state_35742__$1;(statearr_35754_35774[2] = null);
(statearr_35754_35774[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35743 === 9))
{var inst_35722 = (state_35742[8]);var state_35742__$1 = state_35742;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35742__$1,11,out,inst_35722);
} else
{if((state_val_35743 === 10))
{var inst_35734 = (state_35742[2]);var state_35742__$1 = state_35742;var statearr_35756_35775 = state_35742__$1;(statearr_35756_35775[2] = inst_35734);
(statearr_35756_35775[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35743 === 11))
{var inst_35714 = (state_35742[7]);var inst_35731 = (state_35742[2]);var tmp35755 = inst_35714;var inst_35714__$1 = tmp35755;var state_35742__$1 = (function (){var statearr_35757 = state_35742;(statearr_35757[11] = inst_35731);
(statearr_35757[7] = inst_35714__$1);
return statearr_35757;
})();var statearr_35758_35776 = state_35742__$1;(statearr_35758_35776[2] = null);
(statearr_35758_35776[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35762 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35762[0] = state_machine__5507__auto__);
(statearr_35762[1] = 1);
return statearr_35762;
});
var state_machine__5507__auto____1 = (function (state_35742){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35742);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35763){if((e35763 instanceof Object))
{var ex__5510__auto__ = e35763;var statearr_35764_35777 = state_35742;(statearr_35764_35777[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35742);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35778 = state_35742;
state_35742 = G__35778;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35742){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35742);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35765 = f__5522__auto__.call(null);(statearr_35765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35766);
return statearr_35765;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35871 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35848){var state_val_35849 = (state_35848[1]);if((state_val_35849 === 1))
{var inst_35825 = 0;var state_35848__$1 = (function (){var statearr_35850 = state_35848;(statearr_35850[7] = inst_35825);
return statearr_35850;
})();var statearr_35851_35872 = state_35848__$1;(statearr_35851_35872[2] = null);
(statearr_35851_35872[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35849 === 2))
{var inst_35825 = (state_35848[7]);var inst_35827 = (inst_35825 < n);var state_35848__$1 = state_35848;if(cljs.core.truth_(inst_35827))
{var statearr_35852_35873 = state_35848__$1;(statearr_35852_35873[1] = 4);
} else
{var statearr_35853_35874 = state_35848__$1;(statearr_35853_35874[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35849 === 3))
{var inst_35845 = (state_35848[2]);var inst_35846 = cljs.core.async.close_BANG_.call(null,out);var state_35848__$1 = (function (){var statearr_35854 = state_35848;(statearr_35854[8] = inst_35845);
return statearr_35854;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35848__$1,inst_35846);
} else
{if((state_val_35849 === 4))
{var state_35848__$1 = state_35848;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35848__$1,7,ch);
} else
{if((state_val_35849 === 5))
{var state_35848__$1 = state_35848;var statearr_35855_35875 = state_35848__$1;(statearr_35855_35875[2] = null);
(statearr_35855_35875[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35849 === 6))
{var inst_35843 = (state_35848[2]);var state_35848__$1 = state_35848;var statearr_35856_35876 = state_35848__$1;(statearr_35856_35876[2] = inst_35843);
(statearr_35856_35876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35849 === 7))
{var inst_35830 = (state_35848[9]);var inst_35830__$1 = (state_35848[2]);var inst_35831 = (inst_35830__$1 == null);var inst_35832 = cljs.core.not.call(null,inst_35831);var state_35848__$1 = (function (){var statearr_35857 = state_35848;(statearr_35857[9] = inst_35830__$1);
return statearr_35857;
})();if(inst_35832)
{var statearr_35858_35877 = state_35848__$1;(statearr_35858_35877[1] = 8);
} else
{var statearr_35859_35878 = state_35848__$1;(statearr_35859_35878[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35849 === 8))
{var inst_35830 = (state_35848[9]);var state_35848__$1 = state_35848;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35848__$1,11,out,inst_35830);
} else
{if((state_val_35849 === 9))
{var state_35848__$1 = state_35848;var statearr_35860_35879 = state_35848__$1;(statearr_35860_35879[2] = null);
(statearr_35860_35879[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35849 === 10))
{var inst_35840 = (state_35848[2]);var state_35848__$1 = state_35848;var statearr_35861_35880 = state_35848__$1;(statearr_35861_35880[2] = inst_35840);
(statearr_35861_35880[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35849 === 11))
{var inst_35825 = (state_35848[7]);var inst_35835 = (state_35848[2]);var inst_35836 = (inst_35825 + 1);var inst_35825__$1 = inst_35836;var state_35848__$1 = (function (){var statearr_35862 = state_35848;(statearr_35862[7] = inst_35825__$1);
(statearr_35862[10] = inst_35835);
return statearr_35862;
})();var statearr_35863_35881 = state_35848__$1;(statearr_35863_35881[2] = null);
(statearr_35863_35881[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35867 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35867[0] = state_machine__5507__auto__);
(statearr_35867[1] = 1);
return statearr_35867;
});
var state_machine__5507__auto____1 = (function (state_35848){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35848);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35868){if((e35868 instanceof Object))
{var ex__5510__auto__ = e35868;var statearr_35869_35882 = state_35848;(statearr_35869_35882[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35848);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35868;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35883 = state_35848;
state_35848 = G__35883;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35848){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35848);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35870 = f__5522__auto__.call(null);(statearr_35870[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35871);
return statearr_35870;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35980 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35955){var state_val_35956 = (state_35955[1]);if((state_val_35956 === 1))
{var inst_35932 = null;var state_35955__$1 = (function (){var statearr_35957 = state_35955;(statearr_35957[7] = inst_35932);
return statearr_35957;
})();var statearr_35958_35981 = state_35955__$1;(statearr_35958_35981[2] = null);
(statearr_35958_35981[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35956 === 2))
{var state_35955__$1 = state_35955;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35955__$1,4,ch);
} else
{if((state_val_35956 === 3))
{var inst_35952 = (state_35955[2]);var inst_35953 = cljs.core.async.close_BANG_.call(null,out);var state_35955__$1 = (function (){var statearr_35959 = state_35955;(statearr_35959[8] = inst_35952);
return statearr_35959;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35955__$1,inst_35953);
} else
{if((state_val_35956 === 4))
{var inst_35935 = (state_35955[9]);var inst_35935__$1 = (state_35955[2]);var inst_35936 = (inst_35935__$1 == null);var inst_35937 = cljs.core.not.call(null,inst_35936);var state_35955__$1 = (function (){var statearr_35960 = state_35955;(statearr_35960[9] = inst_35935__$1);
return statearr_35960;
})();if(inst_35937)
{var statearr_35961_35982 = state_35955__$1;(statearr_35961_35982[1] = 5);
} else
{var statearr_35962_35983 = state_35955__$1;(statearr_35962_35983[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35956 === 5))
{var inst_35932 = (state_35955[7]);var inst_35935 = (state_35955[9]);var inst_35939 = cljs.core._EQ_.call(null,inst_35935,inst_35932);var state_35955__$1 = state_35955;if(inst_35939)
{var statearr_35963_35984 = state_35955__$1;(statearr_35963_35984[1] = 8);
} else
{var statearr_35964_35985 = state_35955__$1;(statearr_35964_35985[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35956 === 6))
{var state_35955__$1 = state_35955;var statearr_35966_35986 = state_35955__$1;(statearr_35966_35986[2] = null);
(statearr_35966_35986[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35956 === 7))
{var inst_35950 = (state_35955[2]);var state_35955__$1 = state_35955;var statearr_35967_35987 = state_35955__$1;(statearr_35967_35987[2] = inst_35950);
(statearr_35967_35987[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35956 === 8))
{var inst_35932 = (state_35955[7]);var tmp35965 = inst_35932;var inst_35932__$1 = tmp35965;var state_35955__$1 = (function (){var statearr_35968 = state_35955;(statearr_35968[7] = inst_35932__$1);
return statearr_35968;
})();var statearr_35969_35988 = state_35955__$1;(statearr_35969_35988[2] = null);
(statearr_35969_35988[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35956 === 9))
{var inst_35935 = (state_35955[9]);var state_35955__$1 = state_35955;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35955__$1,11,out,inst_35935);
} else
{if((state_val_35956 === 10))
{var inst_35947 = (state_35955[2]);var state_35955__$1 = state_35955;var statearr_35970_35989 = state_35955__$1;(statearr_35970_35989[2] = inst_35947);
(statearr_35970_35989[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35956 === 11))
{var inst_35935 = (state_35955[9]);var inst_35944 = (state_35955[2]);var inst_35932 = inst_35935;var state_35955__$1 = (function (){var statearr_35971 = state_35955;(statearr_35971[7] = inst_35932);
(statearr_35971[10] = inst_35944);
return statearr_35971;
})();var statearr_35972_35990 = state_35955__$1;(statearr_35972_35990[2] = null);
(statearr_35972_35990[1] = 2);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_35976 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35976[0] = state_machine__5507__auto__);
(statearr_35976[1] = 1);
return statearr_35976;
});
var state_machine__5507__auto____1 = (function (state_35955){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35955);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35977){if((e35977 instanceof Object))
{var ex__5510__auto__ = e35977;var statearr_35978_35991 = state_35955;(statearr_35978_35991[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35955);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35977;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35992 = state_35955;
state_35955 = G__35992;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35955){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35955);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35979 = f__5522__auto__.call(null);(statearr_35979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35980);
return statearr_35979;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36127 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36097){var state_val_36098 = (state_36097[1]);if((state_val_36098 === 1))
{var inst_36060 = (new Array(n));var inst_36061 = inst_36060;var inst_36062 = 0;var state_36097__$1 = (function (){var statearr_36099 = state_36097;(statearr_36099[7] = inst_36062);
(statearr_36099[8] = inst_36061);
return statearr_36099;
})();var statearr_36100_36128 = state_36097__$1;(statearr_36100_36128[2] = null);
(statearr_36100_36128[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 2))
{var state_36097__$1 = state_36097;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36097__$1,4,ch);
} else
{if((state_val_36098 === 3))
{var inst_36095 = (state_36097[2]);var state_36097__$1 = state_36097;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36097__$1,inst_36095);
} else
{if((state_val_36098 === 4))
{var inst_36065 = (state_36097[9]);var inst_36065__$1 = (state_36097[2]);var inst_36066 = (inst_36065__$1 == null);var inst_36067 = cljs.core.not.call(null,inst_36066);var state_36097__$1 = (function (){var statearr_36101 = state_36097;(statearr_36101[9] = inst_36065__$1);
return statearr_36101;
})();if(inst_36067)
{var statearr_36102_36129 = state_36097__$1;(statearr_36102_36129[1] = 5);
} else
{var statearr_36103_36130 = state_36097__$1;(statearr_36103_36130[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 5))
{var inst_36062 = (state_36097[7]);var inst_36065 = (state_36097[9]);var inst_36070 = (state_36097[10]);var inst_36061 = (state_36097[8]);var inst_36069 = (inst_36061[inst_36062] = inst_36065);var inst_36070__$1 = (inst_36062 + 1);var inst_36071 = (inst_36070__$1 < n);var state_36097__$1 = (function (){var statearr_36104 = state_36097;(statearr_36104[11] = inst_36069);
(statearr_36104[10] = inst_36070__$1);
return statearr_36104;
})();if(cljs.core.truth_(inst_36071))
{var statearr_36105_36131 = state_36097__$1;(statearr_36105_36131[1] = 8);
} else
{var statearr_36106_36132 = state_36097__$1;(statearr_36106_36132[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 6))
{var inst_36062 = (state_36097[7]);var inst_36083 = (inst_36062 > 0);var state_36097__$1 = state_36097;if(cljs.core.truth_(inst_36083))
{var statearr_36108_36133 = state_36097__$1;(statearr_36108_36133[1] = 12);
} else
{var statearr_36109_36134 = state_36097__$1;(statearr_36109_36134[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 7))
{var inst_36093 = (state_36097[2]);var state_36097__$1 = state_36097;var statearr_36110_36135 = state_36097__$1;(statearr_36110_36135[2] = inst_36093);
(statearr_36110_36135[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 8))
{var inst_36070 = (state_36097[10]);var inst_36061 = (state_36097[8]);var tmp36107 = inst_36061;var inst_36061__$1 = tmp36107;var inst_36062 = inst_36070;var state_36097__$1 = (function (){var statearr_36111 = state_36097;(statearr_36111[7] = inst_36062);
(statearr_36111[8] = inst_36061__$1);
return statearr_36111;
})();var statearr_36112_36136 = state_36097__$1;(statearr_36112_36136[2] = null);
(statearr_36112_36136[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 9))
{var inst_36061 = (state_36097[8]);var inst_36075 = cljs.core.vec.call(null,inst_36061);var state_36097__$1 = state_36097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36097__$1,11,out,inst_36075);
} else
{if((state_val_36098 === 10))
{var inst_36081 = (state_36097[2]);var state_36097__$1 = state_36097;var statearr_36113_36137 = state_36097__$1;(statearr_36113_36137[2] = inst_36081);
(statearr_36113_36137[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 11))
{var inst_36077 = (state_36097[2]);var inst_36078 = (new Array(n));var inst_36061 = inst_36078;var inst_36062 = 0;var state_36097__$1 = (function (){var statearr_36114 = state_36097;(statearr_36114[7] = inst_36062);
(statearr_36114[12] = inst_36077);
(statearr_36114[8] = inst_36061);
return statearr_36114;
})();var statearr_36115_36138 = state_36097__$1;(statearr_36115_36138[2] = null);
(statearr_36115_36138[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 12))
{var inst_36061 = (state_36097[8]);var inst_36085 = cljs.core.vec.call(null,inst_36061);var state_36097__$1 = state_36097;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36097__$1,15,out,inst_36085);
} else
{if((state_val_36098 === 13))
{var state_36097__$1 = state_36097;var statearr_36116_36139 = state_36097__$1;(statearr_36116_36139[2] = null);
(statearr_36116_36139[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 14))
{var inst_36090 = (state_36097[2]);var inst_36091 = cljs.core.async.close_BANG_.call(null,out);var state_36097__$1 = (function (){var statearr_36117 = state_36097;(statearr_36117[13] = inst_36090);
return statearr_36117;
})();var statearr_36118_36140 = state_36097__$1;(statearr_36118_36140[2] = inst_36091);
(statearr_36118_36140[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36098 === 15))
{var inst_36087 = (state_36097[2]);var state_36097__$1 = state_36097;var statearr_36119_36141 = state_36097__$1;(statearr_36119_36141[2] = inst_36087);
(statearr_36119_36141[1] = 14);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36123 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36123[0] = state_machine__5507__auto__);
(statearr_36123[1] = 1);
return statearr_36123;
});
var state_machine__5507__auto____1 = (function (state_36097){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36097);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36124){if((e36124 instanceof Object))
{var ex__5510__auto__ = e36124;var statearr_36125_36142 = state_36097;(statearr_36125_36142[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36097);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36124;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36143 = state_36097;
state_36097 = G__36143;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36097){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36126 = f__5522__auto__.call(null);(statearr_36126[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36127);
return statearr_36126;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36286 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36256){var state_val_36257 = (state_36256[1]);if((state_val_36257 === 1))
{var inst_36215 = [];var inst_36216 = inst_36215;var inst_36217 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_36256__$1 = (function (){var statearr_36258 = state_36256;(statearr_36258[7] = inst_36217);
(statearr_36258[8] = inst_36216);
return statearr_36258;
})();var statearr_36259_36287 = state_36256__$1;(statearr_36259_36287[2] = null);
(statearr_36259_36287[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 2))
{var state_36256__$1 = state_36256;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36256__$1,4,ch);
} else
{if((state_val_36257 === 3))
{var inst_36254 = (state_36256[2]);var state_36256__$1 = state_36256;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36256__$1,inst_36254);
} else
{if((state_val_36257 === 4))
{var inst_36220 = (state_36256[9]);var inst_36220__$1 = (state_36256[2]);var inst_36221 = (inst_36220__$1 == null);var inst_36222 = cljs.core.not.call(null,inst_36221);var state_36256__$1 = (function (){var statearr_36260 = state_36256;(statearr_36260[9] = inst_36220__$1);
return statearr_36260;
})();if(inst_36222)
{var statearr_36261_36288 = state_36256__$1;(statearr_36261_36288[1] = 5);
} else
{var statearr_36262_36289 = state_36256__$1;(statearr_36262_36289[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 5))
{var inst_36220 = (state_36256[9]);var inst_36217 = (state_36256[7]);var inst_36224 = (state_36256[10]);var inst_36224__$1 = f.call(null,inst_36220);var inst_36225 = cljs.core._EQ_.call(null,inst_36224__$1,inst_36217);var inst_36226 = cljs.core.keyword_identical_QMARK_.call(null,inst_36217,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_36227 = (inst_36225) || (inst_36226);var state_36256__$1 = (function (){var statearr_36263 = state_36256;(statearr_36263[10] = inst_36224__$1);
return statearr_36263;
})();if(cljs.core.truth_(inst_36227))
{var statearr_36264_36290 = state_36256__$1;(statearr_36264_36290[1] = 8);
} else
{var statearr_36265_36291 = state_36256__$1;(statearr_36265_36291[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 6))
{var inst_36216 = (state_36256[8]);var inst_36241 = inst_36216.length;var inst_36242 = (inst_36241 > 0);var state_36256__$1 = state_36256;if(cljs.core.truth_(inst_36242))
{var statearr_36267_36292 = state_36256__$1;(statearr_36267_36292[1] = 12);
} else
{var statearr_36268_36293 = state_36256__$1;(statearr_36268_36293[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 7))
{var inst_36252 = (state_36256[2]);var state_36256__$1 = state_36256;var statearr_36269_36294 = state_36256__$1;(statearr_36269_36294[2] = inst_36252);
(statearr_36269_36294[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 8))
{var inst_36220 = (state_36256[9]);var inst_36224 = (state_36256[10]);var inst_36216 = (state_36256[8]);var inst_36229 = inst_36216.push(inst_36220);var tmp36266 = inst_36216;var inst_36216__$1 = tmp36266;var inst_36217 = inst_36224;var state_36256__$1 = (function (){var statearr_36270 = state_36256;(statearr_36270[11] = inst_36229);
(statearr_36270[7] = inst_36217);
(statearr_36270[8] = inst_36216__$1);
return statearr_36270;
})();var statearr_36271_36295 = state_36256__$1;(statearr_36271_36295[2] = null);
(statearr_36271_36295[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 9))
{var inst_36216 = (state_36256[8]);var inst_36232 = cljs.core.vec.call(null,inst_36216);var state_36256__$1 = state_36256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36256__$1,11,out,inst_36232);
} else
{if((state_val_36257 === 10))
{var inst_36239 = (state_36256[2]);var state_36256__$1 = state_36256;var statearr_36272_36296 = state_36256__$1;(statearr_36272_36296[2] = inst_36239);
(statearr_36272_36296[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 11))
{var inst_36220 = (state_36256[9]);var inst_36224 = (state_36256[10]);var inst_36234 = (state_36256[2]);var inst_36235 = [];var inst_36236 = inst_36235.push(inst_36220);var inst_36216 = inst_36235;var inst_36217 = inst_36224;var state_36256__$1 = (function (){var statearr_36273 = state_36256;(statearr_36273[12] = inst_36236);
(statearr_36273[13] = inst_36234);
(statearr_36273[7] = inst_36217);
(statearr_36273[8] = inst_36216);
return statearr_36273;
})();var statearr_36274_36297 = state_36256__$1;(statearr_36274_36297[2] = null);
(statearr_36274_36297[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 12))
{var inst_36216 = (state_36256[8]);var inst_36244 = cljs.core.vec.call(null,inst_36216);var state_36256__$1 = state_36256;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36256__$1,15,out,inst_36244);
} else
{if((state_val_36257 === 13))
{var state_36256__$1 = state_36256;var statearr_36275_36298 = state_36256__$1;(statearr_36275_36298[2] = null);
(statearr_36275_36298[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 14))
{var inst_36249 = (state_36256[2]);var inst_36250 = cljs.core.async.close_BANG_.call(null,out);var state_36256__$1 = (function (){var statearr_36276 = state_36256;(statearr_36276[14] = inst_36249);
return statearr_36276;
})();var statearr_36277_36299 = state_36256__$1;(statearr_36277_36299[2] = inst_36250);
(statearr_36277_36299[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36257 === 15))
{var inst_36246 = (state_36256[2]);var state_36256__$1 = state_36256;var statearr_36278_36300 = state_36256__$1;(statearr_36278_36300[2] = inst_36246);
(statearr_36278_36300[1] = 14);
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
});return ((function (switch__5506__auto__){
return (function() {
var state_machine__5507__auto__ = null;
var state_machine__5507__auto____0 = (function (){var statearr_36282 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36282[0] = state_machine__5507__auto__);
(statearr_36282[1] = 1);
return statearr_36282;
});
var state_machine__5507__auto____1 = (function (state_36256){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36256);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36283){if((e36283 instanceof Object))
{var ex__5510__auto__ = e36283;var statearr_36284_36301 = state_36256;(statearr_36284_36301[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36256);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36283;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36302 = state_36256;
state_36256 = G__36302;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36256){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36256);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36285 = f__5522__auto__.call(null);(statearr_36285[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36286);
return statearr_36285;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__5523__auto__);
}));
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

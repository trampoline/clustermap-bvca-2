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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t32809 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32809 = (function (f,fn_handler,meta32810){
this.f = f;
this.fn_handler = fn_handler;
this.meta32810 = meta32810;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32809.cljs$lang$type = true;
cljs.core.async.t32809.cljs$lang$ctorStr = "cljs.core.async/t32809";
cljs.core.async.t32809.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32809");
});
cljs.core.async.t32809.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32809.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t32809.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t32809.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32811){var self__ = this;
var _32811__$1 = this;return self__.meta32810;
});
cljs.core.async.t32809.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32811,meta32810__$1){var self__ = this;
var _32811__$1 = this;return (new cljs.core.async.t32809(self__.f,self__.fn_handler,meta32810__$1));
});
cljs.core.async.__GT_t32809 = (function __GT_t32809(f__$1,fn_handler__$1,meta32810){return (new cljs.core.async.t32809(f__$1,fn_handler__$1,meta32810));
});
}
return (new cljs.core.async.t32809(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__32813 = buff;if(G__32813)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__32813.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__32813.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32813);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__32813);
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
{var val_32814 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_32814);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_32814);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___32815 = n;var x_32816 = 0;while(true){
if((x_32816 < n__4248__auto___32815))
{(a[x_32816] = 0);
{
var G__32817 = (x_32816 + 1);
x_32816 = G__32817;
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
var G__32818 = (i + 1);
i = G__32818;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t32822 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32822 = (function (flag,alt_flag,meta32823){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta32823 = meta32823;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32822.cljs$lang$type = true;
cljs.core.async.t32822.cljs$lang$ctorStr = "cljs.core.async/t32822";
cljs.core.async.t32822.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32822");
});
cljs.core.async.t32822.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32822.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t32822.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t32822.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32824){var self__ = this;
var _32824__$1 = this;return self__.meta32823;
});
cljs.core.async.t32822.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32824,meta32823__$1){var self__ = this;
var _32824__$1 = this;return (new cljs.core.async.t32822(self__.flag,self__.alt_flag,meta32823__$1));
});
cljs.core.async.__GT_t32822 = (function __GT_t32822(flag__$1,alt_flag__$1,meta32823){return (new cljs.core.async.t32822(flag__$1,alt_flag__$1,meta32823));
});
}
return (new cljs.core.async.t32822(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t32828 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32828 = (function (cb,flag,alt_handler,meta32829){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta32829 = meta32829;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32828.cljs$lang$type = true;
cljs.core.async.t32828.cljs$lang$ctorStr = "cljs.core.async/t32828";
cljs.core.async.t32828.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32828");
});
cljs.core.async.t32828.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32828.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t32828.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t32828.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32830){var self__ = this;
var _32830__$1 = this;return self__.meta32829;
});
cljs.core.async.t32828.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32830,meta32829__$1){var self__ = this;
var _32830__$1 = this;return (new cljs.core.async.t32828(self__.cb,self__.flag,self__.alt_handler,meta32829__$1));
});
cljs.core.async.__GT_t32828 = (function __GT_t32828(cb__$1,flag__$1,alt_handler__$1,meta32829){return (new cljs.core.async.t32828(cb__$1,flag__$1,alt_handler__$1,meta32829));
});
}
return (new cljs.core.async.t32828(cb,flag,alt_handler,null));
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
return (function (p1__32831_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__32831_SHARP_,port], null));
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
var G__32832 = (i + 1);
i = G__32832;
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
var alts_BANG___delegate = function (ports,p__32833){var map__32835 = p__32833;var map__32835__$1 = ((cljs.core.seq_QMARK_.call(null,map__32835))?cljs.core.apply.call(null,cljs.core.hash_map,map__32835):map__32835);var opts = map__32835__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__32833 = null;if (arguments.length > 1) {
  p__32833 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__32833);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__32836){
var ports = cljs.core.first(arglist__32836);
var p__32833 = cljs.core.rest(arglist__32836);
return alts_BANG___delegate(ports,p__32833);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t32844 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32844 = (function (ch,f,map_LT_,meta32845){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32845 = meta32845;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32844.cljs$lang$type = true;
cljs.core.async.t32844.cljs$lang$ctorStr = "cljs.core.async/t32844";
cljs.core.async.t32844.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32844");
});
cljs.core.async.t32844.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32844.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t32844.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32844.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t32847 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32847 = (function (fn1,_,meta32845,ch,f,map_LT_,meta32848){
this.fn1 = fn1;
this._ = _;
this.meta32845 = meta32845;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta32848 = meta32848;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32847.cljs$lang$type = true;
cljs.core.async.t32847.cljs$lang$ctorStr = "cljs.core.async/t32847";
cljs.core.async.t32847.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32847");
});
cljs.core.async.t32847.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t32847.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t32847.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t32847.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__32837_SHARP_){return f1.call(null,(((p1__32837_SHARP_ == null))?null:self__.f.call(null,p1__32837_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t32847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32849){var self__ = this;
var _32849__$1 = this;return self__.meta32848;
});
cljs.core.async.t32847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32849,meta32848__$1){var self__ = this;
var _32849__$1 = this;return (new cljs.core.async.t32847(self__.fn1,self__._,self__.meta32845,self__.ch,self__.f,self__.map_LT_,meta32848__$1));
});
cljs.core.async.__GT_t32847 = (function __GT_t32847(fn1__$1,___$2,meta32845__$1,ch__$2,f__$2,map_LT___$2,meta32848){return (new cljs.core.async.t32847(fn1__$1,___$2,meta32845__$1,ch__$2,f__$2,map_LT___$2,meta32848));
});
}
return (new cljs.core.async.t32847(fn1,___$1,self__.meta32845,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t32844.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32844.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32844.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32846){var self__ = this;
var _32846__$1 = this;return self__.meta32845;
});
cljs.core.async.t32844.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32846,meta32845__$1){var self__ = this;
var _32846__$1 = this;return (new cljs.core.async.t32844(self__.ch,self__.f,self__.map_LT_,meta32845__$1));
});
cljs.core.async.__GT_t32844 = (function __GT_t32844(ch__$1,f__$1,map_LT___$1,meta32845){return (new cljs.core.async.t32844(ch__$1,f__$1,map_LT___$1,meta32845));
});
}
return (new cljs.core.async.t32844(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t32853 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32853 = (function (ch,f,map_GT_,meta32854){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta32854 = meta32854;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32853.cljs$lang$type = true;
cljs.core.async.t32853.cljs$lang$ctorStr = "cljs.core.async/t32853";
cljs.core.async.t32853.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32853");
});
cljs.core.async.t32853.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32853.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t32853.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32853.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32853.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32853.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32855){var self__ = this;
var _32855__$1 = this;return self__.meta32854;
});
cljs.core.async.t32853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32855,meta32854__$1){var self__ = this;
var _32855__$1 = this;return (new cljs.core.async.t32853(self__.ch,self__.f,self__.map_GT_,meta32854__$1));
});
cljs.core.async.__GT_t32853 = (function __GT_t32853(ch__$1,f__$1,map_GT___$1,meta32854){return (new cljs.core.async.t32853(ch__$1,f__$1,map_GT___$1,meta32854));
});
}
return (new cljs.core.async.t32853(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t32859 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t32859 = (function (ch,p,filter_GT_,meta32860){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta32860 = meta32860;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t32859.cljs$lang$type = true;
cljs.core.async.t32859.cljs$lang$ctorStr = "cljs.core.async/t32859";
cljs.core.async.t32859.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t32859");
});
cljs.core.async.t32859.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t32859.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t32859.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t32859.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t32859.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t32859.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t32859.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32861){var self__ = this;
var _32861__$1 = this;return self__.meta32860;
});
cljs.core.async.t32859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32861,meta32860__$1){var self__ = this;
var _32861__$1 = this;return (new cljs.core.async.t32859(self__.ch,self__.p,self__.filter_GT_,meta32860__$1));
});
cljs.core.async.__GT_t32859 = (function __GT_t32859(ch__$1,p__$1,filter_GT___$1,meta32860){return (new cljs.core.async.t32859(ch__$1,p__$1,filter_GT___$1,meta32860));
});
}
return (new cljs.core.async.t32859(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___32944 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_32923){var state_val_32924 = (state_32923[1]);if((state_val_32924 === 1))
{var state_32923__$1 = state_32923;var statearr_32925_32945 = state_32923__$1;(statearr_32925_32945[2] = null);
(statearr_32925_32945[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32924 === 2))
{var state_32923__$1 = state_32923;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32923__$1,4,ch);
} else
{if((state_val_32924 === 3))
{var inst_32921 = (state_32923[2]);var state_32923__$1 = state_32923;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32923__$1,inst_32921);
} else
{if((state_val_32924 === 4))
{var inst_32905 = (state_32923[7]);var inst_32905__$1 = (state_32923[2]);var inst_32906 = (inst_32905__$1 == null);var state_32923__$1 = (function (){var statearr_32926 = state_32923;(statearr_32926[7] = inst_32905__$1);
return statearr_32926;
})();if(cljs.core.truth_(inst_32906))
{var statearr_32927_32946 = state_32923__$1;(statearr_32927_32946[1] = 5);
} else
{var statearr_32928_32947 = state_32923__$1;(statearr_32928_32947[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32924 === 5))
{var inst_32908 = cljs.core.async.close_BANG_.call(null,out);var state_32923__$1 = state_32923;var statearr_32929_32948 = state_32923__$1;(statearr_32929_32948[2] = inst_32908);
(statearr_32929_32948[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32924 === 6))
{var inst_32905 = (state_32923[7]);var inst_32910 = p.call(null,inst_32905);var state_32923__$1 = state_32923;if(cljs.core.truth_(inst_32910))
{var statearr_32930_32949 = state_32923__$1;(statearr_32930_32949[1] = 8);
} else
{var statearr_32931_32950 = state_32923__$1;(statearr_32931_32950[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32924 === 7))
{var inst_32919 = (state_32923[2]);var state_32923__$1 = state_32923;var statearr_32932_32951 = state_32923__$1;(statearr_32932_32951[2] = inst_32919);
(statearr_32932_32951[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32924 === 8))
{var inst_32905 = (state_32923[7]);var state_32923__$1 = state_32923;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_32923__$1,11,out,inst_32905);
} else
{if((state_val_32924 === 9))
{var state_32923__$1 = state_32923;var statearr_32933_32952 = state_32923__$1;(statearr_32933_32952[2] = null);
(statearr_32933_32952[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32924 === 10))
{var inst_32916 = (state_32923[2]);var state_32923__$1 = (function (){var statearr_32934 = state_32923;(statearr_32934[8] = inst_32916);
return statearr_32934;
})();var statearr_32935_32953 = state_32923__$1;(statearr_32935_32953[2] = null);
(statearr_32935_32953[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_32924 === 11))
{var inst_32913 = (state_32923[2]);var state_32923__$1 = state_32923;var statearr_32936_32954 = state_32923__$1;(statearr_32936_32954[2] = inst_32913);
(statearr_32936_32954[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_32940 = [null,null,null,null,null,null,null,null,null];(statearr_32940[0] = state_machine__5507__auto__);
(statearr_32940[1] = 1);
return statearr_32940;
});
var state_machine__5507__auto____1 = (function (state_32923){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_32923);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e32941){if((e32941 instanceof Object))
{var ex__5510__auto__ = e32941;var statearr_32942_32955 = state_32923;(statearr_32942_32955[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32923);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e32941;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__32956 = state_32923;
state_32923 = G__32956;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_32923){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_32923);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_32943 = f__5522__auto__.call(null);(statearr_32943[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___32944);
return statearr_32943;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33108){var state_val_33109 = (state_33108[1]);if((state_val_33109 === 1))
{var state_33108__$1 = state_33108;var statearr_33110_33147 = state_33108__$1;(statearr_33110_33147[2] = null);
(statearr_33110_33147[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 2))
{var state_33108__$1 = state_33108;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33108__$1,4,in$);
} else
{if((state_val_33109 === 3))
{var inst_33106 = (state_33108[2]);var state_33108__$1 = state_33108;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33108__$1,inst_33106);
} else
{if((state_val_33109 === 4))
{var inst_33054 = (state_33108[7]);var inst_33054__$1 = (state_33108[2]);var inst_33055 = (inst_33054__$1 == null);var state_33108__$1 = (function (){var statearr_33111 = state_33108;(statearr_33111[7] = inst_33054__$1);
return statearr_33111;
})();if(cljs.core.truth_(inst_33055))
{var statearr_33112_33148 = state_33108__$1;(statearr_33112_33148[1] = 5);
} else
{var statearr_33113_33149 = state_33108__$1;(statearr_33113_33149[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 5))
{var inst_33057 = cljs.core.async.close_BANG_.call(null,out);var state_33108__$1 = state_33108;var statearr_33114_33150 = state_33108__$1;(statearr_33114_33150[2] = inst_33057);
(statearr_33114_33150[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 6))
{var inst_33054 = (state_33108[7]);var inst_33059 = f.call(null,inst_33054);var inst_33064 = cljs.core.seq.call(null,inst_33059);var inst_33065 = inst_33064;var inst_33066 = null;var inst_33067 = 0;var inst_33068 = 0;var state_33108__$1 = (function (){var statearr_33115 = state_33108;(statearr_33115[8] = inst_33068);
(statearr_33115[9] = inst_33067);
(statearr_33115[10] = inst_33065);
(statearr_33115[11] = inst_33066);
return statearr_33115;
})();var statearr_33116_33151 = state_33108__$1;(statearr_33116_33151[2] = null);
(statearr_33116_33151[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 7))
{var inst_33104 = (state_33108[2]);var state_33108__$1 = state_33108;var statearr_33117_33152 = state_33108__$1;(statearr_33117_33152[2] = inst_33104);
(statearr_33117_33152[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 8))
{var inst_33068 = (state_33108[8]);var inst_33067 = (state_33108[9]);var inst_33070 = (inst_33068 < inst_33067);var inst_33071 = inst_33070;var state_33108__$1 = state_33108;if(cljs.core.truth_(inst_33071))
{var statearr_33118_33153 = state_33108__$1;(statearr_33118_33153[1] = 10);
} else
{var statearr_33119_33154 = state_33108__$1;(statearr_33119_33154[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 9))
{var inst_33101 = (state_33108[2]);var state_33108__$1 = (function (){var statearr_33120 = state_33108;(statearr_33120[12] = inst_33101);
return statearr_33120;
})();var statearr_33121_33155 = state_33108__$1;(statearr_33121_33155[2] = null);
(statearr_33121_33155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 10))
{var inst_33068 = (state_33108[8]);var inst_33066 = (state_33108[11]);var inst_33073 = cljs.core._nth.call(null,inst_33066,inst_33068);var state_33108__$1 = state_33108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33108__$1,13,out,inst_33073);
} else
{if((state_val_33109 === 11))
{var inst_33079 = (state_33108[13]);var inst_33065 = (state_33108[10]);var inst_33079__$1 = cljs.core.seq.call(null,inst_33065);var state_33108__$1 = (function (){var statearr_33125 = state_33108;(statearr_33125[13] = inst_33079__$1);
return statearr_33125;
})();if(inst_33079__$1)
{var statearr_33126_33156 = state_33108__$1;(statearr_33126_33156[1] = 14);
} else
{var statearr_33127_33157 = state_33108__$1;(statearr_33127_33157[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 12))
{var inst_33099 = (state_33108[2]);var state_33108__$1 = state_33108;var statearr_33128_33158 = state_33108__$1;(statearr_33128_33158[2] = inst_33099);
(statearr_33128_33158[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 13))
{var inst_33068 = (state_33108[8]);var inst_33067 = (state_33108[9]);var inst_33065 = (state_33108[10]);var inst_33066 = (state_33108[11]);var inst_33075 = (state_33108[2]);var inst_33076 = (inst_33068 + 1);var tmp33122 = inst_33067;var tmp33123 = inst_33065;var tmp33124 = inst_33066;var inst_33065__$1 = tmp33123;var inst_33066__$1 = tmp33124;var inst_33067__$1 = tmp33122;var inst_33068__$1 = inst_33076;var state_33108__$1 = (function (){var statearr_33129 = state_33108;(statearr_33129[14] = inst_33075);
(statearr_33129[8] = inst_33068__$1);
(statearr_33129[9] = inst_33067__$1);
(statearr_33129[10] = inst_33065__$1);
(statearr_33129[11] = inst_33066__$1);
return statearr_33129;
})();var statearr_33130_33159 = state_33108__$1;(statearr_33130_33159[2] = null);
(statearr_33130_33159[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 14))
{var inst_33079 = (state_33108[13]);var inst_33081 = cljs.core.chunked_seq_QMARK_.call(null,inst_33079);var state_33108__$1 = state_33108;if(inst_33081)
{var statearr_33131_33160 = state_33108__$1;(statearr_33131_33160[1] = 17);
} else
{var statearr_33132_33161 = state_33108__$1;(statearr_33132_33161[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 15))
{var state_33108__$1 = state_33108;var statearr_33133_33162 = state_33108__$1;(statearr_33133_33162[2] = null);
(statearr_33133_33162[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 16))
{var inst_33097 = (state_33108[2]);var state_33108__$1 = state_33108;var statearr_33134_33163 = state_33108__$1;(statearr_33134_33163[2] = inst_33097);
(statearr_33134_33163[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 17))
{var inst_33079 = (state_33108[13]);var inst_33083 = cljs.core.chunk_first.call(null,inst_33079);var inst_33084 = cljs.core.chunk_rest.call(null,inst_33079);var inst_33085 = cljs.core.count.call(null,inst_33083);var inst_33065 = inst_33084;var inst_33066 = inst_33083;var inst_33067 = inst_33085;var inst_33068 = 0;var state_33108__$1 = (function (){var statearr_33135 = state_33108;(statearr_33135[8] = inst_33068);
(statearr_33135[9] = inst_33067);
(statearr_33135[10] = inst_33065);
(statearr_33135[11] = inst_33066);
return statearr_33135;
})();var statearr_33136_33164 = state_33108__$1;(statearr_33136_33164[2] = null);
(statearr_33136_33164[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 18))
{var inst_33079 = (state_33108[13]);var inst_33088 = cljs.core.first.call(null,inst_33079);var state_33108__$1 = state_33108;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33108__$1,20,out,inst_33088);
} else
{if((state_val_33109 === 19))
{var inst_33094 = (state_33108[2]);var state_33108__$1 = state_33108;var statearr_33137_33165 = state_33108__$1;(statearr_33137_33165[2] = inst_33094);
(statearr_33137_33165[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33109 === 20))
{var inst_33079 = (state_33108[13]);var inst_33090 = (state_33108[2]);var inst_33091 = cljs.core.next.call(null,inst_33079);var inst_33065 = inst_33091;var inst_33066 = null;var inst_33067 = 0;var inst_33068 = 0;var state_33108__$1 = (function (){var statearr_33138 = state_33108;(statearr_33138[15] = inst_33090);
(statearr_33138[8] = inst_33068);
(statearr_33138[9] = inst_33067);
(statearr_33138[10] = inst_33065);
(statearr_33138[11] = inst_33066);
return statearr_33138;
})();var statearr_33139_33166 = state_33108__$1;(statearr_33139_33166[2] = null);
(statearr_33139_33166[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_33143 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33143[0] = state_machine__5507__auto__);
(statearr_33143[1] = 1);
return statearr_33143;
});
var state_machine__5507__auto____1 = (function (state_33108){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33108);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33144){if((e33144 instanceof Object))
{var ex__5510__auto__ = e33144;var statearr_33145_33167 = state_33108;(statearr_33145_33167[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33108);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33144;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33168 = state_33108;
state_33108 = G__33168;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33108){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33108);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33146 = f__5522__auto__.call(null);(statearr_33146[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33146;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___33249 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33228){var state_val_33229 = (state_33228[1]);if((state_val_33229 === 1))
{var state_33228__$1 = state_33228;var statearr_33230_33250 = state_33228__$1;(statearr_33230_33250[2] = null);
(statearr_33230_33250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33229 === 2))
{var state_33228__$1 = state_33228;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33228__$1,4,from);
} else
{if((state_val_33229 === 3))
{var inst_33226 = (state_33228[2]);var state_33228__$1 = state_33228;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33228__$1,inst_33226);
} else
{if((state_val_33229 === 4))
{var inst_33211 = (state_33228[7]);var inst_33211__$1 = (state_33228[2]);var inst_33212 = (inst_33211__$1 == null);var state_33228__$1 = (function (){var statearr_33231 = state_33228;(statearr_33231[7] = inst_33211__$1);
return statearr_33231;
})();if(cljs.core.truth_(inst_33212))
{var statearr_33232_33251 = state_33228__$1;(statearr_33232_33251[1] = 5);
} else
{var statearr_33233_33252 = state_33228__$1;(statearr_33233_33252[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33229 === 5))
{var state_33228__$1 = state_33228;if(cljs.core.truth_(close_QMARK_))
{var statearr_33234_33253 = state_33228__$1;(statearr_33234_33253[1] = 8);
} else
{var statearr_33235_33254 = state_33228__$1;(statearr_33235_33254[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33229 === 6))
{var inst_33211 = (state_33228[7]);var state_33228__$1 = state_33228;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33228__$1,11,to,inst_33211);
} else
{if((state_val_33229 === 7))
{var inst_33224 = (state_33228[2]);var state_33228__$1 = state_33228;var statearr_33236_33255 = state_33228__$1;(statearr_33236_33255[2] = inst_33224);
(statearr_33236_33255[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33229 === 8))
{var inst_33215 = cljs.core.async.close_BANG_.call(null,to);var state_33228__$1 = state_33228;var statearr_33237_33256 = state_33228__$1;(statearr_33237_33256[2] = inst_33215);
(statearr_33237_33256[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33229 === 9))
{var state_33228__$1 = state_33228;var statearr_33238_33257 = state_33228__$1;(statearr_33238_33257[2] = null);
(statearr_33238_33257[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33229 === 10))
{var inst_33218 = (state_33228[2]);var state_33228__$1 = state_33228;var statearr_33239_33258 = state_33228__$1;(statearr_33239_33258[2] = inst_33218);
(statearr_33239_33258[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33229 === 11))
{var inst_33221 = (state_33228[2]);var state_33228__$1 = (function (){var statearr_33240 = state_33228;(statearr_33240[8] = inst_33221);
return statearr_33240;
})();var statearr_33241_33259 = state_33228__$1;(statearr_33241_33259[2] = null);
(statearr_33241_33259[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33245 = [null,null,null,null,null,null,null,null,null];(statearr_33245[0] = state_machine__5507__auto__);
(statearr_33245[1] = 1);
return statearr_33245;
});
var state_machine__5507__auto____1 = (function (state_33228){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33228);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33246){if((e33246 instanceof Object))
{var ex__5510__auto__ = e33246;var statearr_33247_33260 = state_33228;(statearr_33247_33260[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33228);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33246;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33261 = state_33228;
state_33228 = G__33261;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33228){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33248 = f__5522__auto__.call(null);(statearr_33248[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33249);
return statearr_33248;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___33348 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33326){var state_val_33327 = (state_33326[1]);if((state_val_33327 === 1))
{var state_33326__$1 = state_33326;var statearr_33328_33349 = state_33326__$1;(statearr_33328_33349[2] = null);
(statearr_33328_33349[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33327 === 2))
{var state_33326__$1 = state_33326;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33326__$1,4,ch);
} else
{if((state_val_33327 === 3))
{var inst_33324 = (state_33326[2]);var state_33326__$1 = state_33326;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33326__$1,inst_33324);
} else
{if((state_val_33327 === 4))
{var inst_33307 = (state_33326[7]);var inst_33307__$1 = (state_33326[2]);var inst_33308 = (inst_33307__$1 == null);var state_33326__$1 = (function (){var statearr_33329 = state_33326;(statearr_33329[7] = inst_33307__$1);
return statearr_33329;
})();if(cljs.core.truth_(inst_33308))
{var statearr_33330_33350 = state_33326__$1;(statearr_33330_33350[1] = 5);
} else
{var statearr_33331_33351 = state_33326__$1;(statearr_33331_33351[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33327 === 5))
{var inst_33310 = cljs.core.async.close_BANG_.call(null,tc);var inst_33311 = cljs.core.async.close_BANG_.call(null,fc);var state_33326__$1 = (function (){var statearr_33332 = state_33326;(statearr_33332[8] = inst_33310);
return statearr_33332;
})();var statearr_33333_33352 = state_33326__$1;(statearr_33333_33352[2] = inst_33311);
(statearr_33333_33352[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33327 === 6))
{var inst_33307 = (state_33326[7]);var inst_33313 = p.call(null,inst_33307);var state_33326__$1 = state_33326;if(cljs.core.truth_(inst_33313))
{var statearr_33334_33353 = state_33326__$1;(statearr_33334_33353[1] = 9);
} else
{var statearr_33335_33354 = state_33326__$1;(statearr_33335_33354[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33327 === 7))
{var inst_33322 = (state_33326[2]);var state_33326__$1 = state_33326;var statearr_33336_33355 = state_33326__$1;(statearr_33336_33355[2] = inst_33322);
(statearr_33336_33355[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33327 === 8))
{var inst_33319 = (state_33326[2]);var state_33326__$1 = (function (){var statearr_33337 = state_33326;(statearr_33337[9] = inst_33319);
return statearr_33337;
})();var statearr_33338_33356 = state_33326__$1;(statearr_33338_33356[2] = null);
(statearr_33338_33356[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33327 === 9))
{var state_33326__$1 = state_33326;var statearr_33339_33357 = state_33326__$1;(statearr_33339_33357[2] = tc);
(statearr_33339_33357[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33327 === 10))
{var state_33326__$1 = state_33326;var statearr_33340_33358 = state_33326__$1;(statearr_33340_33358[2] = fc);
(statearr_33340_33358[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33327 === 11))
{var inst_33307 = (state_33326[7]);var inst_33317 = (state_33326[2]);var state_33326__$1 = state_33326;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33326__$1,8,inst_33317,inst_33307);
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
var state_machine__5507__auto____0 = (function (){var statearr_33344 = [null,null,null,null,null,null,null,null,null,null];(statearr_33344[0] = state_machine__5507__auto__);
(statearr_33344[1] = 1);
return statearr_33344;
});
var state_machine__5507__auto____1 = (function (state_33326){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33326);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33345){if((e33345 instanceof Object))
{var ex__5510__auto__ = e33345;var statearr_33346_33359 = state_33326;(statearr_33346_33359[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33326);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33345;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33360 = state_33326;
state_33326 = G__33360;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33326){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33326);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33347 = f__5522__auto__.call(null);(statearr_33347[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33348);
return statearr_33347;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33407){var state_val_33408 = (state_33407[1]);if((state_val_33408 === 7))
{var inst_33403 = (state_33407[2]);var state_33407__$1 = state_33407;var statearr_33409_33425 = state_33407__$1;(statearr_33409_33425[2] = inst_33403);
(statearr_33409_33425[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33408 === 6))
{var inst_33396 = (state_33407[7]);var inst_33393 = (state_33407[8]);var inst_33400 = f.call(null,inst_33393,inst_33396);var inst_33393__$1 = inst_33400;var state_33407__$1 = (function (){var statearr_33410 = state_33407;(statearr_33410[8] = inst_33393__$1);
return statearr_33410;
})();var statearr_33411_33426 = state_33407__$1;(statearr_33411_33426[2] = null);
(statearr_33411_33426[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33408 === 5))
{var inst_33393 = (state_33407[8]);var state_33407__$1 = state_33407;var statearr_33412_33427 = state_33407__$1;(statearr_33412_33427[2] = inst_33393);
(statearr_33412_33427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33408 === 4))
{var inst_33396 = (state_33407[7]);var inst_33396__$1 = (state_33407[2]);var inst_33397 = (inst_33396__$1 == null);var state_33407__$1 = (function (){var statearr_33413 = state_33407;(statearr_33413[7] = inst_33396__$1);
return statearr_33413;
})();if(cljs.core.truth_(inst_33397))
{var statearr_33414_33428 = state_33407__$1;(statearr_33414_33428[1] = 5);
} else
{var statearr_33415_33429 = state_33407__$1;(statearr_33415_33429[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33408 === 3))
{var inst_33405 = (state_33407[2]);var state_33407__$1 = state_33407;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33407__$1,inst_33405);
} else
{if((state_val_33408 === 2))
{var state_33407__$1 = state_33407;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33407__$1,4,ch);
} else
{if((state_val_33408 === 1))
{var inst_33393 = init;var state_33407__$1 = (function (){var statearr_33416 = state_33407;(statearr_33416[8] = inst_33393);
return statearr_33416;
})();var statearr_33417_33430 = state_33407__$1;(statearr_33417_33430[2] = null);
(statearr_33417_33430[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_33421 = [null,null,null,null,null,null,null,null,null];(statearr_33421[0] = state_machine__5507__auto__);
(statearr_33421[1] = 1);
return statearr_33421;
});
var state_machine__5507__auto____1 = (function (state_33407){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33407);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33422){if((e33422 instanceof Object))
{var ex__5510__auto__ = e33422;var statearr_33423_33431 = state_33407;(statearr_33423_33431[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33407);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33422;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33432 = state_33407;
state_33407 = G__33432;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33407){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33407);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33424 = f__5522__auto__.call(null);(statearr_33424[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33424;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33494){var state_val_33495 = (state_33494[1]);if((state_val_33495 === 1))
{var inst_33474 = cljs.core.seq.call(null,coll);var inst_33475 = inst_33474;var state_33494__$1 = (function (){var statearr_33496 = state_33494;(statearr_33496[7] = inst_33475);
return statearr_33496;
})();var statearr_33497_33515 = state_33494__$1;(statearr_33497_33515[2] = null);
(statearr_33497_33515[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33495 === 2))
{var inst_33475 = (state_33494[7]);var state_33494__$1 = state_33494;if(cljs.core.truth_(inst_33475))
{var statearr_33498_33516 = state_33494__$1;(statearr_33498_33516[1] = 4);
} else
{var statearr_33499_33517 = state_33494__$1;(statearr_33499_33517[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33495 === 3))
{var inst_33492 = (state_33494[2]);var state_33494__$1 = state_33494;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33494__$1,inst_33492);
} else
{if((state_val_33495 === 4))
{var inst_33475 = (state_33494[7]);var inst_33478 = cljs.core.first.call(null,inst_33475);var state_33494__$1 = state_33494;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33494__$1,7,ch,inst_33478);
} else
{if((state_val_33495 === 5))
{var state_33494__$1 = state_33494;if(cljs.core.truth_(close_QMARK_))
{var statearr_33500_33518 = state_33494__$1;(statearr_33500_33518[1] = 8);
} else
{var statearr_33501_33519 = state_33494__$1;(statearr_33501_33519[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33495 === 6))
{var inst_33490 = (state_33494[2]);var state_33494__$1 = state_33494;var statearr_33502_33520 = state_33494__$1;(statearr_33502_33520[2] = inst_33490);
(statearr_33502_33520[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33495 === 7))
{var inst_33475 = (state_33494[7]);var inst_33480 = (state_33494[2]);var inst_33481 = cljs.core.next.call(null,inst_33475);var inst_33475__$1 = inst_33481;var state_33494__$1 = (function (){var statearr_33503 = state_33494;(statearr_33503[7] = inst_33475__$1);
(statearr_33503[8] = inst_33480);
return statearr_33503;
})();var statearr_33504_33521 = state_33494__$1;(statearr_33504_33521[2] = null);
(statearr_33504_33521[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33495 === 8))
{var inst_33485 = cljs.core.async.close_BANG_.call(null,ch);var state_33494__$1 = state_33494;var statearr_33505_33522 = state_33494__$1;(statearr_33505_33522[2] = inst_33485);
(statearr_33505_33522[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33495 === 9))
{var state_33494__$1 = state_33494;var statearr_33506_33523 = state_33494__$1;(statearr_33506_33523[2] = null);
(statearr_33506_33523[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33495 === 10))
{var inst_33488 = (state_33494[2]);var state_33494__$1 = state_33494;var statearr_33507_33524 = state_33494__$1;(statearr_33507_33524[2] = inst_33488);
(statearr_33507_33524[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_33511 = [null,null,null,null,null,null,null,null,null];(statearr_33511[0] = state_machine__5507__auto__);
(statearr_33511[1] = 1);
return statearr_33511;
});
var state_machine__5507__auto____1 = (function (state_33494){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33494);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33512){if((e33512 instanceof Object))
{var ex__5510__auto__ = e33512;var statearr_33513_33525 = state_33494;(statearr_33513_33525[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33494);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33512;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__33526 = state_33494;
state_33494 = G__33526;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33494){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33514 = f__5522__auto__.call(null);(statearr_33514[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_33514;
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
cljs.core.async.Mux = (function (){var obj33528 = {};return obj33528;
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
cljs.core.async.Mult = (function (){var obj33530 = {};return obj33530;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t33754 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t33754 = (function (cs,ch,mult,meta33755){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta33755 = meta33755;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t33754.cljs$lang$type = true;
cljs.core.async.t33754.cljs$lang$ctorStr = "cljs.core.async/t33754";
cljs.core.async.t33754.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t33754");
});})(cs))
;
cljs.core.async.t33754.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t33754.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t33754.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t33754.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t33754.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t33754.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t33754.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33756){var self__ = this;
var _33756__$1 = this;return self__.meta33755;
});})(cs))
;
cljs.core.async.t33754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33756,meta33755__$1){var self__ = this;
var _33756__$1 = this;return (new cljs.core.async.t33754(self__.cs,self__.ch,self__.mult,meta33755__$1));
});})(cs))
;
cljs.core.async.__GT_t33754 = ((function (cs){
return (function __GT_t33754(cs__$1,ch__$1,mult__$1,meta33755){return (new cljs.core.async.t33754(cs__$1,ch__$1,mult__$1,meta33755));
});})(cs))
;
}
return (new cljs.core.async.t33754(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___33977 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_33891){var state_val_33892 = (state_33891[1]);if((state_val_33892 === 32))
{var inst_33835 = (state_33891[7]);var inst_33759 = (state_33891[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33891,31,Object,null,30);var inst_33842 = cljs.core.async.put_BANG_.call(null,inst_33835,inst_33759,done);var state_33891__$1 = state_33891;var statearr_33893_33978 = state_33891__$1;(statearr_33893_33978[2] = inst_33842);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33891__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 1))
{var state_33891__$1 = state_33891;var statearr_33894_33979 = state_33891__$1;(statearr_33894_33979[2] = null);
(statearr_33894_33979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 33))
{var inst_33848 = (state_33891[9]);var inst_33850 = cljs.core.chunked_seq_QMARK_.call(null,inst_33848);var state_33891__$1 = state_33891;if(inst_33850)
{var statearr_33895_33980 = state_33891__$1;(statearr_33895_33980[1] = 36);
} else
{var statearr_33896_33981 = state_33891__$1;(statearr_33896_33981[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 2))
{var state_33891__$1 = state_33891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33891__$1,4,ch);
} else
{if((state_val_33892 === 34))
{var state_33891__$1 = state_33891;var statearr_33897_33982 = state_33891__$1;(statearr_33897_33982[2] = null);
(statearr_33897_33982[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 3))
{var inst_33889 = (state_33891[2]);var state_33891__$1 = state_33891;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33891__$1,inst_33889);
} else
{if((state_val_33892 === 35))
{var inst_33873 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33898_33983 = state_33891__$1;(statearr_33898_33983[2] = inst_33873);
(statearr_33898_33983[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 4))
{var inst_33759 = (state_33891[8]);var inst_33759__$1 = (state_33891[2]);var inst_33760 = (inst_33759__$1 == null);var state_33891__$1 = (function (){var statearr_33899 = state_33891;(statearr_33899[8] = inst_33759__$1);
return statearr_33899;
})();if(cljs.core.truth_(inst_33760))
{var statearr_33900_33984 = state_33891__$1;(statearr_33900_33984[1] = 5);
} else
{var statearr_33901_33985 = state_33891__$1;(statearr_33901_33985[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 36))
{var inst_33848 = (state_33891[9]);var inst_33852 = cljs.core.chunk_first.call(null,inst_33848);var inst_33853 = cljs.core.chunk_rest.call(null,inst_33848);var inst_33854 = cljs.core.count.call(null,inst_33852);var inst_33827 = inst_33853;var inst_33828 = inst_33852;var inst_33829 = inst_33854;var inst_33830 = 0;var state_33891__$1 = (function (){var statearr_33902 = state_33891;(statearr_33902[10] = inst_33830);
(statearr_33902[11] = inst_33829);
(statearr_33902[12] = inst_33827);
(statearr_33902[13] = inst_33828);
return statearr_33902;
})();var statearr_33903_33986 = state_33891__$1;(statearr_33903_33986[2] = null);
(statearr_33903_33986[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 5))
{var inst_33766 = cljs.core.deref.call(null,cs);var inst_33767 = cljs.core.seq.call(null,inst_33766);var inst_33768 = inst_33767;var inst_33769 = null;var inst_33770 = 0;var inst_33771 = 0;var state_33891__$1 = (function (){var statearr_33904 = state_33891;(statearr_33904[14] = inst_33769);
(statearr_33904[15] = inst_33768);
(statearr_33904[16] = inst_33770);
(statearr_33904[17] = inst_33771);
return statearr_33904;
})();var statearr_33905_33987 = state_33891__$1;(statearr_33905_33987[2] = null);
(statearr_33905_33987[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 37))
{var inst_33848 = (state_33891[9]);var inst_33857 = cljs.core.first.call(null,inst_33848);var state_33891__$1 = (function (){var statearr_33906 = state_33891;(statearr_33906[18] = inst_33857);
return statearr_33906;
})();var statearr_33907_33988 = state_33891__$1;(statearr_33907_33988[2] = null);
(statearr_33907_33988[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 6))
{var inst_33819 = (state_33891[19]);var inst_33818 = cljs.core.deref.call(null,cs);var inst_33819__$1 = cljs.core.keys.call(null,inst_33818);var inst_33820 = cljs.core.count.call(null,inst_33819__$1);var inst_33821 = cljs.core.reset_BANG_.call(null,dctr,inst_33820);var inst_33826 = cljs.core.seq.call(null,inst_33819__$1);var inst_33827 = inst_33826;var inst_33828 = null;var inst_33829 = 0;var inst_33830 = 0;var state_33891__$1 = (function (){var statearr_33908 = state_33891;(statearr_33908[10] = inst_33830);
(statearr_33908[19] = inst_33819__$1);
(statearr_33908[20] = inst_33821);
(statearr_33908[11] = inst_33829);
(statearr_33908[12] = inst_33827);
(statearr_33908[13] = inst_33828);
return statearr_33908;
})();var statearr_33909_33989 = state_33891__$1;(statearr_33909_33989[2] = null);
(statearr_33909_33989[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 38))
{var inst_33870 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33910_33990 = state_33891__$1;(statearr_33910_33990[2] = inst_33870);
(statearr_33910_33990[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 7))
{var inst_33887 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33911_33991 = state_33891__$1;(statearr_33911_33991[2] = inst_33887);
(statearr_33911_33991[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 39))
{var inst_33848 = (state_33891[9]);var inst_33866 = (state_33891[2]);var inst_33867 = cljs.core.next.call(null,inst_33848);var inst_33827 = inst_33867;var inst_33828 = null;var inst_33829 = 0;var inst_33830 = 0;var state_33891__$1 = (function (){var statearr_33912 = state_33891;(statearr_33912[10] = inst_33830);
(statearr_33912[21] = inst_33866);
(statearr_33912[11] = inst_33829);
(statearr_33912[12] = inst_33827);
(statearr_33912[13] = inst_33828);
return statearr_33912;
})();var statearr_33913_33992 = state_33891__$1;(statearr_33913_33992[2] = null);
(statearr_33913_33992[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 8))
{var inst_33770 = (state_33891[16]);var inst_33771 = (state_33891[17]);var inst_33773 = (inst_33771 < inst_33770);var inst_33774 = inst_33773;var state_33891__$1 = state_33891;if(cljs.core.truth_(inst_33774))
{var statearr_33914_33993 = state_33891__$1;(statearr_33914_33993[1] = 10);
} else
{var statearr_33915_33994 = state_33891__$1;(statearr_33915_33994[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 40))
{var inst_33857 = (state_33891[18]);var inst_33858 = (state_33891[2]);var inst_33859 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33860 = cljs.core.async.untap_STAR_.call(null,m,inst_33857);var state_33891__$1 = (function (){var statearr_33916 = state_33891;(statearr_33916[22] = inst_33859);
(statearr_33916[23] = inst_33858);
return statearr_33916;
})();var statearr_33917_33995 = state_33891__$1;(statearr_33917_33995[2] = inst_33860);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33891__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 9))
{var inst_33816 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33918_33996 = state_33891__$1;(statearr_33918_33996[2] = inst_33816);
(statearr_33918_33996[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 41))
{var inst_33857 = (state_33891[18]);var inst_33759 = (state_33891[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_33891,40,Object,null,39);var inst_33864 = cljs.core.async.put_BANG_.call(null,inst_33857,inst_33759,done);var state_33891__$1 = state_33891;var statearr_33919_33997 = state_33891__$1;(statearr_33919_33997[2] = inst_33864);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33891__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 10))
{var inst_33769 = (state_33891[14]);var inst_33771 = (state_33891[17]);var inst_33777 = cljs.core._nth.call(null,inst_33769,inst_33771);var inst_33778 = cljs.core.nth.call(null,inst_33777,0,null);var inst_33779 = cljs.core.nth.call(null,inst_33777,1,null);var state_33891__$1 = (function (){var statearr_33920 = state_33891;(statearr_33920[24] = inst_33778);
return statearr_33920;
})();if(cljs.core.truth_(inst_33779))
{var statearr_33921_33998 = state_33891__$1;(statearr_33921_33998[1] = 13);
} else
{var statearr_33922_33999 = state_33891__$1;(statearr_33922_33999[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 42))
{var state_33891__$1 = state_33891;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33891__$1,45,dchan);
} else
{if((state_val_33892 === 11))
{var inst_33768 = (state_33891[15]);var inst_33788 = (state_33891[25]);var inst_33788__$1 = cljs.core.seq.call(null,inst_33768);var state_33891__$1 = (function (){var statearr_33923 = state_33891;(statearr_33923[25] = inst_33788__$1);
return statearr_33923;
})();if(inst_33788__$1)
{var statearr_33924_34000 = state_33891__$1;(statearr_33924_34000[1] = 16);
} else
{var statearr_33925_34001 = state_33891__$1;(statearr_33925_34001[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 43))
{var state_33891__$1 = state_33891;var statearr_33926_34002 = state_33891__$1;(statearr_33926_34002[2] = null);
(statearr_33926_34002[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 12))
{var inst_33814 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33927_34003 = state_33891__$1;(statearr_33927_34003[2] = inst_33814);
(statearr_33927_34003[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 44))
{var inst_33884 = (state_33891[2]);var state_33891__$1 = (function (){var statearr_33928 = state_33891;(statearr_33928[26] = inst_33884);
return statearr_33928;
})();var statearr_33929_34004 = state_33891__$1;(statearr_33929_34004[2] = null);
(statearr_33929_34004[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 13))
{var inst_33778 = (state_33891[24]);var inst_33781 = cljs.core.async.close_BANG_.call(null,inst_33778);var state_33891__$1 = state_33891;var statearr_33930_34005 = state_33891__$1;(statearr_33930_34005[2] = inst_33781);
(statearr_33930_34005[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 45))
{var inst_33881 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33934_34006 = state_33891__$1;(statearr_33934_34006[2] = inst_33881);
(statearr_33934_34006[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 14))
{var state_33891__$1 = state_33891;var statearr_33935_34007 = state_33891__$1;(statearr_33935_34007[2] = null);
(statearr_33935_34007[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 15))
{var inst_33769 = (state_33891[14]);var inst_33768 = (state_33891[15]);var inst_33770 = (state_33891[16]);var inst_33771 = (state_33891[17]);var inst_33784 = (state_33891[2]);var inst_33785 = (inst_33771 + 1);var tmp33931 = inst_33769;var tmp33932 = inst_33768;var tmp33933 = inst_33770;var inst_33768__$1 = tmp33932;var inst_33769__$1 = tmp33931;var inst_33770__$1 = tmp33933;var inst_33771__$1 = inst_33785;var state_33891__$1 = (function (){var statearr_33936 = state_33891;(statearr_33936[14] = inst_33769__$1);
(statearr_33936[15] = inst_33768__$1);
(statearr_33936[16] = inst_33770__$1);
(statearr_33936[27] = inst_33784);
(statearr_33936[17] = inst_33771__$1);
return statearr_33936;
})();var statearr_33937_34008 = state_33891__$1;(statearr_33937_34008[2] = null);
(statearr_33937_34008[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 16))
{var inst_33788 = (state_33891[25]);var inst_33790 = cljs.core.chunked_seq_QMARK_.call(null,inst_33788);var state_33891__$1 = state_33891;if(inst_33790)
{var statearr_33938_34009 = state_33891__$1;(statearr_33938_34009[1] = 19);
} else
{var statearr_33939_34010 = state_33891__$1;(statearr_33939_34010[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 17))
{var state_33891__$1 = state_33891;var statearr_33940_34011 = state_33891__$1;(statearr_33940_34011[2] = null);
(statearr_33940_34011[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 18))
{var inst_33812 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33941_34012 = state_33891__$1;(statearr_33941_34012[2] = inst_33812);
(statearr_33941_34012[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 19))
{var inst_33788 = (state_33891[25]);var inst_33792 = cljs.core.chunk_first.call(null,inst_33788);var inst_33793 = cljs.core.chunk_rest.call(null,inst_33788);var inst_33794 = cljs.core.count.call(null,inst_33792);var inst_33768 = inst_33793;var inst_33769 = inst_33792;var inst_33770 = inst_33794;var inst_33771 = 0;var state_33891__$1 = (function (){var statearr_33942 = state_33891;(statearr_33942[14] = inst_33769);
(statearr_33942[15] = inst_33768);
(statearr_33942[16] = inst_33770);
(statearr_33942[17] = inst_33771);
return statearr_33942;
})();var statearr_33943_34013 = state_33891__$1;(statearr_33943_34013[2] = null);
(statearr_33943_34013[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 20))
{var inst_33788 = (state_33891[25]);var inst_33798 = cljs.core.first.call(null,inst_33788);var inst_33799 = cljs.core.nth.call(null,inst_33798,0,null);var inst_33800 = cljs.core.nth.call(null,inst_33798,1,null);var state_33891__$1 = (function (){var statearr_33944 = state_33891;(statearr_33944[28] = inst_33799);
return statearr_33944;
})();if(cljs.core.truth_(inst_33800))
{var statearr_33945_34014 = state_33891__$1;(statearr_33945_34014[1] = 22);
} else
{var statearr_33946_34015 = state_33891__$1;(statearr_33946_34015[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 21))
{var inst_33809 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33947_34016 = state_33891__$1;(statearr_33947_34016[2] = inst_33809);
(statearr_33947_34016[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 22))
{var inst_33799 = (state_33891[28]);var inst_33802 = cljs.core.async.close_BANG_.call(null,inst_33799);var state_33891__$1 = state_33891;var statearr_33948_34017 = state_33891__$1;(statearr_33948_34017[2] = inst_33802);
(statearr_33948_34017[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 23))
{var state_33891__$1 = state_33891;var statearr_33949_34018 = state_33891__$1;(statearr_33949_34018[2] = null);
(statearr_33949_34018[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 24))
{var inst_33788 = (state_33891[25]);var inst_33805 = (state_33891[2]);var inst_33806 = cljs.core.next.call(null,inst_33788);var inst_33768 = inst_33806;var inst_33769 = null;var inst_33770 = 0;var inst_33771 = 0;var state_33891__$1 = (function (){var statearr_33950 = state_33891;(statearr_33950[14] = inst_33769);
(statearr_33950[15] = inst_33768);
(statearr_33950[29] = inst_33805);
(statearr_33950[16] = inst_33770);
(statearr_33950[17] = inst_33771);
return statearr_33950;
})();var statearr_33951_34019 = state_33891__$1;(statearr_33951_34019[2] = null);
(statearr_33951_34019[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 25))
{var inst_33830 = (state_33891[10]);var inst_33829 = (state_33891[11]);var inst_33832 = (inst_33830 < inst_33829);var inst_33833 = inst_33832;var state_33891__$1 = state_33891;if(cljs.core.truth_(inst_33833))
{var statearr_33952_34020 = state_33891__$1;(statearr_33952_34020[1] = 27);
} else
{var statearr_33953_34021 = state_33891__$1;(statearr_33953_34021[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 26))
{var inst_33819 = (state_33891[19]);var inst_33877 = (state_33891[2]);var inst_33878 = cljs.core.seq.call(null,inst_33819);var state_33891__$1 = (function (){var statearr_33954 = state_33891;(statearr_33954[30] = inst_33877);
return statearr_33954;
})();if(inst_33878)
{var statearr_33955_34022 = state_33891__$1;(statearr_33955_34022[1] = 42);
} else
{var statearr_33956_34023 = state_33891__$1;(statearr_33956_34023[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 27))
{var inst_33830 = (state_33891[10]);var inst_33828 = (state_33891[13]);var inst_33835 = cljs.core._nth.call(null,inst_33828,inst_33830);var state_33891__$1 = (function (){var statearr_33957 = state_33891;(statearr_33957[7] = inst_33835);
return statearr_33957;
})();var statearr_33958_34024 = state_33891__$1;(statearr_33958_34024[2] = null);
(statearr_33958_34024[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 28))
{var inst_33848 = (state_33891[9]);var inst_33827 = (state_33891[12]);var inst_33848__$1 = cljs.core.seq.call(null,inst_33827);var state_33891__$1 = (function (){var statearr_33962 = state_33891;(statearr_33962[9] = inst_33848__$1);
return statearr_33962;
})();if(inst_33848__$1)
{var statearr_33963_34025 = state_33891__$1;(statearr_33963_34025[1] = 33);
} else
{var statearr_33964_34026 = state_33891__$1;(statearr_33964_34026[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 29))
{var inst_33875 = (state_33891[2]);var state_33891__$1 = state_33891;var statearr_33965_34027 = state_33891__$1;(statearr_33965_34027[2] = inst_33875);
(statearr_33965_34027[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 30))
{var inst_33830 = (state_33891[10]);var inst_33829 = (state_33891[11]);var inst_33827 = (state_33891[12]);var inst_33828 = (state_33891[13]);var inst_33844 = (state_33891[2]);var inst_33845 = (inst_33830 + 1);var tmp33959 = inst_33829;var tmp33960 = inst_33827;var tmp33961 = inst_33828;var inst_33827__$1 = tmp33960;var inst_33828__$1 = tmp33961;var inst_33829__$1 = tmp33959;var inst_33830__$1 = inst_33845;var state_33891__$1 = (function (){var statearr_33966 = state_33891;(statearr_33966[10] = inst_33830__$1);
(statearr_33966[11] = inst_33829__$1);
(statearr_33966[12] = inst_33827__$1);
(statearr_33966[13] = inst_33828__$1);
(statearr_33966[31] = inst_33844);
return statearr_33966;
})();var statearr_33967_34028 = state_33891__$1;(statearr_33967_34028[2] = null);
(statearr_33967_34028[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_33892 === 31))
{var inst_33835 = (state_33891[7]);var inst_33836 = (state_33891[2]);var inst_33837 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_33838 = cljs.core.async.untap_STAR_.call(null,m,inst_33835);var state_33891__$1 = (function (){var statearr_33968 = state_33891;(statearr_33968[32] = inst_33837);
(statearr_33968[33] = inst_33836);
return statearr_33968;
})();var statearr_33969_34029 = state_33891__$1;(statearr_33969_34029[2] = inst_33838);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33891__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_33973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_33973[0] = state_machine__5507__auto__);
(statearr_33973[1] = 1);
return statearr_33973;
});
var state_machine__5507__auto____1 = (function (state_33891){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_33891);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e33974){if((e33974 instanceof Object))
{var ex__5510__auto__ = e33974;var statearr_33975_34030 = state_33891;(statearr_33975_34030[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33891);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e33974;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34031 = state_33891;
state_33891 = G__34031;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_33891){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_33891);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_33976 = f__5522__auto__.call(null);(statearr_33976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___33977);
return statearr_33976;
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
cljs.core.async.Mix = (function (){var obj34033 = {};return obj34033;
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
;var m = (function (){if(typeof cljs.core.async.t34143 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34143 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta34144){
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
this.meta34144 = meta34144;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34143.cljs$lang$type = true;
cljs.core.async.t34143.cljs$lang$ctorStr = "cljs.core.async/t34143";
cljs.core.async.t34143.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34143");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34143.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t34143.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34143.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34143.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34143.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34143.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34143.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34143.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34143.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34145){var self__ = this;
var _34145__$1 = this;return self__.meta34144;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t34143.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34145,meta34144__$1){var self__ = this;
var _34145__$1 = this;return (new cljs.core.async.t34143(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta34144__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t34143 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t34143(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34144){return (new cljs.core.async.t34143(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta34144));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t34143(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___34252 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34210){var state_val_34211 = (state_34210[1]);if((state_val_34211 === 1))
{var inst_34149 = (state_34210[7]);var inst_34149__$1 = calc_state.call(null);var inst_34150 = cljs.core.seq_QMARK_.call(null,inst_34149__$1);var state_34210__$1 = (function (){var statearr_34212 = state_34210;(statearr_34212[7] = inst_34149__$1);
return statearr_34212;
})();if(inst_34150)
{var statearr_34213_34253 = state_34210__$1;(statearr_34213_34253[1] = 2);
} else
{var statearr_34214_34254 = state_34210__$1;(statearr_34214_34254[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 2))
{var inst_34149 = (state_34210[7]);var inst_34152 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34149);var state_34210__$1 = state_34210;var statearr_34215_34255 = state_34210__$1;(statearr_34215_34255[2] = inst_34152);
(statearr_34215_34255[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 3))
{var inst_34149 = (state_34210[7]);var state_34210__$1 = state_34210;var statearr_34216_34256 = state_34210__$1;(statearr_34216_34256[2] = inst_34149);
(statearr_34216_34256[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 4))
{var inst_34149 = (state_34210[7]);var inst_34155 = (state_34210[2]);var inst_34156 = cljs.core.get.call(null,inst_34155,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34157 = cljs.core.get.call(null,inst_34155,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34158 = cljs.core.get.call(null,inst_34155,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_34159 = inst_34149;var state_34210__$1 = (function (){var statearr_34217 = state_34210;(statearr_34217[8] = inst_34159);
(statearr_34217[9] = inst_34158);
(statearr_34217[10] = inst_34157);
(statearr_34217[11] = inst_34156);
return statearr_34217;
})();var statearr_34218_34257 = state_34210__$1;(statearr_34218_34257[2] = null);
(statearr_34218_34257[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 5))
{var inst_34159 = (state_34210[8]);var inst_34162 = cljs.core.seq_QMARK_.call(null,inst_34159);var state_34210__$1 = state_34210;if(inst_34162)
{var statearr_34219_34258 = state_34210__$1;(statearr_34219_34258[1] = 7);
} else
{var statearr_34220_34259 = state_34210__$1;(statearr_34220_34259[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 6))
{var inst_34208 = (state_34210[2]);var state_34210__$1 = state_34210;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34210__$1,inst_34208);
} else
{if((state_val_34211 === 7))
{var inst_34159 = (state_34210[8]);var inst_34164 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34159);var state_34210__$1 = state_34210;var statearr_34221_34260 = state_34210__$1;(statearr_34221_34260[2] = inst_34164);
(statearr_34221_34260[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 8))
{var inst_34159 = (state_34210[8]);var state_34210__$1 = state_34210;var statearr_34222_34261 = state_34210__$1;(statearr_34222_34261[2] = inst_34159);
(statearr_34222_34261[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 9))
{var inst_34167 = (state_34210[12]);var inst_34167__$1 = (state_34210[2]);var inst_34168 = cljs.core.get.call(null,inst_34167__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_34169 = cljs.core.get.call(null,inst_34167__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_34170 = cljs.core.get.call(null,inst_34167__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_34210__$1 = (function (){var statearr_34223 = state_34210;(statearr_34223[13] = inst_34170);
(statearr_34223[14] = inst_34169);
(statearr_34223[12] = inst_34167__$1);
return statearr_34223;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34210__$1,10,inst_34168);
} else
{if((state_val_34211 === 10))
{var inst_34174 = (state_34210[15]);var inst_34175 = (state_34210[16]);var inst_34173 = (state_34210[2]);var inst_34174__$1 = cljs.core.nth.call(null,inst_34173,0,null);var inst_34175__$1 = cljs.core.nth.call(null,inst_34173,1,null);var inst_34176 = (inst_34174__$1 == null);var inst_34177 = cljs.core._EQ_.call(null,inst_34175__$1,change);var inst_34178 = (inst_34176) || (inst_34177);var state_34210__$1 = (function (){var statearr_34224 = state_34210;(statearr_34224[15] = inst_34174__$1);
(statearr_34224[16] = inst_34175__$1);
return statearr_34224;
})();if(cljs.core.truth_(inst_34178))
{var statearr_34225_34262 = state_34210__$1;(statearr_34225_34262[1] = 11);
} else
{var statearr_34226_34263 = state_34210__$1;(statearr_34226_34263[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 11))
{var inst_34174 = (state_34210[15]);var inst_34180 = (inst_34174 == null);var state_34210__$1 = state_34210;if(cljs.core.truth_(inst_34180))
{var statearr_34227_34264 = state_34210__$1;(statearr_34227_34264[1] = 14);
} else
{var statearr_34228_34265 = state_34210__$1;(statearr_34228_34265[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 12))
{var inst_34175 = (state_34210[16]);var inst_34170 = (state_34210[13]);var inst_34189 = (state_34210[17]);var inst_34189__$1 = inst_34170.call(null,inst_34175);var state_34210__$1 = (function (){var statearr_34229 = state_34210;(statearr_34229[17] = inst_34189__$1);
return statearr_34229;
})();if(cljs.core.truth_(inst_34189__$1))
{var statearr_34230_34266 = state_34210__$1;(statearr_34230_34266[1] = 17);
} else
{var statearr_34231_34267 = state_34210__$1;(statearr_34231_34267[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 13))
{var inst_34206 = (state_34210[2]);var state_34210__$1 = state_34210;var statearr_34232_34268 = state_34210__$1;(statearr_34232_34268[2] = inst_34206);
(statearr_34232_34268[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 14))
{var inst_34175 = (state_34210[16]);var inst_34182 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34175);var state_34210__$1 = state_34210;var statearr_34233_34269 = state_34210__$1;(statearr_34233_34269[2] = inst_34182);
(statearr_34233_34269[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 15))
{var state_34210__$1 = state_34210;var statearr_34234_34270 = state_34210__$1;(statearr_34234_34270[2] = null);
(statearr_34234_34270[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 16))
{var inst_34185 = (state_34210[2]);var inst_34186 = calc_state.call(null);var inst_34159 = inst_34186;var state_34210__$1 = (function (){var statearr_34235 = state_34210;(statearr_34235[18] = inst_34185);
(statearr_34235[8] = inst_34159);
return statearr_34235;
})();var statearr_34236_34271 = state_34210__$1;(statearr_34236_34271[2] = null);
(statearr_34236_34271[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 17))
{var inst_34189 = (state_34210[17]);var state_34210__$1 = state_34210;var statearr_34237_34272 = state_34210__$1;(statearr_34237_34272[2] = inst_34189);
(statearr_34237_34272[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 18))
{var inst_34175 = (state_34210[16]);var inst_34170 = (state_34210[13]);var inst_34169 = (state_34210[14]);var inst_34192 = cljs.core.empty_QMARK_.call(null,inst_34170);var inst_34193 = inst_34169.call(null,inst_34175);var inst_34194 = cljs.core.not.call(null,inst_34193);var inst_34195 = (inst_34192) && (inst_34194);var state_34210__$1 = state_34210;var statearr_34238_34273 = state_34210__$1;(statearr_34238_34273[2] = inst_34195);
(statearr_34238_34273[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 19))
{var inst_34197 = (state_34210[2]);var state_34210__$1 = state_34210;if(cljs.core.truth_(inst_34197))
{var statearr_34239_34274 = state_34210__$1;(statearr_34239_34274[1] = 20);
} else
{var statearr_34240_34275 = state_34210__$1;(statearr_34240_34275[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 20))
{var inst_34174 = (state_34210[15]);var state_34210__$1 = state_34210;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34210__$1,23,out,inst_34174);
} else
{if((state_val_34211 === 21))
{var state_34210__$1 = state_34210;var statearr_34241_34276 = state_34210__$1;(statearr_34241_34276[2] = null);
(statearr_34241_34276[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 22))
{var inst_34167 = (state_34210[12]);var inst_34203 = (state_34210[2]);var inst_34159 = inst_34167;var state_34210__$1 = (function (){var statearr_34242 = state_34210;(statearr_34242[19] = inst_34203);
(statearr_34242[8] = inst_34159);
return statearr_34242;
})();var statearr_34243_34277 = state_34210__$1;(statearr_34243_34277[2] = null);
(statearr_34243_34277[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34211 === 23))
{var inst_34200 = (state_34210[2]);var state_34210__$1 = state_34210;var statearr_34244_34278 = state_34210__$1;(statearr_34244_34278[2] = inst_34200);
(statearr_34244_34278[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_34248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34248[0] = state_machine__5507__auto__);
(statearr_34248[1] = 1);
return statearr_34248;
});
var state_machine__5507__auto____1 = (function (state_34210){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34210);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34249){if((e34249 instanceof Object))
{var ex__5510__auto__ = e34249;var statearr_34250_34279 = state_34210;(statearr_34250_34279[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34210);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34249;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34280 = state_34210;
state_34210 = G__34280;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34210){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34210);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34251 = f__5522__auto__.call(null);(statearr_34251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34252);
return statearr_34251;
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
cljs.core.async.Pub = (function (){var obj34282 = {};return obj34282;
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
return (function (p1__34283_SHARP_){if(cljs.core.truth_(p1__34283_SHARP_.call(null,topic)))
{return p1__34283_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__34283_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t34408 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34408 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta34409){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta34409 = meta34409;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34408.cljs$lang$type = true;
cljs.core.async.t34408.cljs$lang$ctorStr = "cljs.core.async/t34408";
cljs.core.async.t34408.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34408");
});})(mults,ensure_mult))
;
cljs.core.async.t34408.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t34408.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t34408.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t34408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t34408.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t34408.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t34408.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t34408.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34410){var self__ = this;
var _34410__$1 = this;return self__.meta34409;
});})(mults,ensure_mult))
;
cljs.core.async.t34408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34410,meta34409__$1){var self__ = this;
var _34410__$1 = this;return (new cljs.core.async.t34408(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta34409__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t34408 = ((function (mults,ensure_mult){
return (function __GT_t34408(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34409){return (new cljs.core.async.t34408(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta34409));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t34408(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___34532 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34484){var state_val_34485 = (state_34484[1]);if((state_val_34485 === 1))
{var state_34484__$1 = state_34484;var statearr_34486_34533 = state_34484__$1;(statearr_34486_34533[2] = null);
(statearr_34486_34533[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 2))
{var state_34484__$1 = state_34484;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34484__$1,4,ch);
} else
{if((state_val_34485 === 3))
{var inst_34482 = (state_34484[2]);var state_34484__$1 = state_34484;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34484__$1,inst_34482);
} else
{if((state_val_34485 === 4))
{var inst_34413 = (state_34484[7]);var inst_34413__$1 = (state_34484[2]);var inst_34414 = (inst_34413__$1 == null);var state_34484__$1 = (function (){var statearr_34487 = state_34484;(statearr_34487[7] = inst_34413__$1);
return statearr_34487;
})();if(cljs.core.truth_(inst_34414))
{var statearr_34488_34534 = state_34484__$1;(statearr_34488_34534[1] = 5);
} else
{var statearr_34489_34535 = state_34484__$1;(statearr_34489_34535[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 5))
{var inst_34420 = cljs.core.deref.call(null,mults);var inst_34421 = cljs.core.vals.call(null,inst_34420);var inst_34422 = cljs.core.seq.call(null,inst_34421);var inst_34423 = inst_34422;var inst_34424 = null;var inst_34425 = 0;var inst_34426 = 0;var state_34484__$1 = (function (){var statearr_34490 = state_34484;(statearr_34490[8] = inst_34424);
(statearr_34490[9] = inst_34425);
(statearr_34490[10] = inst_34426);
(statearr_34490[11] = inst_34423);
return statearr_34490;
})();var statearr_34491_34536 = state_34484__$1;(statearr_34491_34536[2] = null);
(statearr_34491_34536[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 6))
{var inst_34463 = (state_34484[12]);var inst_34461 = (state_34484[13]);var inst_34413 = (state_34484[7]);var inst_34461__$1 = topic_fn.call(null,inst_34413);var inst_34462 = cljs.core.deref.call(null,mults);var inst_34463__$1 = cljs.core.get.call(null,inst_34462,inst_34461__$1);var state_34484__$1 = (function (){var statearr_34492 = state_34484;(statearr_34492[12] = inst_34463__$1);
(statearr_34492[13] = inst_34461__$1);
return statearr_34492;
})();if(cljs.core.truth_(inst_34463__$1))
{var statearr_34493_34537 = state_34484__$1;(statearr_34493_34537[1] = 19);
} else
{var statearr_34494_34538 = state_34484__$1;(statearr_34494_34538[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 7))
{var inst_34480 = (state_34484[2]);var state_34484__$1 = state_34484;var statearr_34495_34539 = state_34484__$1;(statearr_34495_34539[2] = inst_34480);
(statearr_34495_34539[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 8))
{var inst_34425 = (state_34484[9]);var inst_34426 = (state_34484[10]);var inst_34428 = (inst_34426 < inst_34425);var inst_34429 = inst_34428;var state_34484__$1 = state_34484;if(cljs.core.truth_(inst_34429))
{var statearr_34499_34540 = state_34484__$1;(statearr_34499_34540[1] = 10);
} else
{var statearr_34500_34541 = state_34484__$1;(statearr_34500_34541[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 9))
{var inst_34459 = (state_34484[2]);var state_34484__$1 = state_34484;var statearr_34501_34542 = state_34484__$1;(statearr_34501_34542[2] = inst_34459);
(statearr_34501_34542[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 10))
{var inst_34424 = (state_34484[8]);var inst_34425 = (state_34484[9]);var inst_34426 = (state_34484[10]);var inst_34423 = (state_34484[11]);var inst_34431 = cljs.core._nth.call(null,inst_34424,inst_34426);var inst_34432 = cljs.core.async.muxch_STAR_.call(null,inst_34431);var inst_34433 = cljs.core.async.close_BANG_.call(null,inst_34432);var inst_34434 = (inst_34426 + 1);var tmp34496 = inst_34424;var tmp34497 = inst_34425;var tmp34498 = inst_34423;var inst_34423__$1 = tmp34498;var inst_34424__$1 = tmp34496;var inst_34425__$1 = tmp34497;var inst_34426__$1 = inst_34434;var state_34484__$1 = (function (){var statearr_34502 = state_34484;(statearr_34502[8] = inst_34424__$1);
(statearr_34502[14] = inst_34433);
(statearr_34502[9] = inst_34425__$1);
(statearr_34502[10] = inst_34426__$1);
(statearr_34502[11] = inst_34423__$1);
return statearr_34502;
})();var statearr_34503_34543 = state_34484__$1;(statearr_34503_34543[2] = null);
(statearr_34503_34543[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 11))
{var inst_34437 = (state_34484[15]);var inst_34423 = (state_34484[11]);var inst_34437__$1 = cljs.core.seq.call(null,inst_34423);var state_34484__$1 = (function (){var statearr_34504 = state_34484;(statearr_34504[15] = inst_34437__$1);
return statearr_34504;
})();if(inst_34437__$1)
{var statearr_34505_34544 = state_34484__$1;(statearr_34505_34544[1] = 13);
} else
{var statearr_34506_34545 = state_34484__$1;(statearr_34506_34545[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 12))
{var inst_34457 = (state_34484[2]);var state_34484__$1 = state_34484;var statearr_34507_34546 = state_34484__$1;(statearr_34507_34546[2] = inst_34457);
(statearr_34507_34546[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 13))
{var inst_34437 = (state_34484[15]);var inst_34439 = cljs.core.chunked_seq_QMARK_.call(null,inst_34437);var state_34484__$1 = state_34484;if(inst_34439)
{var statearr_34508_34547 = state_34484__$1;(statearr_34508_34547[1] = 16);
} else
{var statearr_34509_34548 = state_34484__$1;(statearr_34509_34548[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 14))
{var state_34484__$1 = state_34484;var statearr_34510_34549 = state_34484__$1;(statearr_34510_34549[2] = null);
(statearr_34510_34549[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 15))
{var inst_34455 = (state_34484[2]);var state_34484__$1 = state_34484;var statearr_34511_34550 = state_34484__$1;(statearr_34511_34550[2] = inst_34455);
(statearr_34511_34550[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 16))
{var inst_34437 = (state_34484[15]);var inst_34441 = cljs.core.chunk_first.call(null,inst_34437);var inst_34442 = cljs.core.chunk_rest.call(null,inst_34437);var inst_34443 = cljs.core.count.call(null,inst_34441);var inst_34423 = inst_34442;var inst_34424 = inst_34441;var inst_34425 = inst_34443;var inst_34426 = 0;var state_34484__$1 = (function (){var statearr_34512 = state_34484;(statearr_34512[8] = inst_34424);
(statearr_34512[9] = inst_34425);
(statearr_34512[10] = inst_34426);
(statearr_34512[11] = inst_34423);
return statearr_34512;
})();var statearr_34513_34551 = state_34484__$1;(statearr_34513_34551[2] = null);
(statearr_34513_34551[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 17))
{var inst_34437 = (state_34484[15]);var inst_34446 = cljs.core.first.call(null,inst_34437);var inst_34447 = cljs.core.async.muxch_STAR_.call(null,inst_34446);var inst_34448 = cljs.core.async.close_BANG_.call(null,inst_34447);var inst_34449 = cljs.core.next.call(null,inst_34437);var inst_34423 = inst_34449;var inst_34424 = null;var inst_34425 = 0;var inst_34426 = 0;var state_34484__$1 = (function (){var statearr_34514 = state_34484;(statearr_34514[16] = inst_34448);
(statearr_34514[8] = inst_34424);
(statearr_34514[9] = inst_34425);
(statearr_34514[10] = inst_34426);
(statearr_34514[11] = inst_34423);
return statearr_34514;
})();var statearr_34515_34552 = state_34484__$1;(statearr_34515_34552[2] = null);
(statearr_34515_34552[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 18))
{var inst_34452 = (state_34484[2]);var state_34484__$1 = state_34484;var statearr_34516_34553 = state_34484__$1;(statearr_34516_34553[2] = inst_34452);
(statearr_34516_34553[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 19))
{var state_34484__$1 = state_34484;var statearr_34517_34554 = state_34484__$1;(statearr_34517_34554[2] = null);
(statearr_34517_34554[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 20))
{var state_34484__$1 = state_34484;var statearr_34518_34555 = state_34484__$1;(statearr_34518_34555[2] = null);
(statearr_34518_34555[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 21))
{var inst_34477 = (state_34484[2]);var state_34484__$1 = (function (){var statearr_34519 = state_34484;(statearr_34519[17] = inst_34477);
return statearr_34519;
})();var statearr_34520_34556 = state_34484__$1;(statearr_34520_34556[2] = null);
(statearr_34520_34556[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 22))
{var inst_34474 = (state_34484[2]);var state_34484__$1 = state_34484;var statearr_34521_34557 = state_34484__$1;(statearr_34521_34557[2] = inst_34474);
(statearr_34521_34557[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 23))
{var inst_34461 = (state_34484[13]);var inst_34465 = (state_34484[2]);var inst_34466 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34461);var state_34484__$1 = (function (){var statearr_34522 = state_34484;(statearr_34522[18] = inst_34465);
return statearr_34522;
})();var statearr_34523_34558 = state_34484__$1;(statearr_34523_34558[2] = inst_34466);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34484__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34485 === 24))
{var inst_34463 = (state_34484[12]);var inst_34413 = (state_34484[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34484,23,Object,null,22);var inst_34470 = cljs.core.async.muxch_STAR_.call(null,inst_34463);var state_34484__$1 = state_34484;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34484__$1,25,inst_34470,inst_34413);
} else
{if((state_val_34485 === 25))
{var inst_34472 = (state_34484[2]);var state_34484__$1 = state_34484;var statearr_34524_34559 = state_34484__$1;(statearr_34524_34559[2] = inst_34472);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34484__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_34528 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34528[0] = state_machine__5507__auto__);
(statearr_34528[1] = 1);
return statearr_34528;
});
var state_machine__5507__auto____1 = (function (state_34484){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34484);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34529){if((e34529 instanceof Object))
{var ex__5510__auto__ = e34529;var statearr_34530_34560 = state_34484;(statearr_34530_34560[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34484);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34529;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34561 = state_34484;
state_34484 = G__34561;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34531 = f__5522__auto__.call(null);(statearr_34531[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34532);
return statearr_34531;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___34698 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34668){var state_val_34669 = (state_34668[1]);if((state_val_34669 === 1))
{var state_34668__$1 = state_34668;var statearr_34670_34699 = state_34668__$1;(statearr_34670_34699[2] = null);
(statearr_34670_34699[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 2))
{var inst_34631 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_34632 = 0;var state_34668__$1 = (function (){var statearr_34671 = state_34668;(statearr_34671[7] = inst_34632);
(statearr_34671[8] = inst_34631);
return statearr_34671;
})();var statearr_34672_34700 = state_34668__$1;(statearr_34672_34700[2] = null);
(statearr_34672_34700[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 3))
{var inst_34666 = (state_34668[2]);var state_34668__$1 = state_34668;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34668__$1,inst_34666);
} else
{if((state_val_34669 === 4))
{var inst_34632 = (state_34668[7]);var inst_34634 = (inst_34632 < cnt);var state_34668__$1 = state_34668;if(cljs.core.truth_(inst_34634))
{var statearr_34673_34701 = state_34668__$1;(statearr_34673_34701[1] = 6);
} else
{var statearr_34674_34702 = state_34668__$1;(statearr_34674_34702[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 5))
{var inst_34652 = (state_34668[2]);var state_34668__$1 = (function (){var statearr_34675 = state_34668;(statearr_34675[9] = inst_34652);
return statearr_34675;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34668__$1,12,dchan);
} else
{if((state_val_34669 === 6))
{var state_34668__$1 = state_34668;var statearr_34676_34703 = state_34668__$1;(statearr_34676_34703[2] = null);
(statearr_34676_34703[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 7))
{var state_34668__$1 = state_34668;var statearr_34677_34704 = state_34668__$1;(statearr_34677_34704[2] = null);
(statearr_34677_34704[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 8))
{var inst_34650 = (state_34668[2]);var state_34668__$1 = state_34668;var statearr_34678_34705 = state_34668__$1;(statearr_34678_34705[2] = inst_34650);
(statearr_34678_34705[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 9))
{var inst_34632 = (state_34668[7]);var inst_34645 = (state_34668[2]);var inst_34646 = (inst_34632 + 1);var inst_34632__$1 = inst_34646;var state_34668__$1 = (function (){var statearr_34679 = state_34668;(statearr_34679[10] = inst_34645);
(statearr_34679[7] = inst_34632__$1);
return statearr_34679;
})();var statearr_34680_34706 = state_34668__$1;(statearr_34680_34706[2] = null);
(statearr_34680_34706[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 10))
{var inst_34636 = (state_34668[2]);var inst_34637 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_34668__$1 = (function (){var statearr_34681 = state_34668;(statearr_34681[11] = inst_34636);
return statearr_34681;
})();var statearr_34682_34707 = state_34668__$1;(statearr_34682_34707[2] = inst_34637);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34668__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 11))
{var inst_34632 = (state_34668[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34668,10,Object,null,9);var inst_34641 = chs__$1.call(null,inst_34632);var inst_34642 = done.call(null,inst_34632);var inst_34643 = cljs.core.async.take_BANG_.call(null,inst_34641,inst_34642);var state_34668__$1 = state_34668;var statearr_34683_34708 = state_34668__$1;(statearr_34683_34708[2] = inst_34643);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34668__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 12))
{var inst_34654 = (state_34668[12]);var inst_34654__$1 = (state_34668[2]);var inst_34655 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34654__$1);var state_34668__$1 = (function (){var statearr_34684 = state_34668;(statearr_34684[12] = inst_34654__$1);
return statearr_34684;
})();if(cljs.core.truth_(inst_34655))
{var statearr_34685_34709 = state_34668__$1;(statearr_34685_34709[1] = 13);
} else
{var statearr_34686_34710 = state_34668__$1;(statearr_34686_34710[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 13))
{var inst_34657 = cljs.core.async.close_BANG_.call(null,out);var state_34668__$1 = state_34668;var statearr_34687_34711 = state_34668__$1;(statearr_34687_34711[2] = inst_34657);
(statearr_34687_34711[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 14))
{var inst_34654 = (state_34668[12]);var inst_34659 = cljs.core.apply.call(null,f,inst_34654);var state_34668__$1 = state_34668;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34668__$1,16,out,inst_34659);
} else
{if((state_val_34669 === 15))
{var inst_34664 = (state_34668[2]);var state_34668__$1 = state_34668;var statearr_34688_34712 = state_34668__$1;(statearr_34688_34712[2] = inst_34664);
(statearr_34688_34712[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34669 === 16))
{var inst_34661 = (state_34668[2]);var state_34668__$1 = (function (){var statearr_34689 = state_34668;(statearr_34689[13] = inst_34661);
return statearr_34689;
})();var statearr_34690_34713 = state_34668__$1;(statearr_34690_34713[2] = null);
(statearr_34690_34713[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34694 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34694[0] = state_machine__5507__auto__);
(statearr_34694[1] = 1);
return statearr_34694;
});
var state_machine__5507__auto____1 = (function (state_34668){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34668);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34695){if((e34695 instanceof Object))
{var ex__5510__auto__ = e34695;var statearr_34696_34714 = state_34668;(statearr_34696_34714[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34668);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34695;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34715 = state_34668;
state_34668 = G__34715;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34668){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34668);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34697 = f__5522__auto__.call(null);(statearr_34697[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34698);
return statearr_34697;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34823 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34799){var state_val_34800 = (state_34799[1]);if((state_val_34800 === 1))
{var inst_34770 = cljs.core.vec.call(null,chs);var inst_34771 = inst_34770;var state_34799__$1 = (function (){var statearr_34801 = state_34799;(statearr_34801[7] = inst_34771);
return statearr_34801;
})();var statearr_34802_34824 = state_34799__$1;(statearr_34802_34824[2] = null);
(statearr_34802_34824[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 2))
{var inst_34771 = (state_34799[7]);var inst_34773 = cljs.core.count.call(null,inst_34771);var inst_34774 = (inst_34773 > 0);var state_34799__$1 = state_34799;if(cljs.core.truth_(inst_34774))
{var statearr_34803_34825 = state_34799__$1;(statearr_34803_34825[1] = 4);
} else
{var statearr_34804_34826 = state_34799__$1;(statearr_34804_34826[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 3))
{var inst_34797 = (state_34799[2]);var state_34799__$1 = state_34799;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34799__$1,inst_34797);
} else
{if((state_val_34800 === 4))
{var inst_34771 = (state_34799[7]);var state_34799__$1 = state_34799;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_34799__$1,7,inst_34771);
} else
{if((state_val_34800 === 5))
{var inst_34793 = cljs.core.async.close_BANG_.call(null,out);var state_34799__$1 = state_34799;var statearr_34805_34827 = state_34799__$1;(statearr_34805_34827[2] = inst_34793);
(statearr_34805_34827[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 6))
{var inst_34795 = (state_34799[2]);var state_34799__$1 = state_34799;var statearr_34806_34828 = state_34799__$1;(statearr_34806_34828[2] = inst_34795);
(statearr_34806_34828[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 7))
{var inst_34778 = (state_34799[8]);var inst_34779 = (state_34799[9]);var inst_34778__$1 = (state_34799[2]);var inst_34779__$1 = cljs.core.nth.call(null,inst_34778__$1,0,null);var inst_34780 = cljs.core.nth.call(null,inst_34778__$1,1,null);var inst_34781 = (inst_34779__$1 == null);var state_34799__$1 = (function (){var statearr_34807 = state_34799;(statearr_34807[10] = inst_34780);
(statearr_34807[8] = inst_34778__$1);
(statearr_34807[9] = inst_34779__$1);
return statearr_34807;
})();if(cljs.core.truth_(inst_34781))
{var statearr_34808_34829 = state_34799__$1;(statearr_34808_34829[1] = 8);
} else
{var statearr_34809_34830 = state_34799__$1;(statearr_34809_34830[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 8))
{var inst_34771 = (state_34799[7]);var inst_34780 = (state_34799[10]);var inst_34778 = (state_34799[8]);var inst_34779 = (state_34799[9]);var inst_34783 = (function (){var c = inst_34780;var v = inst_34779;var vec__34776 = inst_34778;var cs = inst_34771;return ((function (c,v,vec__34776,cs,inst_34771,inst_34780,inst_34778,inst_34779,state_val_34800){
return (function (p1__34716_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__34716_SHARP_);
});
;})(c,v,vec__34776,cs,inst_34771,inst_34780,inst_34778,inst_34779,state_val_34800))
})();var inst_34784 = cljs.core.filterv.call(null,inst_34783,inst_34771);var inst_34771__$1 = inst_34784;var state_34799__$1 = (function (){var statearr_34810 = state_34799;(statearr_34810[7] = inst_34771__$1);
return statearr_34810;
})();var statearr_34811_34831 = state_34799__$1;(statearr_34811_34831[2] = null);
(statearr_34811_34831[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 9))
{var inst_34779 = (state_34799[9]);var state_34799__$1 = state_34799;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34799__$1,11,out,inst_34779);
} else
{if((state_val_34800 === 10))
{var inst_34791 = (state_34799[2]);var state_34799__$1 = state_34799;var statearr_34813_34832 = state_34799__$1;(statearr_34813_34832[2] = inst_34791);
(statearr_34813_34832[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34800 === 11))
{var inst_34771 = (state_34799[7]);var inst_34788 = (state_34799[2]);var tmp34812 = inst_34771;var inst_34771__$1 = tmp34812;var state_34799__$1 = (function (){var statearr_34814 = state_34799;(statearr_34814[7] = inst_34771__$1);
(statearr_34814[11] = inst_34788);
return statearr_34814;
})();var statearr_34815_34833 = state_34799__$1;(statearr_34815_34833[2] = null);
(statearr_34815_34833[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34819 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34819[0] = state_machine__5507__auto__);
(statearr_34819[1] = 1);
return statearr_34819;
});
var state_machine__5507__auto____1 = (function (state_34799){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34799);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34820){if((e34820 instanceof Object))
{var ex__5510__auto__ = e34820;var statearr_34821_34834 = state_34799;(statearr_34821_34834[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34799);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34820;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34835 = state_34799;
state_34799 = G__34835;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34799){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34822 = f__5522__auto__.call(null);(statearr_34822[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34823);
return statearr_34822;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34928 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34905){var state_val_34906 = (state_34905[1]);if((state_val_34906 === 1))
{var inst_34882 = 0;var state_34905__$1 = (function (){var statearr_34907 = state_34905;(statearr_34907[7] = inst_34882);
return statearr_34907;
})();var statearr_34908_34929 = state_34905__$1;(statearr_34908_34929[2] = null);
(statearr_34908_34929[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34906 === 2))
{var inst_34882 = (state_34905[7]);var inst_34884 = (inst_34882 < n);var state_34905__$1 = state_34905;if(cljs.core.truth_(inst_34884))
{var statearr_34909_34930 = state_34905__$1;(statearr_34909_34930[1] = 4);
} else
{var statearr_34910_34931 = state_34905__$1;(statearr_34910_34931[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34906 === 3))
{var inst_34902 = (state_34905[2]);var inst_34903 = cljs.core.async.close_BANG_.call(null,out);var state_34905__$1 = (function (){var statearr_34911 = state_34905;(statearr_34911[8] = inst_34902);
return statearr_34911;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34905__$1,inst_34903);
} else
{if((state_val_34906 === 4))
{var state_34905__$1 = state_34905;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34905__$1,7,ch);
} else
{if((state_val_34906 === 5))
{var state_34905__$1 = state_34905;var statearr_34912_34932 = state_34905__$1;(statearr_34912_34932[2] = null);
(statearr_34912_34932[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34906 === 6))
{var inst_34900 = (state_34905[2]);var state_34905__$1 = state_34905;var statearr_34913_34933 = state_34905__$1;(statearr_34913_34933[2] = inst_34900);
(statearr_34913_34933[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34906 === 7))
{var inst_34887 = (state_34905[9]);var inst_34887__$1 = (state_34905[2]);var inst_34888 = (inst_34887__$1 == null);var inst_34889 = cljs.core.not.call(null,inst_34888);var state_34905__$1 = (function (){var statearr_34914 = state_34905;(statearr_34914[9] = inst_34887__$1);
return statearr_34914;
})();if(inst_34889)
{var statearr_34915_34934 = state_34905__$1;(statearr_34915_34934[1] = 8);
} else
{var statearr_34916_34935 = state_34905__$1;(statearr_34916_34935[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34906 === 8))
{var inst_34887 = (state_34905[9]);var state_34905__$1 = state_34905;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34905__$1,11,out,inst_34887);
} else
{if((state_val_34906 === 9))
{var state_34905__$1 = state_34905;var statearr_34917_34936 = state_34905__$1;(statearr_34917_34936[2] = null);
(statearr_34917_34936[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34906 === 10))
{var inst_34897 = (state_34905[2]);var state_34905__$1 = state_34905;var statearr_34918_34937 = state_34905__$1;(statearr_34918_34937[2] = inst_34897);
(statearr_34918_34937[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34906 === 11))
{var inst_34882 = (state_34905[7]);var inst_34892 = (state_34905[2]);var inst_34893 = (inst_34882 + 1);var inst_34882__$1 = inst_34893;var state_34905__$1 = (function (){var statearr_34919 = state_34905;(statearr_34919[10] = inst_34892);
(statearr_34919[7] = inst_34882__$1);
return statearr_34919;
})();var statearr_34920_34938 = state_34905__$1;(statearr_34920_34938[2] = null);
(statearr_34920_34938[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34924 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_34924[0] = state_machine__5507__auto__);
(statearr_34924[1] = 1);
return statearr_34924;
});
var state_machine__5507__auto____1 = (function (state_34905){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34905);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34925){if((e34925 instanceof Object))
{var ex__5510__auto__ = e34925;var statearr_34926_34939 = state_34905;(statearr_34926_34939[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34905);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34925;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34940 = state_34905;
state_34905 = G__34940;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34905){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34905);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34927 = f__5522__auto__.call(null);(statearr_34927[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34928);
return statearr_34927;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35037 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35012){var state_val_35013 = (state_35012[1]);if((state_val_35013 === 1))
{var inst_34989 = null;var state_35012__$1 = (function (){var statearr_35014 = state_35012;(statearr_35014[7] = inst_34989);
return statearr_35014;
})();var statearr_35015_35038 = state_35012__$1;(statearr_35015_35038[2] = null);
(statearr_35015_35038[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35013 === 2))
{var state_35012__$1 = state_35012;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35012__$1,4,ch);
} else
{if((state_val_35013 === 3))
{var inst_35009 = (state_35012[2]);var inst_35010 = cljs.core.async.close_BANG_.call(null,out);var state_35012__$1 = (function (){var statearr_35016 = state_35012;(statearr_35016[8] = inst_35009);
return statearr_35016;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35012__$1,inst_35010);
} else
{if((state_val_35013 === 4))
{var inst_34992 = (state_35012[9]);var inst_34992__$1 = (state_35012[2]);var inst_34993 = (inst_34992__$1 == null);var inst_34994 = cljs.core.not.call(null,inst_34993);var state_35012__$1 = (function (){var statearr_35017 = state_35012;(statearr_35017[9] = inst_34992__$1);
return statearr_35017;
})();if(inst_34994)
{var statearr_35018_35039 = state_35012__$1;(statearr_35018_35039[1] = 5);
} else
{var statearr_35019_35040 = state_35012__$1;(statearr_35019_35040[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35013 === 5))
{var inst_34989 = (state_35012[7]);var inst_34992 = (state_35012[9]);var inst_34996 = cljs.core._EQ_.call(null,inst_34992,inst_34989);var state_35012__$1 = state_35012;if(inst_34996)
{var statearr_35020_35041 = state_35012__$1;(statearr_35020_35041[1] = 8);
} else
{var statearr_35021_35042 = state_35012__$1;(statearr_35021_35042[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35013 === 6))
{var state_35012__$1 = state_35012;var statearr_35023_35043 = state_35012__$1;(statearr_35023_35043[2] = null);
(statearr_35023_35043[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35013 === 7))
{var inst_35007 = (state_35012[2]);var state_35012__$1 = state_35012;var statearr_35024_35044 = state_35012__$1;(statearr_35024_35044[2] = inst_35007);
(statearr_35024_35044[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35013 === 8))
{var inst_34989 = (state_35012[7]);var tmp35022 = inst_34989;var inst_34989__$1 = tmp35022;var state_35012__$1 = (function (){var statearr_35025 = state_35012;(statearr_35025[7] = inst_34989__$1);
return statearr_35025;
})();var statearr_35026_35045 = state_35012__$1;(statearr_35026_35045[2] = null);
(statearr_35026_35045[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35013 === 9))
{var inst_34992 = (state_35012[9]);var state_35012__$1 = state_35012;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35012__$1,11,out,inst_34992);
} else
{if((state_val_35013 === 10))
{var inst_35004 = (state_35012[2]);var state_35012__$1 = state_35012;var statearr_35027_35046 = state_35012__$1;(statearr_35027_35046[2] = inst_35004);
(statearr_35027_35046[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35013 === 11))
{var inst_34992 = (state_35012[9]);var inst_35001 = (state_35012[2]);var inst_34989 = inst_34992;var state_35012__$1 = (function (){var statearr_35028 = state_35012;(statearr_35028[7] = inst_34989);
(statearr_35028[10] = inst_35001);
return statearr_35028;
})();var statearr_35029_35047 = state_35012__$1;(statearr_35029_35047[2] = null);
(statearr_35029_35047[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35033 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_35033[0] = state_machine__5507__auto__);
(statearr_35033[1] = 1);
return statearr_35033;
});
var state_machine__5507__auto____1 = (function (state_35012){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35012);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35034){if((e35034 instanceof Object))
{var ex__5510__auto__ = e35034;var statearr_35035_35048 = state_35012;(statearr_35035_35048[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35012);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35034;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35049 = state_35012;
state_35012 = G__35049;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35012){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35012);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35036 = f__5522__auto__.call(null);(statearr_35036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35037);
return statearr_35036;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35184 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35154){var state_val_35155 = (state_35154[1]);if((state_val_35155 === 1))
{var inst_35117 = (new Array(n));var inst_35118 = inst_35117;var inst_35119 = 0;var state_35154__$1 = (function (){var statearr_35156 = state_35154;(statearr_35156[7] = inst_35118);
(statearr_35156[8] = inst_35119);
return statearr_35156;
})();var statearr_35157_35185 = state_35154__$1;(statearr_35157_35185[2] = null);
(statearr_35157_35185[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 2))
{var state_35154__$1 = state_35154;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35154__$1,4,ch);
} else
{if((state_val_35155 === 3))
{var inst_35152 = (state_35154[2]);var state_35154__$1 = state_35154;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35154__$1,inst_35152);
} else
{if((state_val_35155 === 4))
{var inst_35122 = (state_35154[9]);var inst_35122__$1 = (state_35154[2]);var inst_35123 = (inst_35122__$1 == null);var inst_35124 = cljs.core.not.call(null,inst_35123);var state_35154__$1 = (function (){var statearr_35158 = state_35154;(statearr_35158[9] = inst_35122__$1);
return statearr_35158;
})();if(inst_35124)
{var statearr_35159_35186 = state_35154__$1;(statearr_35159_35186[1] = 5);
} else
{var statearr_35160_35187 = state_35154__$1;(statearr_35160_35187[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 5))
{var inst_35127 = (state_35154[10]);var inst_35118 = (state_35154[7]);var inst_35119 = (state_35154[8]);var inst_35122 = (state_35154[9]);var inst_35126 = (inst_35118[inst_35119] = inst_35122);var inst_35127__$1 = (inst_35119 + 1);var inst_35128 = (inst_35127__$1 < n);var state_35154__$1 = (function (){var statearr_35161 = state_35154;(statearr_35161[10] = inst_35127__$1);
(statearr_35161[11] = inst_35126);
return statearr_35161;
})();if(cljs.core.truth_(inst_35128))
{var statearr_35162_35188 = state_35154__$1;(statearr_35162_35188[1] = 8);
} else
{var statearr_35163_35189 = state_35154__$1;(statearr_35163_35189[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 6))
{var inst_35119 = (state_35154[8]);var inst_35140 = (inst_35119 > 0);var state_35154__$1 = state_35154;if(cljs.core.truth_(inst_35140))
{var statearr_35165_35190 = state_35154__$1;(statearr_35165_35190[1] = 12);
} else
{var statearr_35166_35191 = state_35154__$1;(statearr_35166_35191[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 7))
{var inst_35150 = (state_35154[2]);var state_35154__$1 = state_35154;var statearr_35167_35192 = state_35154__$1;(statearr_35167_35192[2] = inst_35150);
(statearr_35167_35192[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 8))
{var inst_35127 = (state_35154[10]);var inst_35118 = (state_35154[7]);var tmp35164 = inst_35118;var inst_35118__$1 = tmp35164;var inst_35119 = inst_35127;var state_35154__$1 = (function (){var statearr_35168 = state_35154;(statearr_35168[7] = inst_35118__$1);
(statearr_35168[8] = inst_35119);
return statearr_35168;
})();var statearr_35169_35193 = state_35154__$1;(statearr_35169_35193[2] = null);
(statearr_35169_35193[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 9))
{var inst_35118 = (state_35154[7]);var inst_35132 = cljs.core.vec.call(null,inst_35118);var state_35154__$1 = state_35154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35154__$1,11,out,inst_35132);
} else
{if((state_val_35155 === 10))
{var inst_35138 = (state_35154[2]);var state_35154__$1 = state_35154;var statearr_35170_35194 = state_35154__$1;(statearr_35170_35194[2] = inst_35138);
(statearr_35170_35194[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 11))
{var inst_35134 = (state_35154[2]);var inst_35135 = (new Array(n));var inst_35118 = inst_35135;var inst_35119 = 0;var state_35154__$1 = (function (){var statearr_35171 = state_35154;(statearr_35171[12] = inst_35134);
(statearr_35171[7] = inst_35118);
(statearr_35171[8] = inst_35119);
return statearr_35171;
})();var statearr_35172_35195 = state_35154__$1;(statearr_35172_35195[2] = null);
(statearr_35172_35195[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 12))
{var inst_35118 = (state_35154[7]);var inst_35142 = cljs.core.vec.call(null,inst_35118);var state_35154__$1 = state_35154;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35154__$1,15,out,inst_35142);
} else
{if((state_val_35155 === 13))
{var state_35154__$1 = state_35154;var statearr_35173_35196 = state_35154__$1;(statearr_35173_35196[2] = null);
(statearr_35173_35196[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 14))
{var inst_35147 = (state_35154[2]);var inst_35148 = cljs.core.async.close_BANG_.call(null,out);var state_35154__$1 = (function (){var statearr_35174 = state_35154;(statearr_35174[13] = inst_35147);
return statearr_35174;
})();var statearr_35175_35197 = state_35154__$1;(statearr_35175_35197[2] = inst_35148);
(statearr_35175_35197[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35155 === 15))
{var inst_35144 = (state_35154[2]);var state_35154__$1 = state_35154;var statearr_35176_35198 = state_35154__$1;(statearr_35176_35198[2] = inst_35144);
(statearr_35176_35198[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35180 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35180[0] = state_machine__5507__auto__);
(statearr_35180[1] = 1);
return statearr_35180;
});
var state_machine__5507__auto____1 = (function (state_35154){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35154);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35181){if((e35181 instanceof Object))
{var ex__5510__auto__ = e35181;var statearr_35182_35199 = state_35154;(statearr_35182_35199[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35154);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35181;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35200 = state_35154;
state_35154 = G__35200;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35154){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35154);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35183 = f__5522__auto__.call(null);(statearr_35183[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35184);
return statearr_35183;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___35343 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35313){var state_val_35314 = (state_35313[1]);if((state_val_35314 === 1))
{var inst_35272 = [];var inst_35273 = inst_35272;var inst_35274 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_35313__$1 = (function (){var statearr_35315 = state_35313;(statearr_35315[7] = inst_35274);
(statearr_35315[8] = inst_35273);
return statearr_35315;
})();var statearr_35316_35344 = state_35313__$1;(statearr_35316_35344[2] = null);
(statearr_35316_35344[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 2))
{var state_35313__$1 = state_35313;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35313__$1,4,ch);
} else
{if((state_val_35314 === 3))
{var inst_35311 = (state_35313[2]);var state_35313__$1 = state_35313;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35313__$1,inst_35311);
} else
{if((state_val_35314 === 4))
{var inst_35277 = (state_35313[9]);var inst_35277__$1 = (state_35313[2]);var inst_35278 = (inst_35277__$1 == null);var inst_35279 = cljs.core.not.call(null,inst_35278);var state_35313__$1 = (function (){var statearr_35317 = state_35313;(statearr_35317[9] = inst_35277__$1);
return statearr_35317;
})();if(inst_35279)
{var statearr_35318_35345 = state_35313__$1;(statearr_35318_35345[1] = 5);
} else
{var statearr_35319_35346 = state_35313__$1;(statearr_35319_35346[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 5))
{var inst_35277 = (state_35313[9]);var inst_35274 = (state_35313[7]);var inst_35281 = (state_35313[10]);var inst_35281__$1 = f.call(null,inst_35277);var inst_35282 = cljs.core._EQ_.call(null,inst_35281__$1,inst_35274);var inst_35283 = cljs.core.keyword_identical_QMARK_.call(null,inst_35274,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_35284 = (inst_35282) || (inst_35283);var state_35313__$1 = (function (){var statearr_35320 = state_35313;(statearr_35320[10] = inst_35281__$1);
return statearr_35320;
})();if(cljs.core.truth_(inst_35284))
{var statearr_35321_35347 = state_35313__$1;(statearr_35321_35347[1] = 8);
} else
{var statearr_35322_35348 = state_35313__$1;(statearr_35322_35348[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 6))
{var inst_35273 = (state_35313[8]);var inst_35298 = inst_35273.length;var inst_35299 = (inst_35298 > 0);var state_35313__$1 = state_35313;if(cljs.core.truth_(inst_35299))
{var statearr_35324_35349 = state_35313__$1;(statearr_35324_35349[1] = 12);
} else
{var statearr_35325_35350 = state_35313__$1;(statearr_35325_35350[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 7))
{var inst_35309 = (state_35313[2]);var state_35313__$1 = state_35313;var statearr_35326_35351 = state_35313__$1;(statearr_35326_35351[2] = inst_35309);
(statearr_35326_35351[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 8))
{var inst_35277 = (state_35313[9]);var inst_35273 = (state_35313[8]);var inst_35281 = (state_35313[10]);var inst_35286 = inst_35273.push(inst_35277);var tmp35323 = inst_35273;var inst_35273__$1 = tmp35323;var inst_35274 = inst_35281;var state_35313__$1 = (function (){var statearr_35327 = state_35313;(statearr_35327[7] = inst_35274);
(statearr_35327[8] = inst_35273__$1);
(statearr_35327[11] = inst_35286);
return statearr_35327;
})();var statearr_35328_35352 = state_35313__$1;(statearr_35328_35352[2] = null);
(statearr_35328_35352[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 9))
{var inst_35273 = (state_35313[8]);var inst_35289 = cljs.core.vec.call(null,inst_35273);var state_35313__$1 = state_35313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35313__$1,11,out,inst_35289);
} else
{if((state_val_35314 === 10))
{var inst_35296 = (state_35313[2]);var state_35313__$1 = state_35313;var statearr_35329_35353 = state_35313__$1;(statearr_35329_35353[2] = inst_35296);
(statearr_35329_35353[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 11))
{var inst_35277 = (state_35313[9]);var inst_35281 = (state_35313[10]);var inst_35291 = (state_35313[2]);var inst_35292 = [];var inst_35293 = inst_35292.push(inst_35277);var inst_35273 = inst_35292;var inst_35274 = inst_35281;var state_35313__$1 = (function (){var statearr_35330 = state_35313;(statearr_35330[12] = inst_35293);
(statearr_35330[7] = inst_35274);
(statearr_35330[8] = inst_35273);
(statearr_35330[13] = inst_35291);
return statearr_35330;
})();var statearr_35331_35354 = state_35313__$1;(statearr_35331_35354[2] = null);
(statearr_35331_35354[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 12))
{var inst_35273 = (state_35313[8]);var inst_35301 = cljs.core.vec.call(null,inst_35273);var state_35313__$1 = state_35313;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35313__$1,15,out,inst_35301);
} else
{if((state_val_35314 === 13))
{var state_35313__$1 = state_35313;var statearr_35332_35355 = state_35313__$1;(statearr_35332_35355[2] = null);
(statearr_35332_35355[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 14))
{var inst_35306 = (state_35313[2]);var inst_35307 = cljs.core.async.close_BANG_.call(null,out);var state_35313__$1 = (function (){var statearr_35333 = state_35313;(statearr_35333[14] = inst_35306);
return statearr_35333;
})();var statearr_35334_35356 = state_35313__$1;(statearr_35334_35356[2] = inst_35307);
(statearr_35334_35356[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35314 === 15))
{var inst_35303 = (state_35313[2]);var state_35313__$1 = state_35313;var statearr_35335_35357 = state_35313__$1;(statearr_35335_35357[2] = inst_35303);
(statearr_35335_35357[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_35339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35339[0] = state_machine__5507__auto__);
(statearr_35339[1] = 1);
return statearr_35339;
});
var state_machine__5507__auto____1 = (function (state_35313){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35313);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35340){if((e35340 instanceof Object))
{var ex__5510__auto__ = e35340;var statearr_35341_35358 = state_35313;(statearr_35341_35358[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35313);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35340;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35359 = state_35313;
state_35313 = G__35359;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35313){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35342 = f__5522__auto__.call(null);(statearr_35342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35343);
return statearr_35342;
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

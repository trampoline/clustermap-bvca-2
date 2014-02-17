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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t34538 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34538 = (function (f,fn_handler,meta34539){
this.f = f;
this.fn_handler = fn_handler;
this.meta34539 = meta34539;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34538.cljs$lang$type = true;
cljs.core.async.t34538.cljs$lang$ctorStr = "cljs.core.async/t34538";
cljs.core.async.t34538.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34538");
});
cljs.core.async.t34538.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34538.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t34538.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t34538.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34540){var self__ = this;
var _34540__$1 = this;return self__.meta34539;
});
cljs.core.async.t34538.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34540,meta34539__$1){var self__ = this;
var _34540__$1 = this;return (new cljs.core.async.t34538(self__.f,self__.fn_handler,meta34539__$1));
});
cljs.core.async.__GT_t34538 = (function __GT_t34538(f__$1,fn_handler__$1,meta34539){return (new cljs.core.async.t34538(f__$1,fn_handler__$1,meta34539));
});
}
return (new cljs.core.async.t34538(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__34542 = buff;if(G__34542)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__34542.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__34542.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34542);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__34542);
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
{var val_34543 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_34543);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_34543);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___34544 = n;var x_34545 = 0;while(true){
if((x_34545 < n__4248__auto___34544))
{(a[x_34545] = 0);
{
var G__34546 = (x_34545 + 1);
x_34545 = G__34546;
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
var G__34547 = (i + 1);
i = G__34547;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t34551 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34551 = (function (flag,alt_flag,meta34552){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta34552 = meta34552;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34551.cljs$lang$type = true;
cljs.core.async.t34551.cljs$lang$ctorStr = "cljs.core.async/t34551";
cljs.core.async.t34551.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34551");
});
cljs.core.async.t34551.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34551.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t34551.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t34551.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34553){var self__ = this;
var _34553__$1 = this;return self__.meta34552;
});
cljs.core.async.t34551.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34553,meta34552__$1){var self__ = this;
var _34553__$1 = this;return (new cljs.core.async.t34551(self__.flag,self__.alt_flag,meta34552__$1));
});
cljs.core.async.__GT_t34551 = (function __GT_t34551(flag__$1,alt_flag__$1,meta34552){return (new cljs.core.async.t34551(flag__$1,alt_flag__$1,meta34552));
});
}
return (new cljs.core.async.t34551(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t34557 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34557 = (function (cb,flag,alt_handler,meta34558){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta34558 = meta34558;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34557.cljs$lang$type = true;
cljs.core.async.t34557.cljs$lang$ctorStr = "cljs.core.async/t34557";
cljs.core.async.t34557.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34557");
});
cljs.core.async.t34557.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34557.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t34557.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t34557.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34559){var self__ = this;
var _34559__$1 = this;return self__.meta34558;
});
cljs.core.async.t34557.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34559,meta34558__$1){var self__ = this;
var _34559__$1 = this;return (new cljs.core.async.t34557(self__.cb,self__.flag,self__.alt_handler,meta34558__$1));
});
cljs.core.async.__GT_t34557 = (function __GT_t34557(cb__$1,flag__$1,alt_handler__$1,meta34558){return (new cljs.core.async.t34557(cb__$1,flag__$1,alt_handler__$1,meta34558));
});
}
return (new cljs.core.async.t34557(cb,flag,alt_handler,null));
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
return (function (p1__34560_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34560_SHARP_,port], null));
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
var G__34561 = (i + 1);
i = G__34561;
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
var alts_BANG___delegate = function (ports,p__34562){var map__34564 = p__34562;var map__34564__$1 = ((cljs.core.seq_QMARK_.call(null,map__34564))?cljs.core.apply.call(null,cljs.core.hash_map,map__34564):map__34564);var opts = map__34564__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__34562 = null;if (arguments.length > 1) {
  p__34562 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__34562);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__34565){
var ports = cljs.core.first(arglist__34565);
var p__34562 = cljs.core.rest(arglist__34565);
return alts_BANG___delegate(ports,p__34562);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t34573 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34573 = (function (ch,f,map_LT_,meta34574){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34574 = meta34574;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34573.cljs$lang$type = true;
cljs.core.async.t34573.cljs$lang$ctorStr = "cljs.core.async/t34573";
cljs.core.async.t34573.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34573");
});
cljs.core.async.t34573.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34573.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t34573.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34573.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t34576 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34576 = (function (fn1,_,meta34574,ch,f,map_LT_,meta34577){
this.fn1 = fn1;
this._ = _;
this.meta34574 = meta34574;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta34577 = meta34577;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34576.cljs$lang$type = true;
cljs.core.async.t34576.cljs$lang$ctorStr = "cljs.core.async/t34576";
cljs.core.async.t34576.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34576");
});
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t34576.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__34566_SHARP_){return f1.call(null,(((p1__34566_SHARP_ == null))?null:self__.f.call(null,p1__34566_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t34576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34578){var self__ = this;
var _34578__$1 = this;return self__.meta34577;
});
cljs.core.async.t34576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34578,meta34577__$1){var self__ = this;
var _34578__$1 = this;return (new cljs.core.async.t34576(self__.fn1,self__._,self__.meta34574,self__.ch,self__.f,self__.map_LT_,meta34577__$1));
});
cljs.core.async.__GT_t34576 = (function __GT_t34576(fn1__$1,___$2,meta34574__$1,ch__$2,f__$2,map_LT___$2,meta34577){return (new cljs.core.async.t34576(fn1__$1,___$2,meta34574__$1,ch__$2,f__$2,map_LT___$2,meta34577));
});
}
return (new cljs.core.async.t34576(fn1,___$1,self__.meta34574,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t34573.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34573.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34575){var self__ = this;
var _34575__$1 = this;return self__.meta34574;
});
cljs.core.async.t34573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34575,meta34574__$1){var self__ = this;
var _34575__$1 = this;return (new cljs.core.async.t34573(self__.ch,self__.f,self__.map_LT_,meta34574__$1));
});
cljs.core.async.__GT_t34573 = (function __GT_t34573(ch__$1,f__$1,map_LT___$1,meta34574){return (new cljs.core.async.t34573(ch__$1,f__$1,map_LT___$1,meta34574));
});
}
return (new cljs.core.async.t34573(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t34582 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34582 = (function (ch,f,map_GT_,meta34583){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta34583 = meta34583;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34582.cljs$lang$type = true;
cljs.core.async.t34582.cljs$lang$ctorStr = "cljs.core.async/t34582";
cljs.core.async.t34582.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34582");
});
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34582.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34582.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34584){var self__ = this;
var _34584__$1 = this;return self__.meta34583;
});
cljs.core.async.t34582.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34584,meta34583__$1){var self__ = this;
var _34584__$1 = this;return (new cljs.core.async.t34582(self__.ch,self__.f,self__.map_GT_,meta34583__$1));
});
cljs.core.async.__GT_t34582 = (function __GT_t34582(ch__$1,f__$1,map_GT___$1,meta34583){return (new cljs.core.async.t34582(ch__$1,f__$1,map_GT___$1,meta34583));
});
}
return (new cljs.core.async.t34582(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t34588 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t34588 = (function (ch,p,filter_GT_,meta34589){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta34589 = meta34589;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t34588.cljs$lang$type = true;
cljs.core.async.t34588.cljs$lang$ctorStr = "cljs.core.async/t34588";
cljs.core.async.t34588.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t34588");
});
cljs.core.async.t34588.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t34588.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t34588.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t34588.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t34588.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t34588.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t34588.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34590){var self__ = this;
var _34590__$1 = this;return self__.meta34589;
});
cljs.core.async.t34588.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34590,meta34589__$1){var self__ = this;
var _34590__$1 = this;return (new cljs.core.async.t34588(self__.ch,self__.p,self__.filter_GT_,meta34589__$1));
});
cljs.core.async.__GT_t34588 = (function __GT_t34588(ch__$1,p__$1,filter_GT___$1,meta34589){return (new cljs.core.async.t34588(ch__$1,p__$1,filter_GT___$1,meta34589));
});
}
return (new cljs.core.async.t34588(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___34673 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34652){var state_val_34653 = (state_34652[1]);if((state_val_34653 === 1))
{var state_34652__$1 = state_34652;var statearr_34654_34674 = state_34652__$1;(statearr_34654_34674[2] = null);
(statearr_34654_34674[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34653 === 2))
{var state_34652__$1 = state_34652;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34652__$1,4,ch);
} else
{if((state_val_34653 === 3))
{var inst_34650 = (state_34652[2]);var state_34652__$1 = state_34652;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34652__$1,inst_34650);
} else
{if((state_val_34653 === 4))
{var inst_34634 = (state_34652[7]);var inst_34634__$1 = (state_34652[2]);var inst_34635 = (inst_34634__$1 == null);var state_34652__$1 = (function (){var statearr_34655 = state_34652;(statearr_34655[7] = inst_34634__$1);
return statearr_34655;
})();if(cljs.core.truth_(inst_34635))
{var statearr_34656_34675 = state_34652__$1;(statearr_34656_34675[1] = 5);
} else
{var statearr_34657_34676 = state_34652__$1;(statearr_34657_34676[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34653 === 5))
{var inst_34637 = cljs.core.async.close_BANG_.call(null,out);var state_34652__$1 = state_34652;var statearr_34658_34677 = state_34652__$1;(statearr_34658_34677[2] = inst_34637);
(statearr_34658_34677[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34653 === 6))
{var inst_34634 = (state_34652[7]);var inst_34639 = p.call(null,inst_34634);var state_34652__$1 = state_34652;if(cljs.core.truth_(inst_34639))
{var statearr_34659_34678 = state_34652__$1;(statearr_34659_34678[1] = 8);
} else
{var statearr_34660_34679 = state_34652__$1;(statearr_34660_34679[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34653 === 7))
{var inst_34648 = (state_34652[2]);var state_34652__$1 = state_34652;var statearr_34661_34680 = state_34652__$1;(statearr_34661_34680[2] = inst_34648);
(statearr_34661_34680[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34653 === 8))
{var inst_34634 = (state_34652[7]);var state_34652__$1 = state_34652;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34652__$1,11,out,inst_34634);
} else
{if((state_val_34653 === 9))
{var state_34652__$1 = state_34652;var statearr_34662_34681 = state_34652__$1;(statearr_34662_34681[2] = null);
(statearr_34662_34681[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34653 === 10))
{var inst_34645 = (state_34652[2]);var state_34652__$1 = (function (){var statearr_34663 = state_34652;(statearr_34663[8] = inst_34645);
return statearr_34663;
})();var statearr_34664_34682 = state_34652__$1;(statearr_34664_34682[2] = null);
(statearr_34664_34682[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34653 === 11))
{var inst_34642 = (state_34652[2]);var state_34652__$1 = state_34652;var statearr_34665_34683 = state_34652__$1;(statearr_34665_34683[2] = inst_34642);
(statearr_34665_34683[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_34669 = [null,null,null,null,null,null,null,null,null];(statearr_34669[0] = state_machine__5507__auto__);
(statearr_34669[1] = 1);
return statearr_34669;
});
var state_machine__5507__auto____1 = (function (state_34652){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34652);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34670){if((e34670 instanceof Object))
{var ex__5510__auto__ = e34670;var statearr_34671_34684 = state_34652;(statearr_34671_34684[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34652);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34670;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34685 = state_34652;
state_34652 = G__34685;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34652){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34672 = f__5522__auto__.call(null);(statearr_34672[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34673);
return statearr_34672;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34837){var state_val_34838 = (state_34837[1]);if((state_val_34838 === 1))
{var state_34837__$1 = state_34837;var statearr_34839_34876 = state_34837__$1;(statearr_34839_34876[2] = null);
(statearr_34839_34876[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 2))
{var state_34837__$1 = state_34837;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34837__$1,4,in$);
} else
{if((state_val_34838 === 3))
{var inst_34835 = (state_34837[2]);var state_34837__$1 = state_34837;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34837__$1,inst_34835);
} else
{if((state_val_34838 === 4))
{var inst_34783 = (state_34837[7]);var inst_34783__$1 = (state_34837[2]);var inst_34784 = (inst_34783__$1 == null);var state_34837__$1 = (function (){var statearr_34840 = state_34837;(statearr_34840[7] = inst_34783__$1);
return statearr_34840;
})();if(cljs.core.truth_(inst_34784))
{var statearr_34841_34877 = state_34837__$1;(statearr_34841_34877[1] = 5);
} else
{var statearr_34842_34878 = state_34837__$1;(statearr_34842_34878[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 5))
{var inst_34786 = cljs.core.async.close_BANG_.call(null,out);var state_34837__$1 = state_34837;var statearr_34843_34879 = state_34837__$1;(statearr_34843_34879[2] = inst_34786);
(statearr_34843_34879[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 6))
{var inst_34783 = (state_34837[7]);var inst_34788 = f.call(null,inst_34783);var inst_34793 = cljs.core.seq.call(null,inst_34788);var inst_34794 = inst_34793;var inst_34795 = null;var inst_34796 = 0;var inst_34797 = 0;var state_34837__$1 = (function (){var statearr_34844 = state_34837;(statearr_34844[8] = inst_34797);
(statearr_34844[9] = inst_34796);
(statearr_34844[10] = inst_34795);
(statearr_34844[11] = inst_34794);
return statearr_34844;
})();var statearr_34845_34880 = state_34837__$1;(statearr_34845_34880[2] = null);
(statearr_34845_34880[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 7))
{var inst_34833 = (state_34837[2]);var state_34837__$1 = state_34837;var statearr_34846_34881 = state_34837__$1;(statearr_34846_34881[2] = inst_34833);
(statearr_34846_34881[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 8))
{var inst_34797 = (state_34837[8]);var inst_34796 = (state_34837[9]);var inst_34799 = (inst_34797 < inst_34796);var inst_34800 = inst_34799;var state_34837__$1 = state_34837;if(cljs.core.truth_(inst_34800))
{var statearr_34847_34882 = state_34837__$1;(statearr_34847_34882[1] = 10);
} else
{var statearr_34848_34883 = state_34837__$1;(statearr_34848_34883[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 9))
{var inst_34830 = (state_34837[2]);var state_34837__$1 = (function (){var statearr_34849 = state_34837;(statearr_34849[12] = inst_34830);
return statearr_34849;
})();var statearr_34850_34884 = state_34837__$1;(statearr_34850_34884[2] = null);
(statearr_34850_34884[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 10))
{var inst_34797 = (state_34837[8]);var inst_34795 = (state_34837[10]);var inst_34802 = cljs.core._nth.call(null,inst_34795,inst_34797);var state_34837__$1 = state_34837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34837__$1,13,out,inst_34802);
} else
{if((state_val_34838 === 11))
{var inst_34794 = (state_34837[11]);var inst_34808 = (state_34837[13]);var inst_34808__$1 = cljs.core.seq.call(null,inst_34794);var state_34837__$1 = (function (){var statearr_34854 = state_34837;(statearr_34854[13] = inst_34808__$1);
return statearr_34854;
})();if(inst_34808__$1)
{var statearr_34855_34885 = state_34837__$1;(statearr_34855_34885[1] = 14);
} else
{var statearr_34856_34886 = state_34837__$1;(statearr_34856_34886[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 12))
{var inst_34828 = (state_34837[2]);var state_34837__$1 = state_34837;var statearr_34857_34887 = state_34837__$1;(statearr_34857_34887[2] = inst_34828);
(statearr_34857_34887[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 13))
{var inst_34797 = (state_34837[8]);var inst_34796 = (state_34837[9]);var inst_34795 = (state_34837[10]);var inst_34794 = (state_34837[11]);var inst_34804 = (state_34837[2]);var inst_34805 = (inst_34797 + 1);var tmp34851 = inst_34796;var tmp34852 = inst_34795;var tmp34853 = inst_34794;var inst_34794__$1 = tmp34853;var inst_34795__$1 = tmp34852;var inst_34796__$1 = tmp34851;var inst_34797__$1 = inst_34805;var state_34837__$1 = (function (){var statearr_34858 = state_34837;(statearr_34858[8] = inst_34797__$1);
(statearr_34858[9] = inst_34796__$1);
(statearr_34858[10] = inst_34795__$1);
(statearr_34858[11] = inst_34794__$1);
(statearr_34858[14] = inst_34804);
return statearr_34858;
})();var statearr_34859_34888 = state_34837__$1;(statearr_34859_34888[2] = null);
(statearr_34859_34888[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 14))
{var inst_34808 = (state_34837[13]);var inst_34810 = cljs.core.chunked_seq_QMARK_.call(null,inst_34808);var state_34837__$1 = state_34837;if(inst_34810)
{var statearr_34860_34889 = state_34837__$1;(statearr_34860_34889[1] = 17);
} else
{var statearr_34861_34890 = state_34837__$1;(statearr_34861_34890[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 15))
{var state_34837__$1 = state_34837;var statearr_34862_34891 = state_34837__$1;(statearr_34862_34891[2] = null);
(statearr_34862_34891[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 16))
{var inst_34826 = (state_34837[2]);var state_34837__$1 = state_34837;var statearr_34863_34892 = state_34837__$1;(statearr_34863_34892[2] = inst_34826);
(statearr_34863_34892[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 17))
{var inst_34808 = (state_34837[13]);var inst_34812 = cljs.core.chunk_first.call(null,inst_34808);var inst_34813 = cljs.core.chunk_rest.call(null,inst_34808);var inst_34814 = cljs.core.count.call(null,inst_34812);var inst_34794 = inst_34813;var inst_34795 = inst_34812;var inst_34796 = inst_34814;var inst_34797 = 0;var state_34837__$1 = (function (){var statearr_34864 = state_34837;(statearr_34864[8] = inst_34797);
(statearr_34864[9] = inst_34796);
(statearr_34864[10] = inst_34795);
(statearr_34864[11] = inst_34794);
return statearr_34864;
})();var statearr_34865_34893 = state_34837__$1;(statearr_34865_34893[2] = null);
(statearr_34865_34893[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 18))
{var inst_34808 = (state_34837[13]);var inst_34817 = cljs.core.first.call(null,inst_34808);var state_34837__$1 = state_34837;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34837__$1,20,out,inst_34817);
} else
{if((state_val_34838 === 19))
{var inst_34823 = (state_34837[2]);var state_34837__$1 = state_34837;var statearr_34866_34894 = state_34837__$1;(statearr_34866_34894[2] = inst_34823);
(statearr_34866_34894[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34838 === 20))
{var inst_34808 = (state_34837[13]);var inst_34819 = (state_34837[2]);var inst_34820 = cljs.core.next.call(null,inst_34808);var inst_34794 = inst_34820;var inst_34795 = null;var inst_34796 = 0;var inst_34797 = 0;var state_34837__$1 = (function (){var statearr_34867 = state_34837;(statearr_34867[15] = inst_34819);
(statearr_34867[8] = inst_34797);
(statearr_34867[9] = inst_34796);
(statearr_34867[10] = inst_34795);
(statearr_34867[11] = inst_34794);
return statearr_34867;
})();var statearr_34868_34895 = state_34837__$1;(statearr_34868_34895[2] = null);
(statearr_34868_34895[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_34872 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_34872[0] = state_machine__5507__auto__);
(statearr_34872[1] = 1);
return statearr_34872;
});
var state_machine__5507__auto____1 = (function (state_34837){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34837);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34873){if((e34873 instanceof Object))
{var ex__5510__auto__ = e34873;var statearr_34874_34896 = state_34837;(statearr_34874_34896[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34837);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34873;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34897 = state_34837;
state_34837 = G__34897;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34837){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34875 = f__5522__auto__.call(null);(statearr_34875[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_34875;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___34978 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_34957){var state_val_34958 = (state_34957[1]);if((state_val_34958 === 1))
{var state_34957__$1 = state_34957;var statearr_34959_34979 = state_34957__$1;(statearr_34959_34979[2] = null);
(statearr_34959_34979[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34958 === 2))
{var state_34957__$1 = state_34957;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34957__$1,4,from);
} else
{if((state_val_34958 === 3))
{var inst_34955 = (state_34957[2]);var state_34957__$1 = state_34957;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34957__$1,inst_34955);
} else
{if((state_val_34958 === 4))
{var inst_34940 = (state_34957[7]);var inst_34940__$1 = (state_34957[2]);var inst_34941 = (inst_34940__$1 == null);var state_34957__$1 = (function (){var statearr_34960 = state_34957;(statearr_34960[7] = inst_34940__$1);
return statearr_34960;
})();if(cljs.core.truth_(inst_34941))
{var statearr_34961_34980 = state_34957__$1;(statearr_34961_34980[1] = 5);
} else
{var statearr_34962_34981 = state_34957__$1;(statearr_34962_34981[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34958 === 5))
{var state_34957__$1 = state_34957;if(cljs.core.truth_(close_QMARK_))
{var statearr_34963_34982 = state_34957__$1;(statearr_34963_34982[1] = 8);
} else
{var statearr_34964_34983 = state_34957__$1;(statearr_34964_34983[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34958 === 6))
{var inst_34940 = (state_34957[7]);var state_34957__$1 = state_34957;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34957__$1,11,to,inst_34940);
} else
{if((state_val_34958 === 7))
{var inst_34953 = (state_34957[2]);var state_34957__$1 = state_34957;var statearr_34965_34984 = state_34957__$1;(statearr_34965_34984[2] = inst_34953);
(statearr_34965_34984[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34958 === 8))
{var inst_34944 = cljs.core.async.close_BANG_.call(null,to);var state_34957__$1 = state_34957;var statearr_34966_34985 = state_34957__$1;(statearr_34966_34985[2] = inst_34944);
(statearr_34966_34985[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34958 === 9))
{var state_34957__$1 = state_34957;var statearr_34967_34986 = state_34957__$1;(statearr_34967_34986[2] = null);
(statearr_34967_34986[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34958 === 10))
{var inst_34947 = (state_34957[2]);var state_34957__$1 = state_34957;var statearr_34968_34987 = state_34957__$1;(statearr_34968_34987[2] = inst_34947);
(statearr_34968_34987[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_34958 === 11))
{var inst_34950 = (state_34957[2]);var state_34957__$1 = (function (){var statearr_34969 = state_34957;(statearr_34969[8] = inst_34950);
return statearr_34969;
})();var statearr_34970_34988 = state_34957__$1;(statearr_34970_34988[2] = null);
(statearr_34970_34988[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_34974 = [null,null,null,null,null,null,null,null,null];(statearr_34974[0] = state_machine__5507__auto__);
(statearr_34974[1] = 1);
return statearr_34974;
});
var state_machine__5507__auto____1 = (function (state_34957){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_34957);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e34975){if((e34975 instanceof Object))
{var ex__5510__auto__ = e34975;var statearr_34976_34989 = state_34957;(statearr_34976_34989[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34957);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e34975;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__34990 = state_34957;
state_34957 = G__34990;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_34957){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_34957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_34977 = f__5522__auto__.call(null);(statearr_34977[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___34978);
return statearr_34977;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___35077 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35055){var state_val_35056 = (state_35055[1]);if((state_val_35056 === 1))
{var state_35055__$1 = state_35055;var statearr_35057_35078 = state_35055__$1;(statearr_35057_35078[2] = null);
(statearr_35057_35078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 2))
{var state_35055__$1 = state_35055;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35055__$1,4,ch);
} else
{if((state_val_35056 === 3))
{var inst_35053 = (state_35055[2]);var state_35055__$1 = state_35055;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35055__$1,inst_35053);
} else
{if((state_val_35056 === 4))
{var inst_35036 = (state_35055[7]);var inst_35036__$1 = (state_35055[2]);var inst_35037 = (inst_35036__$1 == null);var state_35055__$1 = (function (){var statearr_35058 = state_35055;(statearr_35058[7] = inst_35036__$1);
return statearr_35058;
})();if(cljs.core.truth_(inst_35037))
{var statearr_35059_35079 = state_35055__$1;(statearr_35059_35079[1] = 5);
} else
{var statearr_35060_35080 = state_35055__$1;(statearr_35060_35080[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 5))
{var inst_35039 = cljs.core.async.close_BANG_.call(null,tc);var inst_35040 = cljs.core.async.close_BANG_.call(null,fc);var state_35055__$1 = (function (){var statearr_35061 = state_35055;(statearr_35061[8] = inst_35039);
return statearr_35061;
})();var statearr_35062_35081 = state_35055__$1;(statearr_35062_35081[2] = inst_35040);
(statearr_35062_35081[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 6))
{var inst_35036 = (state_35055[7]);var inst_35042 = p.call(null,inst_35036);var state_35055__$1 = state_35055;if(cljs.core.truth_(inst_35042))
{var statearr_35063_35082 = state_35055__$1;(statearr_35063_35082[1] = 9);
} else
{var statearr_35064_35083 = state_35055__$1;(statearr_35064_35083[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 7))
{var inst_35051 = (state_35055[2]);var state_35055__$1 = state_35055;var statearr_35065_35084 = state_35055__$1;(statearr_35065_35084[2] = inst_35051);
(statearr_35065_35084[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 8))
{var inst_35048 = (state_35055[2]);var state_35055__$1 = (function (){var statearr_35066 = state_35055;(statearr_35066[9] = inst_35048);
return statearr_35066;
})();var statearr_35067_35085 = state_35055__$1;(statearr_35067_35085[2] = null);
(statearr_35067_35085[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 9))
{var state_35055__$1 = state_35055;var statearr_35068_35086 = state_35055__$1;(statearr_35068_35086[2] = tc);
(statearr_35068_35086[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 10))
{var state_35055__$1 = state_35055;var statearr_35069_35087 = state_35055__$1;(statearr_35069_35087[2] = fc);
(statearr_35069_35087[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35056 === 11))
{var inst_35036 = (state_35055[7]);var inst_35046 = (state_35055[2]);var state_35055__$1 = state_35055;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35055__$1,8,inst_35046,inst_35036);
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
var state_machine__5507__auto____0 = (function (){var statearr_35073 = [null,null,null,null,null,null,null,null,null,null];(statearr_35073[0] = state_machine__5507__auto__);
(statearr_35073[1] = 1);
return statearr_35073;
});
var state_machine__5507__auto____1 = (function (state_35055){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35055);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35074){if((e35074 instanceof Object))
{var ex__5510__auto__ = e35074;var statearr_35075_35088 = state_35055;(statearr_35075_35088[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35055);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35074;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35089 = state_35055;
state_35055 = G__35089;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35055){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35055);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35076 = f__5522__auto__.call(null);(statearr_35076[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35077);
return statearr_35076;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35136){var state_val_35137 = (state_35136[1]);if((state_val_35137 === 7))
{var inst_35132 = (state_35136[2]);var state_35136__$1 = state_35136;var statearr_35138_35154 = state_35136__$1;(statearr_35138_35154[2] = inst_35132);
(statearr_35138_35154[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35137 === 6))
{var inst_35125 = (state_35136[7]);var inst_35122 = (state_35136[8]);var inst_35129 = f.call(null,inst_35122,inst_35125);var inst_35122__$1 = inst_35129;var state_35136__$1 = (function (){var statearr_35139 = state_35136;(statearr_35139[8] = inst_35122__$1);
return statearr_35139;
})();var statearr_35140_35155 = state_35136__$1;(statearr_35140_35155[2] = null);
(statearr_35140_35155[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35137 === 5))
{var inst_35122 = (state_35136[8]);var state_35136__$1 = state_35136;var statearr_35141_35156 = state_35136__$1;(statearr_35141_35156[2] = inst_35122);
(statearr_35141_35156[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35137 === 4))
{var inst_35125 = (state_35136[7]);var inst_35125__$1 = (state_35136[2]);var inst_35126 = (inst_35125__$1 == null);var state_35136__$1 = (function (){var statearr_35142 = state_35136;(statearr_35142[7] = inst_35125__$1);
return statearr_35142;
})();if(cljs.core.truth_(inst_35126))
{var statearr_35143_35157 = state_35136__$1;(statearr_35143_35157[1] = 5);
} else
{var statearr_35144_35158 = state_35136__$1;(statearr_35144_35158[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35137 === 3))
{var inst_35134 = (state_35136[2]);var state_35136__$1 = state_35136;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35136__$1,inst_35134);
} else
{if((state_val_35137 === 2))
{var state_35136__$1 = state_35136;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35136__$1,4,ch);
} else
{if((state_val_35137 === 1))
{var inst_35122 = init;var state_35136__$1 = (function (){var statearr_35145 = state_35136;(statearr_35145[8] = inst_35122);
return statearr_35145;
})();var statearr_35146_35159 = state_35136__$1;(statearr_35146_35159[2] = null);
(statearr_35146_35159[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_35150 = [null,null,null,null,null,null,null,null,null];(statearr_35150[0] = state_machine__5507__auto__);
(statearr_35150[1] = 1);
return statearr_35150;
});
var state_machine__5507__auto____1 = (function (state_35136){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35136);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35151){if((e35151 instanceof Object))
{var ex__5510__auto__ = e35151;var statearr_35152_35160 = state_35136;(statearr_35152_35160[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35136);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35151;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35161 = state_35136;
state_35136 = G__35161;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35136){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35136);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35153 = f__5522__auto__.call(null);(statearr_35153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35153;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35223){var state_val_35224 = (state_35223[1]);if((state_val_35224 === 1))
{var inst_35203 = cljs.core.seq.call(null,coll);var inst_35204 = inst_35203;var state_35223__$1 = (function (){var statearr_35225 = state_35223;(statearr_35225[7] = inst_35204);
return statearr_35225;
})();var statearr_35226_35244 = state_35223__$1;(statearr_35226_35244[2] = null);
(statearr_35226_35244[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35224 === 2))
{var inst_35204 = (state_35223[7]);var state_35223__$1 = state_35223;if(cljs.core.truth_(inst_35204))
{var statearr_35227_35245 = state_35223__$1;(statearr_35227_35245[1] = 4);
} else
{var statearr_35228_35246 = state_35223__$1;(statearr_35228_35246[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35224 === 3))
{var inst_35221 = (state_35223[2]);var state_35223__$1 = state_35223;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35223__$1,inst_35221);
} else
{if((state_val_35224 === 4))
{var inst_35204 = (state_35223[7]);var inst_35207 = cljs.core.first.call(null,inst_35204);var state_35223__$1 = state_35223;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35223__$1,7,ch,inst_35207);
} else
{if((state_val_35224 === 5))
{var state_35223__$1 = state_35223;if(cljs.core.truth_(close_QMARK_))
{var statearr_35229_35247 = state_35223__$1;(statearr_35229_35247[1] = 8);
} else
{var statearr_35230_35248 = state_35223__$1;(statearr_35230_35248[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35224 === 6))
{var inst_35219 = (state_35223[2]);var state_35223__$1 = state_35223;var statearr_35231_35249 = state_35223__$1;(statearr_35231_35249[2] = inst_35219);
(statearr_35231_35249[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35224 === 7))
{var inst_35204 = (state_35223[7]);var inst_35209 = (state_35223[2]);var inst_35210 = cljs.core.next.call(null,inst_35204);var inst_35204__$1 = inst_35210;var state_35223__$1 = (function (){var statearr_35232 = state_35223;(statearr_35232[8] = inst_35209);
(statearr_35232[7] = inst_35204__$1);
return statearr_35232;
})();var statearr_35233_35250 = state_35223__$1;(statearr_35233_35250[2] = null);
(statearr_35233_35250[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35224 === 8))
{var inst_35214 = cljs.core.async.close_BANG_.call(null,ch);var state_35223__$1 = state_35223;var statearr_35234_35251 = state_35223__$1;(statearr_35234_35251[2] = inst_35214);
(statearr_35234_35251[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35224 === 9))
{var state_35223__$1 = state_35223;var statearr_35235_35252 = state_35223__$1;(statearr_35235_35252[2] = null);
(statearr_35235_35252[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35224 === 10))
{var inst_35217 = (state_35223[2]);var state_35223__$1 = state_35223;var statearr_35236_35253 = state_35223__$1;(statearr_35236_35253[2] = inst_35217);
(statearr_35236_35253[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_35240 = [null,null,null,null,null,null,null,null,null];(statearr_35240[0] = state_machine__5507__auto__);
(statearr_35240[1] = 1);
return statearr_35240;
});
var state_machine__5507__auto____1 = (function (state_35223){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35223);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35241){if((e35241 instanceof Object))
{var ex__5510__auto__ = e35241;var statearr_35242_35254 = state_35223;(statearr_35242_35254[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35223);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35241;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35255 = state_35223;
state_35223 = G__35255;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35223){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35243 = f__5522__auto__.call(null);(statearr_35243[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_35243;
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
cljs.core.async.Mux = (function (){var obj35257 = {};return obj35257;
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
cljs.core.async.Mult = (function (){var obj35259 = {};return obj35259;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t35483 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35483 = (function (cs,ch,mult,meta35484){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta35484 = meta35484;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35483.cljs$lang$type = true;
cljs.core.async.t35483.cljs$lang$ctorStr = "cljs.core.async/t35483";
cljs.core.async.t35483.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35483");
});})(cs))
;
cljs.core.async.t35483.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t35483.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t35483.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t35483.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t35483.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35483.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t35483.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35485){var self__ = this;
var _35485__$1 = this;return self__.meta35484;
});})(cs))
;
cljs.core.async.t35483.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35485,meta35484__$1){var self__ = this;
var _35485__$1 = this;return (new cljs.core.async.t35483(self__.cs,self__.ch,self__.mult,meta35484__$1));
});})(cs))
;
cljs.core.async.__GT_t35483 = ((function (cs){
return (function __GT_t35483(cs__$1,ch__$1,mult__$1,meta35484){return (new cljs.core.async.t35483(cs__$1,ch__$1,mult__$1,meta35484));
});})(cs))
;
}
return (new cljs.core.async.t35483(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___35706 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35620){var state_val_35621 = (state_35620[1]);if((state_val_35621 === 32))
{var inst_35488 = (state_35620[7]);var inst_35564 = (state_35620[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35620,31,Object,null,30);var inst_35571 = cljs.core.async.put_BANG_.call(null,inst_35564,inst_35488,done);var state_35620__$1 = state_35620;var statearr_35622_35707 = state_35620__$1;(statearr_35622_35707[2] = inst_35571);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35620__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 1))
{var state_35620__$1 = state_35620;var statearr_35623_35708 = state_35620__$1;(statearr_35623_35708[2] = null);
(statearr_35623_35708[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 33))
{var inst_35577 = (state_35620[9]);var inst_35579 = cljs.core.chunked_seq_QMARK_.call(null,inst_35577);var state_35620__$1 = state_35620;if(inst_35579)
{var statearr_35624_35709 = state_35620__$1;(statearr_35624_35709[1] = 36);
} else
{var statearr_35625_35710 = state_35620__$1;(statearr_35625_35710[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 2))
{var state_35620__$1 = state_35620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35620__$1,4,ch);
} else
{if((state_val_35621 === 34))
{var state_35620__$1 = state_35620;var statearr_35626_35711 = state_35620__$1;(statearr_35626_35711[2] = null);
(statearr_35626_35711[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 3))
{var inst_35618 = (state_35620[2]);var state_35620__$1 = state_35620;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35620__$1,inst_35618);
} else
{if((state_val_35621 === 35))
{var inst_35602 = (state_35620[2]);var state_35620__$1 = state_35620;var statearr_35627_35712 = state_35620__$1;(statearr_35627_35712[2] = inst_35602);
(statearr_35627_35712[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 4))
{var inst_35488 = (state_35620[7]);var inst_35488__$1 = (state_35620[2]);var inst_35489 = (inst_35488__$1 == null);var state_35620__$1 = (function (){var statearr_35628 = state_35620;(statearr_35628[7] = inst_35488__$1);
return statearr_35628;
})();if(cljs.core.truth_(inst_35489))
{var statearr_35629_35713 = state_35620__$1;(statearr_35629_35713[1] = 5);
} else
{var statearr_35630_35714 = state_35620__$1;(statearr_35630_35714[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 36))
{var inst_35577 = (state_35620[9]);var inst_35581 = cljs.core.chunk_first.call(null,inst_35577);var inst_35582 = cljs.core.chunk_rest.call(null,inst_35577);var inst_35583 = cljs.core.count.call(null,inst_35581);var inst_35556 = inst_35582;var inst_35557 = inst_35581;var inst_35558 = inst_35583;var inst_35559 = 0;var state_35620__$1 = (function (){var statearr_35631 = state_35620;(statearr_35631[10] = inst_35557);
(statearr_35631[11] = inst_35558);
(statearr_35631[12] = inst_35559);
(statearr_35631[13] = inst_35556);
return statearr_35631;
})();var statearr_35632_35715 = state_35620__$1;(statearr_35632_35715[2] = null);
(statearr_35632_35715[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 5))
{var inst_35495 = cljs.core.deref.call(null,cs);var inst_35496 = cljs.core.seq.call(null,inst_35495);var inst_35497 = inst_35496;var inst_35498 = null;var inst_35499 = 0;var inst_35500 = 0;var state_35620__$1 = (function (){var statearr_35633 = state_35620;(statearr_35633[14] = inst_35497);
(statearr_35633[15] = inst_35500);
(statearr_35633[16] = inst_35499);
(statearr_35633[17] = inst_35498);
return statearr_35633;
})();var statearr_35634_35716 = state_35620__$1;(statearr_35634_35716[2] = null);
(statearr_35634_35716[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 37))
{var inst_35577 = (state_35620[9]);var inst_35586 = cljs.core.first.call(null,inst_35577);var state_35620__$1 = (function (){var statearr_35635 = state_35620;(statearr_35635[18] = inst_35586);
return statearr_35635;
})();var statearr_35636_35717 = state_35620__$1;(statearr_35636_35717[2] = null);
(statearr_35636_35717[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 6))
{var inst_35548 = (state_35620[19]);var inst_35547 = cljs.core.deref.call(null,cs);var inst_35548__$1 = cljs.core.keys.call(null,inst_35547);var inst_35549 = cljs.core.count.call(null,inst_35548__$1);var inst_35550 = cljs.core.reset_BANG_.call(null,dctr,inst_35549);var inst_35555 = cljs.core.seq.call(null,inst_35548__$1);var inst_35556 = inst_35555;var inst_35557 = null;var inst_35558 = 0;var inst_35559 = 0;var state_35620__$1 = (function (){var statearr_35637 = state_35620;(statearr_35637[20] = inst_35550);
(statearr_35637[10] = inst_35557);
(statearr_35637[11] = inst_35558);
(statearr_35637[12] = inst_35559);
(statearr_35637[13] = inst_35556);
(statearr_35637[19] = inst_35548__$1);
return statearr_35637;
})();var statearr_35638_35718 = state_35620__$1;(statearr_35638_35718[2] = null);
(statearr_35638_35718[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 38))
{var inst_35599 = (state_35620[2]);var state_35620__$1 = state_35620;var statearr_35639_35719 = state_35620__$1;(statearr_35639_35719[2] = inst_35599);
(statearr_35639_35719[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 7))
{var inst_35616 = (state_35620[2]);var state_35620__$1 = state_35620;var statearr_35640_35720 = state_35620__$1;(statearr_35640_35720[2] = inst_35616);
(statearr_35640_35720[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 39))
{var inst_35577 = (state_35620[9]);var inst_35595 = (state_35620[2]);var inst_35596 = cljs.core.next.call(null,inst_35577);var inst_35556 = inst_35596;var inst_35557 = null;var inst_35558 = 0;var inst_35559 = 0;var state_35620__$1 = (function (){var statearr_35641 = state_35620;(statearr_35641[21] = inst_35595);
(statearr_35641[10] = inst_35557);
(statearr_35641[11] = inst_35558);
(statearr_35641[12] = inst_35559);
(statearr_35641[13] = inst_35556);
return statearr_35641;
})();var statearr_35642_35721 = state_35620__$1;(statearr_35642_35721[2] = null);
(statearr_35642_35721[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 8))
{var inst_35500 = (state_35620[15]);var inst_35499 = (state_35620[16]);var inst_35502 = (inst_35500 < inst_35499);var inst_35503 = inst_35502;var state_35620__$1 = state_35620;if(cljs.core.truth_(inst_35503))
{var statearr_35643_35722 = state_35620__$1;(statearr_35643_35722[1] = 10);
} else
{var statearr_35644_35723 = state_35620__$1;(statearr_35644_35723[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 40))
{var inst_35586 = (state_35620[18]);var inst_35587 = (state_35620[2]);var inst_35588 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35589 = cljs.core.async.untap_STAR_.call(null,m,inst_35586);var state_35620__$1 = (function (){var statearr_35645 = state_35620;(statearr_35645[22] = inst_35588);
(statearr_35645[23] = inst_35587);
return statearr_35645;
})();var statearr_35646_35724 = state_35620__$1;(statearr_35646_35724[2] = inst_35589);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35620__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 9))
{var inst_35545 = (state_35620[2]);var state_35620__$1 = state_35620;var statearr_35647_35725 = state_35620__$1;(statearr_35647_35725[2] = inst_35545);
(statearr_35647_35725[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 41))
{var inst_35586 = (state_35620[18]);var inst_35488 = (state_35620[7]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35620,40,Object,null,39);var inst_35593 = cljs.core.async.put_BANG_.call(null,inst_35586,inst_35488,done);var state_35620__$1 = state_35620;var statearr_35648_35726 = state_35620__$1;(statearr_35648_35726[2] = inst_35593);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35620__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 10))
{var inst_35500 = (state_35620[15]);var inst_35498 = (state_35620[17]);var inst_35506 = cljs.core._nth.call(null,inst_35498,inst_35500);var inst_35507 = cljs.core.nth.call(null,inst_35506,0,null);var inst_35508 = cljs.core.nth.call(null,inst_35506,1,null);var state_35620__$1 = (function (){var statearr_35649 = state_35620;(statearr_35649[24] = inst_35507);
return statearr_35649;
})();if(cljs.core.truth_(inst_35508))
{var statearr_35650_35727 = state_35620__$1;(statearr_35650_35727[1] = 13);
} else
{var statearr_35651_35728 = state_35620__$1;(statearr_35651_35728[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 42))
{var state_35620__$1 = state_35620;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35620__$1,45,dchan);
} else
{if((state_val_35621 === 11))
{var inst_35497 = (state_35620[14]);var inst_35517 = (state_35620[25]);var inst_35517__$1 = cljs.core.seq.call(null,inst_35497);var state_35620__$1 = (function (){var statearr_35652 = state_35620;(statearr_35652[25] = inst_35517__$1);
return statearr_35652;
})();if(inst_35517__$1)
{var statearr_35653_35729 = state_35620__$1;(statearr_35653_35729[1] = 16);
} else
{var statearr_35654_35730 = state_35620__$1;(statearr_35654_35730[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 43))
{var state_35620__$1 = state_35620;var statearr_35655_35731 = state_35620__$1;(statearr_35655_35731[2] = null);
(statearr_35655_35731[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 12))
{var inst_35543 = (state_35620[2]);var state_35620__$1 = state_35620;var statearr_35656_35732 = state_35620__$1;(statearr_35656_35732[2] = inst_35543);
(statearr_35656_35732[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 44))
{var inst_35613 = (state_35620[2]);var state_35620__$1 = (function (){var statearr_35657 = state_35620;(statearr_35657[26] = inst_35613);
return statearr_35657;
})();var statearr_35658_35733 = state_35620__$1;(statearr_35658_35733[2] = null);
(statearr_35658_35733[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 13))
{var inst_35507 = (state_35620[24]);var inst_35510 = cljs.core.async.close_BANG_.call(null,inst_35507);var state_35620__$1 = state_35620;var statearr_35659_35734 = state_35620__$1;(statearr_35659_35734[2] = inst_35510);
(statearr_35659_35734[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 45))
{var inst_35610 = (state_35620[2]);var state_35620__$1 = state_35620;var statearr_35663_35735 = state_35620__$1;(statearr_35663_35735[2] = inst_35610);
(statearr_35663_35735[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 14))
{var state_35620__$1 = state_35620;var statearr_35664_35736 = state_35620__$1;(statearr_35664_35736[2] = null);
(statearr_35664_35736[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 15))
{var inst_35497 = (state_35620[14]);var inst_35500 = (state_35620[15]);var inst_35499 = (state_35620[16]);var inst_35498 = (state_35620[17]);var inst_35513 = (state_35620[2]);var inst_35514 = (inst_35500 + 1);var tmp35660 = inst_35497;var tmp35661 = inst_35499;var tmp35662 = inst_35498;var inst_35497__$1 = tmp35660;var inst_35498__$1 = tmp35662;var inst_35499__$1 = tmp35661;var inst_35500__$1 = inst_35514;var state_35620__$1 = (function (){var statearr_35665 = state_35620;(statearr_35665[14] = inst_35497__$1);
(statearr_35665[15] = inst_35500__$1);
(statearr_35665[16] = inst_35499__$1);
(statearr_35665[17] = inst_35498__$1);
(statearr_35665[27] = inst_35513);
return statearr_35665;
})();var statearr_35666_35737 = state_35620__$1;(statearr_35666_35737[2] = null);
(statearr_35666_35737[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 16))
{var inst_35517 = (state_35620[25]);var inst_35519 = cljs.core.chunked_seq_QMARK_.call(null,inst_35517);var state_35620__$1 = state_35620;if(inst_35519)
{var statearr_35667_35738 = state_35620__$1;(statearr_35667_35738[1] = 19);
} else
{var statearr_35668_35739 = state_35620__$1;(statearr_35668_35739[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 17))
{var state_35620__$1 = state_35620;var statearr_35669_35740 = state_35620__$1;(statearr_35669_35740[2] = null);
(statearr_35669_35740[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 18))
{var inst_35541 = (state_35620[2]);var state_35620__$1 = state_35620;var statearr_35670_35741 = state_35620__$1;(statearr_35670_35741[2] = inst_35541);
(statearr_35670_35741[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 19))
{var inst_35517 = (state_35620[25]);var inst_35521 = cljs.core.chunk_first.call(null,inst_35517);var inst_35522 = cljs.core.chunk_rest.call(null,inst_35517);var inst_35523 = cljs.core.count.call(null,inst_35521);var inst_35497 = inst_35522;var inst_35498 = inst_35521;var inst_35499 = inst_35523;var inst_35500 = 0;var state_35620__$1 = (function (){var statearr_35671 = state_35620;(statearr_35671[14] = inst_35497);
(statearr_35671[15] = inst_35500);
(statearr_35671[16] = inst_35499);
(statearr_35671[17] = inst_35498);
return statearr_35671;
})();var statearr_35672_35742 = state_35620__$1;(statearr_35672_35742[2] = null);
(statearr_35672_35742[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 20))
{var inst_35517 = (state_35620[25]);var inst_35527 = cljs.core.first.call(null,inst_35517);var inst_35528 = cljs.core.nth.call(null,inst_35527,0,null);var inst_35529 = cljs.core.nth.call(null,inst_35527,1,null);var state_35620__$1 = (function (){var statearr_35673 = state_35620;(statearr_35673[28] = inst_35528);
return statearr_35673;
})();if(cljs.core.truth_(inst_35529))
{var statearr_35674_35743 = state_35620__$1;(statearr_35674_35743[1] = 22);
} else
{var statearr_35675_35744 = state_35620__$1;(statearr_35675_35744[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 21))
{var inst_35538 = (state_35620[2]);var state_35620__$1 = state_35620;var statearr_35676_35745 = state_35620__$1;(statearr_35676_35745[2] = inst_35538);
(statearr_35676_35745[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 22))
{var inst_35528 = (state_35620[28]);var inst_35531 = cljs.core.async.close_BANG_.call(null,inst_35528);var state_35620__$1 = state_35620;var statearr_35677_35746 = state_35620__$1;(statearr_35677_35746[2] = inst_35531);
(statearr_35677_35746[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 23))
{var state_35620__$1 = state_35620;var statearr_35678_35747 = state_35620__$1;(statearr_35678_35747[2] = null);
(statearr_35678_35747[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 24))
{var inst_35517 = (state_35620[25]);var inst_35534 = (state_35620[2]);var inst_35535 = cljs.core.next.call(null,inst_35517);var inst_35497 = inst_35535;var inst_35498 = null;var inst_35499 = 0;var inst_35500 = 0;var state_35620__$1 = (function (){var statearr_35679 = state_35620;(statearr_35679[14] = inst_35497);
(statearr_35679[15] = inst_35500);
(statearr_35679[29] = inst_35534);
(statearr_35679[16] = inst_35499);
(statearr_35679[17] = inst_35498);
return statearr_35679;
})();var statearr_35680_35748 = state_35620__$1;(statearr_35680_35748[2] = null);
(statearr_35680_35748[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 25))
{var inst_35558 = (state_35620[11]);var inst_35559 = (state_35620[12]);var inst_35561 = (inst_35559 < inst_35558);var inst_35562 = inst_35561;var state_35620__$1 = state_35620;if(cljs.core.truth_(inst_35562))
{var statearr_35681_35749 = state_35620__$1;(statearr_35681_35749[1] = 27);
} else
{var statearr_35682_35750 = state_35620__$1;(statearr_35682_35750[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 26))
{var inst_35548 = (state_35620[19]);var inst_35606 = (state_35620[2]);var inst_35607 = cljs.core.seq.call(null,inst_35548);var state_35620__$1 = (function (){var statearr_35683 = state_35620;(statearr_35683[30] = inst_35606);
return statearr_35683;
})();if(inst_35607)
{var statearr_35684_35751 = state_35620__$1;(statearr_35684_35751[1] = 42);
} else
{var statearr_35685_35752 = state_35620__$1;(statearr_35685_35752[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 27))
{var inst_35557 = (state_35620[10]);var inst_35559 = (state_35620[12]);var inst_35564 = cljs.core._nth.call(null,inst_35557,inst_35559);var state_35620__$1 = (function (){var statearr_35686 = state_35620;(statearr_35686[8] = inst_35564);
return statearr_35686;
})();var statearr_35687_35753 = state_35620__$1;(statearr_35687_35753[2] = null);
(statearr_35687_35753[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 28))
{var inst_35577 = (state_35620[9]);var inst_35556 = (state_35620[13]);var inst_35577__$1 = cljs.core.seq.call(null,inst_35556);var state_35620__$1 = (function (){var statearr_35691 = state_35620;(statearr_35691[9] = inst_35577__$1);
return statearr_35691;
})();if(inst_35577__$1)
{var statearr_35692_35754 = state_35620__$1;(statearr_35692_35754[1] = 33);
} else
{var statearr_35693_35755 = state_35620__$1;(statearr_35693_35755[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 29))
{var inst_35604 = (state_35620[2]);var state_35620__$1 = state_35620;var statearr_35694_35756 = state_35620__$1;(statearr_35694_35756[2] = inst_35604);
(statearr_35694_35756[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 30))
{var inst_35557 = (state_35620[10]);var inst_35558 = (state_35620[11]);var inst_35559 = (state_35620[12]);var inst_35556 = (state_35620[13]);var inst_35573 = (state_35620[2]);var inst_35574 = (inst_35559 + 1);var tmp35688 = inst_35557;var tmp35689 = inst_35558;var tmp35690 = inst_35556;var inst_35556__$1 = tmp35690;var inst_35557__$1 = tmp35688;var inst_35558__$1 = tmp35689;var inst_35559__$1 = inst_35574;var state_35620__$1 = (function (){var statearr_35695 = state_35620;(statearr_35695[31] = inst_35573);
(statearr_35695[10] = inst_35557__$1);
(statearr_35695[11] = inst_35558__$1);
(statearr_35695[12] = inst_35559__$1);
(statearr_35695[13] = inst_35556__$1);
return statearr_35695;
})();var statearr_35696_35757 = state_35620__$1;(statearr_35696_35757[2] = null);
(statearr_35696_35757[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35621 === 31))
{var inst_35564 = (state_35620[8]);var inst_35565 = (state_35620[2]);var inst_35566 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_35567 = cljs.core.async.untap_STAR_.call(null,m,inst_35564);var state_35620__$1 = (function (){var statearr_35697 = state_35620;(statearr_35697[32] = inst_35566);
(statearr_35697[33] = inst_35565);
return statearr_35697;
})();var statearr_35698_35758 = state_35620__$1;(statearr_35698_35758[2] = inst_35567);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35620__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_35702 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35702[0] = state_machine__5507__auto__);
(statearr_35702[1] = 1);
return statearr_35702;
});
var state_machine__5507__auto____1 = (function (state_35620){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35620);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35703){if((e35703 instanceof Object))
{var ex__5510__auto__ = e35703;var statearr_35704_35759 = state_35620;(statearr_35704_35759[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35620);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35703;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__35760 = state_35620;
state_35620 = G__35760;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35620){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35705 = f__5522__auto__.call(null);(statearr_35705[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35706);
return statearr_35705;
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
cljs.core.async.Mix = (function (){var obj35762 = {};return obj35762;
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
;var m = (function (){if(typeof cljs.core.async.t35872 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t35872 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta35873){
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
this.meta35873 = meta35873;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t35872.cljs$lang$type = true;
cljs.core.async.t35872.cljs$lang$ctorStr = "cljs.core.async/t35872";
cljs.core.async.t35872.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t35872");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35872.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t35872.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35872.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35872.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35872.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35872.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35872.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t35872.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35872.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35874){var self__ = this;
var _35874__$1 = this;return self__.meta35873;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t35872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35874,meta35873__$1){var self__ = this;
var _35874__$1 = this;return (new cljs.core.async.t35872(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta35873__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t35872 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t35872(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35873){return (new cljs.core.async.t35872(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta35873));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t35872(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___35981 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_35939){var state_val_35940 = (state_35939[1]);if((state_val_35940 === 1))
{var inst_35878 = (state_35939[7]);var inst_35878__$1 = calc_state.call(null);var inst_35879 = cljs.core.seq_QMARK_.call(null,inst_35878__$1);var state_35939__$1 = (function (){var statearr_35941 = state_35939;(statearr_35941[7] = inst_35878__$1);
return statearr_35941;
})();if(inst_35879)
{var statearr_35942_35982 = state_35939__$1;(statearr_35942_35982[1] = 2);
} else
{var statearr_35943_35983 = state_35939__$1;(statearr_35943_35983[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 2))
{var inst_35878 = (state_35939[7]);var inst_35881 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35878);var state_35939__$1 = state_35939;var statearr_35944_35984 = state_35939__$1;(statearr_35944_35984[2] = inst_35881);
(statearr_35944_35984[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 3))
{var inst_35878 = (state_35939[7]);var state_35939__$1 = state_35939;var statearr_35945_35985 = state_35939__$1;(statearr_35945_35985[2] = inst_35878);
(statearr_35945_35985[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 4))
{var inst_35878 = (state_35939[7]);var inst_35884 = (state_35939[2]);var inst_35885 = cljs.core.get.call(null,inst_35884,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35886 = cljs.core.get.call(null,inst_35884,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35887 = cljs.core.get.call(null,inst_35884,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_35888 = inst_35878;var state_35939__$1 = (function (){var statearr_35946 = state_35939;(statearr_35946[8] = inst_35887);
(statearr_35946[9] = inst_35888);
(statearr_35946[10] = inst_35886);
(statearr_35946[11] = inst_35885);
return statearr_35946;
})();var statearr_35947_35986 = state_35939__$1;(statearr_35947_35986[2] = null);
(statearr_35947_35986[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 5))
{var inst_35888 = (state_35939[9]);var inst_35891 = cljs.core.seq_QMARK_.call(null,inst_35888);var state_35939__$1 = state_35939;if(inst_35891)
{var statearr_35948_35987 = state_35939__$1;(statearr_35948_35987[1] = 7);
} else
{var statearr_35949_35988 = state_35939__$1;(statearr_35949_35988[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 6))
{var inst_35937 = (state_35939[2]);var state_35939__$1 = state_35939;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35939__$1,inst_35937);
} else
{if((state_val_35940 === 7))
{var inst_35888 = (state_35939[9]);var inst_35893 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35888);var state_35939__$1 = state_35939;var statearr_35950_35989 = state_35939__$1;(statearr_35950_35989[2] = inst_35893);
(statearr_35950_35989[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 8))
{var inst_35888 = (state_35939[9]);var state_35939__$1 = state_35939;var statearr_35951_35990 = state_35939__$1;(statearr_35951_35990[2] = inst_35888);
(statearr_35951_35990[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 9))
{var inst_35896 = (state_35939[12]);var inst_35896__$1 = (state_35939[2]);var inst_35897 = cljs.core.get.call(null,inst_35896__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_35898 = cljs.core.get.call(null,inst_35896__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_35899 = cljs.core.get.call(null,inst_35896__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_35939__$1 = (function (){var statearr_35952 = state_35939;(statearr_35952[13] = inst_35898);
(statearr_35952[14] = inst_35899);
(statearr_35952[12] = inst_35896__$1);
return statearr_35952;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_35939__$1,10,inst_35897);
} else
{if((state_val_35940 === 10))
{var inst_35903 = (state_35939[15]);var inst_35904 = (state_35939[16]);var inst_35902 = (state_35939[2]);var inst_35903__$1 = cljs.core.nth.call(null,inst_35902,0,null);var inst_35904__$1 = cljs.core.nth.call(null,inst_35902,1,null);var inst_35905 = (inst_35903__$1 == null);var inst_35906 = cljs.core._EQ_.call(null,inst_35904__$1,change);var inst_35907 = (inst_35905) || (inst_35906);var state_35939__$1 = (function (){var statearr_35953 = state_35939;(statearr_35953[15] = inst_35903__$1);
(statearr_35953[16] = inst_35904__$1);
return statearr_35953;
})();if(cljs.core.truth_(inst_35907))
{var statearr_35954_35991 = state_35939__$1;(statearr_35954_35991[1] = 11);
} else
{var statearr_35955_35992 = state_35939__$1;(statearr_35955_35992[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 11))
{var inst_35903 = (state_35939[15]);var inst_35909 = (inst_35903 == null);var state_35939__$1 = state_35939;if(cljs.core.truth_(inst_35909))
{var statearr_35956_35993 = state_35939__$1;(statearr_35956_35993[1] = 14);
} else
{var statearr_35957_35994 = state_35939__$1;(statearr_35957_35994[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 12))
{var inst_35904 = (state_35939[16]);var inst_35899 = (state_35939[14]);var inst_35918 = (state_35939[17]);var inst_35918__$1 = inst_35899.call(null,inst_35904);var state_35939__$1 = (function (){var statearr_35958 = state_35939;(statearr_35958[17] = inst_35918__$1);
return statearr_35958;
})();if(cljs.core.truth_(inst_35918__$1))
{var statearr_35959_35995 = state_35939__$1;(statearr_35959_35995[1] = 17);
} else
{var statearr_35960_35996 = state_35939__$1;(statearr_35960_35996[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 13))
{var inst_35935 = (state_35939[2]);var state_35939__$1 = state_35939;var statearr_35961_35997 = state_35939__$1;(statearr_35961_35997[2] = inst_35935);
(statearr_35961_35997[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 14))
{var inst_35904 = (state_35939[16]);var inst_35911 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35904);var state_35939__$1 = state_35939;var statearr_35962_35998 = state_35939__$1;(statearr_35962_35998[2] = inst_35911);
(statearr_35962_35998[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 15))
{var state_35939__$1 = state_35939;var statearr_35963_35999 = state_35939__$1;(statearr_35963_35999[2] = null);
(statearr_35963_35999[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 16))
{var inst_35914 = (state_35939[2]);var inst_35915 = calc_state.call(null);var inst_35888 = inst_35915;var state_35939__$1 = (function (){var statearr_35964 = state_35939;(statearr_35964[18] = inst_35914);
(statearr_35964[9] = inst_35888);
return statearr_35964;
})();var statearr_35965_36000 = state_35939__$1;(statearr_35965_36000[2] = null);
(statearr_35965_36000[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 17))
{var inst_35918 = (state_35939[17]);var state_35939__$1 = state_35939;var statearr_35966_36001 = state_35939__$1;(statearr_35966_36001[2] = inst_35918);
(statearr_35966_36001[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 18))
{var inst_35904 = (state_35939[16]);var inst_35898 = (state_35939[13]);var inst_35899 = (state_35939[14]);var inst_35921 = cljs.core.empty_QMARK_.call(null,inst_35899);var inst_35922 = inst_35898.call(null,inst_35904);var inst_35923 = cljs.core.not.call(null,inst_35922);var inst_35924 = (inst_35921) && (inst_35923);var state_35939__$1 = state_35939;var statearr_35967_36002 = state_35939__$1;(statearr_35967_36002[2] = inst_35924);
(statearr_35967_36002[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 19))
{var inst_35926 = (state_35939[2]);var state_35939__$1 = state_35939;if(cljs.core.truth_(inst_35926))
{var statearr_35968_36003 = state_35939__$1;(statearr_35968_36003[1] = 20);
} else
{var statearr_35969_36004 = state_35939__$1;(statearr_35969_36004[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 20))
{var inst_35903 = (state_35939[15]);var state_35939__$1 = state_35939;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35939__$1,23,out,inst_35903);
} else
{if((state_val_35940 === 21))
{var state_35939__$1 = state_35939;var statearr_35970_36005 = state_35939__$1;(statearr_35970_36005[2] = null);
(statearr_35970_36005[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 22))
{var inst_35896 = (state_35939[12]);var inst_35932 = (state_35939[2]);var inst_35888 = inst_35896;var state_35939__$1 = (function (){var statearr_35971 = state_35939;(statearr_35971[19] = inst_35932);
(statearr_35971[9] = inst_35888);
return statearr_35971;
})();var statearr_35972_36006 = state_35939__$1;(statearr_35972_36006[2] = null);
(statearr_35972_36006[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_35940 === 23))
{var inst_35929 = (state_35939[2]);var state_35939__$1 = state_35939;var statearr_35973_36007 = state_35939__$1;(statearr_35973_36007[2] = inst_35929);
(statearr_35973_36007[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_35977 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_35977[0] = state_machine__5507__auto__);
(statearr_35977[1] = 1);
return statearr_35977;
});
var state_machine__5507__auto____1 = (function (state_35939){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_35939);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e35978){if((e35978 instanceof Object))
{var ex__5510__auto__ = e35978;var statearr_35979_36008 = state_35939;(statearr_35979_36008[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35939);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e35978;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36009 = state_35939;
state_35939 = G__36009;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_35939){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_35939);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_35980 = f__5522__auto__.call(null);(statearr_35980[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___35981);
return statearr_35980;
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
cljs.core.async.Pub = (function (){var obj36011 = {};return obj36011;
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
return (function (p1__36012_SHARP_){if(cljs.core.truth_(p1__36012_SHARP_.call(null,topic)))
{return p1__36012_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__36012_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t36137 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t36137 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta36138){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta36138 = meta36138;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t36137.cljs$lang$type = true;
cljs.core.async.t36137.cljs$lang$ctorStr = "cljs.core.async/t36137";
cljs.core.async.t36137.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t36137");
});})(mults,ensure_mult))
;
cljs.core.async.t36137.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t36137.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t36137.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t36137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t36137.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t36137.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t36137.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t36137.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36139){var self__ = this;
var _36139__$1 = this;return self__.meta36138;
});})(mults,ensure_mult))
;
cljs.core.async.t36137.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36139,meta36138__$1){var self__ = this;
var _36139__$1 = this;return (new cljs.core.async.t36137(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta36138__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t36137 = ((function (mults,ensure_mult){
return (function __GT_t36137(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36138){return (new cljs.core.async.t36137(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta36138));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t36137(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___36261 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36213){var state_val_36214 = (state_36213[1]);if((state_val_36214 === 1))
{var state_36213__$1 = state_36213;var statearr_36215_36262 = state_36213__$1;(statearr_36215_36262[2] = null);
(statearr_36215_36262[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 2))
{var state_36213__$1 = state_36213;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36213__$1,4,ch);
} else
{if((state_val_36214 === 3))
{var inst_36211 = (state_36213[2]);var state_36213__$1 = state_36213;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36213__$1,inst_36211);
} else
{if((state_val_36214 === 4))
{var inst_36142 = (state_36213[7]);var inst_36142__$1 = (state_36213[2]);var inst_36143 = (inst_36142__$1 == null);var state_36213__$1 = (function (){var statearr_36216 = state_36213;(statearr_36216[7] = inst_36142__$1);
return statearr_36216;
})();if(cljs.core.truth_(inst_36143))
{var statearr_36217_36263 = state_36213__$1;(statearr_36217_36263[1] = 5);
} else
{var statearr_36218_36264 = state_36213__$1;(statearr_36218_36264[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 5))
{var inst_36149 = cljs.core.deref.call(null,mults);var inst_36150 = cljs.core.vals.call(null,inst_36149);var inst_36151 = cljs.core.seq.call(null,inst_36150);var inst_36152 = inst_36151;var inst_36153 = null;var inst_36154 = 0;var inst_36155 = 0;var state_36213__$1 = (function (){var statearr_36219 = state_36213;(statearr_36219[8] = inst_36154);
(statearr_36219[9] = inst_36155);
(statearr_36219[10] = inst_36153);
(statearr_36219[11] = inst_36152);
return statearr_36219;
})();var statearr_36220_36265 = state_36213__$1;(statearr_36220_36265[2] = null);
(statearr_36220_36265[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 6))
{var inst_36142 = (state_36213[7]);var inst_36190 = (state_36213[12]);var inst_36192 = (state_36213[13]);var inst_36190__$1 = topic_fn.call(null,inst_36142);var inst_36191 = cljs.core.deref.call(null,mults);var inst_36192__$1 = cljs.core.get.call(null,inst_36191,inst_36190__$1);var state_36213__$1 = (function (){var statearr_36221 = state_36213;(statearr_36221[12] = inst_36190__$1);
(statearr_36221[13] = inst_36192__$1);
return statearr_36221;
})();if(cljs.core.truth_(inst_36192__$1))
{var statearr_36222_36266 = state_36213__$1;(statearr_36222_36266[1] = 19);
} else
{var statearr_36223_36267 = state_36213__$1;(statearr_36223_36267[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 7))
{var inst_36209 = (state_36213[2]);var state_36213__$1 = state_36213;var statearr_36224_36268 = state_36213__$1;(statearr_36224_36268[2] = inst_36209);
(statearr_36224_36268[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 8))
{var inst_36154 = (state_36213[8]);var inst_36155 = (state_36213[9]);var inst_36157 = (inst_36155 < inst_36154);var inst_36158 = inst_36157;var state_36213__$1 = state_36213;if(cljs.core.truth_(inst_36158))
{var statearr_36228_36269 = state_36213__$1;(statearr_36228_36269[1] = 10);
} else
{var statearr_36229_36270 = state_36213__$1;(statearr_36229_36270[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 9))
{var inst_36188 = (state_36213[2]);var state_36213__$1 = state_36213;var statearr_36230_36271 = state_36213__$1;(statearr_36230_36271[2] = inst_36188);
(statearr_36230_36271[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 10))
{var inst_36154 = (state_36213[8]);var inst_36155 = (state_36213[9]);var inst_36153 = (state_36213[10]);var inst_36152 = (state_36213[11]);var inst_36160 = cljs.core._nth.call(null,inst_36153,inst_36155);var inst_36161 = cljs.core.async.muxch_STAR_.call(null,inst_36160);var inst_36162 = cljs.core.async.close_BANG_.call(null,inst_36161);var inst_36163 = (inst_36155 + 1);var tmp36225 = inst_36154;var tmp36226 = inst_36153;var tmp36227 = inst_36152;var inst_36152__$1 = tmp36227;var inst_36153__$1 = tmp36226;var inst_36154__$1 = tmp36225;var inst_36155__$1 = inst_36163;var state_36213__$1 = (function (){var statearr_36231 = state_36213;(statearr_36231[8] = inst_36154__$1);
(statearr_36231[9] = inst_36155__$1);
(statearr_36231[10] = inst_36153__$1);
(statearr_36231[11] = inst_36152__$1);
(statearr_36231[14] = inst_36162);
return statearr_36231;
})();var statearr_36232_36272 = state_36213__$1;(statearr_36232_36272[2] = null);
(statearr_36232_36272[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 11))
{var inst_36152 = (state_36213[11]);var inst_36166 = (state_36213[15]);var inst_36166__$1 = cljs.core.seq.call(null,inst_36152);var state_36213__$1 = (function (){var statearr_36233 = state_36213;(statearr_36233[15] = inst_36166__$1);
return statearr_36233;
})();if(inst_36166__$1)
{var statearr_36234_36273 = state_36213__$1;(statearr_36234_36273[1] = 13);
} else
{var statearr_36235_36274 = state_36213__$1;(statearr_36235_36274[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 12))
{var inst_36186 = (state_36213[2]);var state_36213__$1 = state_36213;var statearr_36236_36275 = state_36213__$1;(statearr_36236_36275[2] = inst_36186);
(statearr_36236_36275[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 13))
{var inst_36166 = (state_36213[15]);var inst_36168 = cljs.core.chunked_seq_QMARK_.call(null,inst_36166);var state_36213__$1 = state_36213;if(inst_36168)
{var statearr_36237_36276 = state_36213__$1;(statearr_36237_36276[1] = 16);
} else
{var statearr_36238_36277 = state_36213__$1;(statearr_36238_36277[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 14))
{var state_36213__$1 = state_36213;var statearr_36239_36278 = state_36213__$1;(statearr_36239_36278[2] = null);
(statearr_36239_36278[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 15))
{var inst_36184 = (state_36213[2]);var state_36213__$1 = state_36213;var statearr_36240_36279 = state_36213__$1;(statearr_36240_36279[2] = inst_36184);
(statearr_36240_36279[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 16))
{var inst_36166 = (state_36213[15]);var inst_36170 = cljs.core.chunk_first.call(null,inst_36166);var inst_36171 = cljs.core.chunk_rest.call(null,inst_36166);var inst_36172 = cljs.core.count.call(null,inst_36170);var inst_36152 = inst_36171;var inst_36153 = inst_36170;var inst_36154 = inst_36172;var inst_36155 = 0;var state_36213__$1 = (function (){var statearr_36241 = state_36213;(statearr_36241[8] = inst_36154);
(statearr_36241[9] = inst_36155);
(statearr_36241[10] = inst_36153);
(statearr_36241[11] = inst_36152);
return statearr_36241;
})();var statearr_36242_36280 = state_36213__$1;(statearr_36242_36280[2] = null);
(statearr_36242_36280[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 17))
{var inst_36166 = (state_36213[15]);var inst_36175 = cljs.core.first.call(null,inst_36166);var inst_36176 = cljs.core.async.muxch_STAR_.call(null,inst_36175);var inst_36177 = cljs.core.async.close_BANG_.call(null,inst_36176);var inst_36178 = cljs.core.next.call(null,inst_36166);var inst_36152 = inst_36178;var inst_36153 = null;var inst_36154 = 0;var inst_36155 = 0;var state_36213__$1 = (function (){var statearr_36243 = state_36213;(statearr_36243[8] = inst_36154);
(statearr_36243[9] = inst_36155);
(statearr_36243[10] = inst_36153);
(statearr_36243[11] = inst_36152);
(statearr_36243[16] = inst_36177);
return statearr_36243;
})();var statearr_36244_36281 = state_36213__$1;(statearr_36244_36281[2] = null);
(statearr_36244_36281[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 18))
{var inst_36181 = (state_36213[2]);var state_36213__$1 = state_36213;var statearr_36245_36282 = state_36213__$1;(statearr_36245_36282[2] = inst_36181);
(statearr_36245_36282[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 19))
{var state_36213__$1 = state_36213;var statearr_36246_36283 = state_36213__$1;(statearr_36246_36283[2] = null);
(statearr_36246_36283[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 20))
{var state_36213__$1 = state_36213;var statearr_36247_36284 = state_36213__$1;(statearr_36247_36284[2] = null);
(statearr_36247_36284[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 21))
{var inst_36206 = (state_36213[2]);var state_36213__$1 = (function (){var statearr_36248 = state_36213;(statearr_36248[17] = inst_36206);
return statearr_36248;
})();var statearr_36249_36285 = state_36213__$1;(statearr_36249_36285[2] = null);
(statearr_36249_36285[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 22))
{var inst_36203 = (state_36213[2]);var state_36213__$1 = state_36213;var statearr_36250_36286 = state_36213__$1;(statearr_36250_36286[2] = inst_36203);
(statearr_36250_36286[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 23))
{var inst_36190 = (state_36213[12]);var inst_36194 = (state_36213[2]);var inst_36195 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36190);var state_36213__$1 = (function (){var statearr_36251 = state_36213;(statearr_36251[18] = inst_36194);
return statearr_36251;
})();var statearr_36252_36287 = state_36213__$1;(statearr_36252_36287[2] = inst_36195);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36213__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36214 === 24))
{var inst_36142 = (state_36213[7]);var inst_36192 = (state_36213[13]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36213,23,Object,null,22);var inst_36199 = cljs.core.async.muxch_STAR_.call(null,inst_36192);var state_36213__$1 = state_36213;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36213__$1,25,inst_36199,inst_36142);
} else
{if((state_val_36214 === 25))
{var inst_36201 = (state_36213[2]);var state_36213__$1 = state_36213;var statearr_36253_36288 = state_36213__$1;(statearr_36253_36288[2] = inst_36201);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36213__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_36257 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36257[0] = state_machine__5507__auto__);
(statearr_36257[1] = 1);
return statearr_36257;
});
var state_machine__5507__auto____1 = (function (state_36213){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36213);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36258){if((e36258 instanceof Object))
{var ex__5510__auto__ = e36258;var statearr_36259_36289 = state_36213;(statearr_36259_36289[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36213);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36258;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36290 = state_36213;
state_36213 = G__36290;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36213){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36213);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36260 = f__5522__auto__.call(null);(statearr_36260[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36261);
return statearr_36260;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___36427 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36397){var state_val_36398 = (state_36397[1]);if((state_val_36398 === 1))
{var state_36397__$1 = state_36397;var statearr_36399_36428 = state_36397__$1;(statearr_36399_36428[2] = null);
(statearr_36399_36428[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 2))
{var inst_36360 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_36361 = 0;var state_36397__$1 = (function (){var statearr_36400 = state_36397;(statearr_36400[7] = inst_36360);
(statearr_36400[8] = inst_36361);
return statearr_36400;
})();var statearr_36401_36429 = state_36397__$1;(statearr_36401_36429[2] = null);
(statearr_36401_36429[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 3))
{var inst_36395 = (state_36397[2]);var state_36397__$1 = state_36397;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36397__$1,inst_36395);
} else
{if((state_val_36398 === 4))
{var inst_36361 = (state_36397[8]);var inst_36363 = (inst_36361 < cnt);var state_36397__$1 = state_36397;if(cljs.core.truth_(inst_36363))
{var statearr_36402_36430 = state_36397__$1;(statearr_36402_36430[1] = 6);
} else
{var statearr_36403_36431 = state_36397__$1;(statearr_36403_36431[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 5))
{var inst_36381 = (state_36397[2]);var state_36397__$1 = (function (){var statearr_36404 = state_36397;(statearr_36404[9] = inst_36381);
return statearr_36404;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36397__$1,12,dchan);
} else
{if((state_val_36398 === 6))
{var state_36397__$1 = state_36397;var statearr_36405_36432 = state_36397__$1;(statearr_36405_36432[2] = null);
(statearr_36405_36432[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 7))
{var state_36397__$1 = state_36397;var statearr_36406_36433 = state_36397__$1;(statearr_36406_36433[2] = null);
(statearr_36406_36433[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 8))
{var inst_36379 = (state_36397[2]);var state_36397__$1 = state_36397;var statearr_36407_36434 = state_36397__$1;(statearr_36407_36434[2] = inst_36379);
(statearr_36407_36434[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 9))
{var inst_36361 = (state_36397[8]);var inst_36374 = (state_36397[2]);var inst_36375 = (inst_36361 + 1);var inst_36361__$1 = inst_36375;var state_36397__$1 = (function (){var statearr_36408 = state_36397;(statearr_36408[8] = inst_36361__$1);
(statearr_36408[10] = inst_36374);
return statearr_36408;
})();var statearr_36409_36435 = state_36397__$1;(statearr_36409_36435[2] = null);
(statearr_36409_36435[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 10))
{var inst_36365 = (state_36397[2]);var inst_36366 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_36397__$1 = (function (){var statearr_36410 = state_36397;(statearr_36410[11] = inst_36365);
return statearr_36410;
})();var statearr_36411_36436 = state_36397__$1;(statearr_36411_36436[2] = inst_36366);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36397__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 11))
{var inst_36361 = (state_36397[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36397,10,Object,null,9);var inst_36370 = chs__$1.call(null,inst_36361);var inst_36371 = done.call(null,inst_36361);var inst_36372 = cljs.core.async.take_BANG_.call(null,inst_36370,inst_36371);var state_36397__$1 = state_36397;var statearr_36412_36437 = state_36397__$1;(statearr_36412_36437[2] = inst_36372);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36397__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 12))
{var inst_36383 = (state_36397[12]);var inst_36383__$1 = (state_36397[2]);var inst_36384 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36383__$1);var state_36397__$1 = (function (){var statearr_36413 = state_36397;(statearr_36413[12] = inst_36383__$1);
return statearr_36413;
})();if(cljs.core.truth_(inst_36384))
{var statearr_36414_36438 = state_36397__$1;(statearr_36414_36438[1] = 13);
} else
{var statearr_36415_36439 = state_36397__$1;(statearr_36415_36439[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 13))
{var inst_36386 = cljs.core.async.close_BANG_.call(null,out);var state_36397__$1 = state_36397;var statearr_36416_36440 = state_36397__$1;(statearr_36416_36440[2] = inst_36386);
(statearr_36416_36440[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 14))
{var inst_36383 = (state_36397[12]);var inst_36388 = cljs.core.apply.call(null,f,inst_36383);var state_36397__$1 = state_36397;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36397__$1,16,out,inst_36388);
} else
{if((state_val_36398 === 15))
{var inst_36393 = (state_36397[2]);var state_36397__$1 = state_36397;var statearr_36417_36441 = state_36397__$1;(statearr_36417_36441[2] = inst_36393);
(statearr_36417_36441[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36398 === 16))
{var inst_36390 = (state_36397[2]);var state_36397__$1 = (function (){var statearr_36418 = state_36397;(statearr_36418[13] = inst_36390);
return statearr_36418;
})();var statearr_36419_36442 = state_36397__$1;(statearr_36419_36442[2] = null);
(statearr_36419_36442[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36423 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36423[0] = state_machine__5507__auto__);
(statearr_36423[1] = 1);
return statearr_36423;
});
var state_machine__5507__auto____1 = (function (state_36397){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36397);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36424){if((e36424 instanceof Object))
{var ex__5510__auto__ = e36424;var statearr_36425_36443 = state_36397;(statearr_36425_36443[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36397);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36424;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36444 = state_36397;
state_36397 = G__36444;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36397){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36397);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36426 = f__5522__auto__.call(null);(statearr_36426[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36427);
return statearr_36426;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36552 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36528){var state_val_36529 = (state_36528[1]);if((state_val_36529 === 1))
{var inst_36499 = cljs.core.vec.call(null,chs);var inst_36500 = inst_36499;var state_36528__$1 = (function (){var statearr_36530 = state_36528;(statearr_36530[7] = inst_36500);
return statearr_36530;
})();var statearr_36531_36553 = state_36528__$1;(statearr_36531_36553[2] = null);
(statearr_36531_36553[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36529 === 2))
{var inst_36500 = (state_36528[7]);var inst_36502 = cljs.core.count.call(null,inst_36500);var inst_36503 = (inst_36502 > 0);var state_36528__$1 = state_36528;if(cljs.core.truth_(inst_36503))
{var statearr_36532_36554 = state_36528__$1;(statearr_36532_36554[1] = 4);
} else
{var statearr_36533_36555 = state_36528__$1;(statearr_36533_36555[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36529 === 3))
{var inst_36526 = (state_36528[2]);var state_36528__$1 = state_36528;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36528__$1,inst_36526);
} else
{if((state_val_36529 === 4))
{var inst_36500 = (state_36528[7]);var state_36528__$1 = state_36528;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_36528__$1,7,inst_36500);
} else
{if((state_val_36529 === 5))
{var inst_36522 = cljs.core.async.close_BANG_.call(null,out);var state_36528__$1 = state_36528;var statearr_36534_36556 = state_36528__$1;(statearr_36534_36556[2] = inst_36522);
(statearr_36534_36556[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36529 === 6))
{var inst_36524 = (state_36528[2]);var state_36528__$1 = state_36528;var statearr_36535_36557 = state_36528__$1;(statearr_36535_36557[2] = inst_36524);
(statearr_36535_36557[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36529 === 7))
{var inst_36508 = (state_36528[8]);var inst_36507 = (state_36528[9]);var inst_36507__$1 = (state_36528[2]);var inst_36508__$1 = cljs.core.nth.call(null,inst_36507__$1,0,null);var inst_36509 = cljs.core.nth.call(null,inst_36507__$1,1,null);var inst_36510 = (inst_36508__$1 == null);var state_36528__$1 = (function (){var statearr_36536 = state_36528;(statearr_36536[8] = inst_36508__$1);
(statearr_36536[9] = inst_36507__$1);
(statearr_36536[10] = inst_36509);
return statearr_36536;
})();if(cljs.core.truth_(inst_36510))
{var statearr_36537_36558 = state_36528__$1;(statearr_36537_36558[1] = 8);
} else
{var statearr_36538_36559 = state_36528__$1;(statearr_36538_36559[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36529 === 8))
{var inst_36500 = (state_36528[7]);var inst_36508 = (state_36528[8]);var inst_36507 = (state_36528[9]);var inst_36509 = (state_36528[10]);var inst_36512 = (function (){var c = inst_36509;var v = inst_36508;var vec__36505 = inst_36507;var cs = inst_36500;return ((function (c,v,vec__36505,cs,inst_36500,inst_36508,inst_36507,inst_36509,state_val_36529){
return (function (p1__36445_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__36445_SHARP_);
});
;})(c,v,vec__36505,cs,inst_36500,inst_36508,inst_36507,inst_36509,state_val_36529))
})();var inst_36513 = cljs.core.filterv.call(null,inst_36512,inst_36500);var inst_36500__$1 = inst_36513;var state_36528__$1 = (function (){var statearr_36539 = state_36528;(statearr_36539[7] = inst_36500__$1);
return statearr_36539;
})();var statearr_36540_36560 = state_36528__$1;(statearr_36540_36560[2] = null);
(statearr_36540_36560[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36529 === 9))
{var inst_36508 = (state_36528[8]);var state_36528__$1 = state_36528;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36528__$1,11,out,inst_36508);
} else
{if((state_val_36529 === 10))
{var inst_36520 = (state_36528[2]);var state_36528__$1 = state_36528;var statearr_36542_36561 = state_36528__$1;(statearr_36542_36561[2] = inst_36520);
(statearr_36542_36561[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36529 === 11))
{var inst_36500 = (state_36528[7]);var inst_36517 = (state_36528[2]);var tmp36541 = inst_36500;var inst_36500__$1 = tmp36541;var state_36528__$1 = (function (){var statearr_36543 = state_36528;(statearr_36543[7] = inst_36500__$1);
(statearr_36543[11] = inst_36517);
return statearr_36543;
})();var statearr_36544_36562 = state_36528__$1;(statearr_36544_36562[2] = null);
(statearr_36544_36562[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36548 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36548[0] = state_machine__5507__auto__);
(statearr_36548[1] = 1);
return statearr_36548;
});
var state_machine__5507__auto____1 = (function (state_36528){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36528);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36549){if((e36549 instanceof Object))
{var ex__5510__auto__ = e36549;var statearr_36550_36563 = state_36528;(statearr_36550_36563[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36528);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36549;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36564 = state_36528;
state_36528 = G__36564;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36528){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36551 = f__5522__auto__.call(null);(statearr_36551[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36552);
return statearr_36551;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36657 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36634){var state_val_36635 = (state_36634[1]);if((state_val_36635 === 1))
{var inst_36611 = 0;var state_36634__$1 = (function (){var statearr_36636 = state_36634;(statearr_36636[7] = inst_36611);
return statearr_36636;
})();var statearr_36637_36658 = state_36634__$1;(statearr_36637_36658[2] = null);
(statearr_36637_36658[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36635 === 2))
{var inst_36611 = (state_36634[7]);var inst_36613 = (inst_36611 < n);var state_36634__$1 = state_36634;if(cljs.core.truth_(inst_36613))
{var statearr_36638_36659 = state_36634__$1;(statearr_36638_36659[1] = 4);
} else
{var statearr_36639_36660 = state_36634__$1;(statearr_36639_36660[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36635 === 3))
{var inst_36631 = (state_36634[2]);var inst_36632 = cljs.core.async.close_BANG_.call(null,out);var state_36634__$1 = (function (){var statearr_36640 = state_36634;(statearr_36640[8] = inst_36631);
return statearr_36640;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36634__$1,inst_36632);
} else
{if((state_val_36635 === 4))
{var state_36634__$1 = state_36634;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36634__$1,7,ch);
} else
{if((state_val_36635 === 5))
{var state_36634__$1 = state_36634;var statearr_36641_36661 = state_36634__$1;(statearr_36641_36661[2] = null);
(statearr_36641_36661[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36635 === 6))
{var inst_36629 = (state_36634[2]);var state_36634__$1 = state_36634;var statearr_36642_36662 = state_36634__$1;(statearr_36642_36662[2] = inst_36629);
(statearr_36642_36662[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36635 === 7))
{var inst_36616 = (state_36634[9]);var inst_36616__$1 = (state_36634[2]);var inst_36617 = (inst_36616__$1 == null);var inst_36618 = cljs.core.not.call(null,inst_36617);var state_36634__$1 = (function (){var statearr_36643 = state_36634;(statearr_36643[9] = inst_36616__$1);
return statearr_36643;
})();if(inst_36618)
{var statearr_36644_36663 = state_36634__$1;(statearr_36644_36663[1] = 8);
} else
{var statearr_36645_36664 = state_36634__$1;(statearr_36645_36664[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36635 === 8))
{var inst_36616 = (state_36634[9]);var state_36634__$1 = state_36634;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36634__$1,11,out,inst_36616);
} else
{if((state_val_36635 === 9))
{var state_36634__$1 = state_36634;var statearr_36646_36665 = state_36634__$1;(statearr_36646_36665[2] = null);
(statearr_36646_36665[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36635 === 10))
{var inst_36626 = (state_36634[2]);var state_36634__$1 = state_36634;var statearr_36647_36666 = state_36634__$1;(statearr_36647_36666[2] = inst_36626);
(statearr_36647_36666[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36635 === 11))
{var inst_36611 = (state_36634[7]);var inst_36621 = (state_36634[2]);var inst_36622 = (inst_36611 + 1);var inst_36611__$1 = inst_36622;var state_36634__$1 = (function (){var statearr_36648 = state_36634;(statearr_36648[10] = inst_36621);
(statearr_36648[7] = inst_36611__$1);
return statearr_36648;
})();var statearr_36649_36667 = state_36634__$1;(statearr_36649_36667[2] = null);
(statearr_36649_36667[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36653 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36653[0] = state_machine__5507__auto__);
(statearr_36653[1] = 1);
return statearr_36653;
});
var state_machine__5507__auto____1 = (function (state_36634){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36634);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36654){if((e36654 instanceof Object))
{var ex__5510__auto__ = e36654;var statearr_36655_36668 = state_36634;(statearr_36655_36668[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36634);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36654;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36669 = state_36634;
state_36634 = G__36669;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36634){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36656 = f__5522__auto__.call(null);(statearr_36656[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36657);
return statearr_36656;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36766 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36741){var state_val_36742 = (state_36741[1]);if((state_val_36742 === 1))
{var inst_36718 = null;var state_36741__$1 = (function (){var statearr_36743 = state_36741;(statearr_36743[7] = inst_36718);
return statearr_36743;
})();var statearr_36744_36767 = state_36741__$1;(statearr_36744_36767[2] = null);
(statearr_36744_36767[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36742 === 2))
{var state_36741__$1 = state_36741;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36741__$1,4,ch);
} else
{if((state_val_36742 === 3))
{var inst_36738 = (state_36741[2]);var inst_36739 = cljs.core.async.close_BANG_.call(null,out);var state_36741__$1 = (function (){var statearr_36745 = state_36741;(statearr_36745[8] = inst_36738);
return statearr_36745;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36741__$1,inst_36739);
} else
{if((state_val_36742 === 4))
{var inst_36721 = (state_36741[9]);var inst_36721__$1 = (state_36741[2]);var inst_36722 = (inst_36721__$1 == null);var inst_36723 = cljs.core.not.call(null,inst_36722);var state_36741__$1 = (function (){var statearr_36746 = state_36741;(statearr_36746[9] = inst_36721__$1);
return statearr_36746;
})();if(inst_36723)
{var statearr_36747_36768 = state_36741__$1;(statearr_36747_36768[1] = 5);
} else
{var statearr_36748_36769 = state_36741__$1;(statearr_36748_36769[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36742 === 5))
{var inst_36718 = (state_36741[7]);var inst_36721 = (state_36741[9]);var inst_36725 = cljs.core._EQ_.call(null,inst_36721,inst_36718);var state_36741__$1 = state_36741;if(inst_36725)
{var statearr_36749_36770 = state_36741__$1;(statearr_36749_36770[1] = 8);
} else
{var statearr_36750_36771 = state_36741__$1;(statearr_36750_36771[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36742 === 6))
{var state_36741__$1 = state_36741;var statearr_36752_36772 = state_36741__$1;(statearr_36752_36772[2] = null);
(statearr_36752_36772[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36742 === 7))
{var inst_36736 = (state_36741[2]);var state_36741__$1 = state_36741;var statearr_36753_36773 = state_36741__$1;(statearr_36753_36773[2] = inst_36736);
(statearr_36753_36773[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36742 === 8))
{var inst_36718 = (state_36741[7]);var tmp36751 = inst_36718;var inst_36718__$1 = tmp36751;var state_36741__$1 = (function (){var statearr_36754 = state_36741;(statearr_36754[7] = inst_36718__$1);
return statearr_36754;
})();var statearr_36755_36774 = state_36741__$1;(statearr_36755_36774[2] = null);
(statearr_36755_36774[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36742 === 9))
{var inst_36721 = (state_36741[9]);var state_36741__$1 = state_36741;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36741__$1,11,out,inst_36721);
} else
{if((state_val_36742 === 10))
{var inst_36733 = (state_36741[2]);var state_36741__$1 = state_36741;var statearr_36756_36775 = state_36741__$1;(statearr_36756_36775[2] = inst_36733);
(statearr_36756_36775[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36742 === 11))
{var inst_36721 = (state_36741[9]);var inst_36730 = (state_36741[2]);var inst_36718 = inst_36721;var state_36741__$1 = (function (){var statearr_36757 = state_36741;(statearr_36757[7] = inst_36718);
(statearr_36757[10] = inst_36730);
return statearr_36757;
})();var statearr_36758_36776 = state_36741__$1;(statearr_36758_36776[2] = null);
(statearr_36758_36776[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_36762 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_36762[0] = state_machine__5507__auto__);
(statearr_36762[1] = 1);
return statearr_36762;
});
var state_machine__5507__auto____1 = (function (state_36741){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36741);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36763){if((e36763 instanceof Object))
{var ex__5510__auto__ = e36763;var statearr_36764_36777 = state_36741;(statearr_36764_36777[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36741);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36763;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36778 = state_36741;
state_36741 = G__36778;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36741){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36765 = f__5522__auto__.call(null);(statearr_36765[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36766);
return statearr_36765;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___36913 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_36883){var state_val_36884 = (state_36883[1]);if((state_val_36884 === 1))
{var inst_36846 = (new Array(n));var inst_36847 = inst_36846;var inst_36848 = 0;var state_36883__$1 = (function (){var statearr_36885 = state_36883;(statearr_36885[7] = inst_36848);
(statearr_36885[8] = inst_36847);
return statearr_36885;
})();var statearr_36886_36914 = state_36883__$1;(statearr_36886_36914[2] = null);
(statearr_36886_36914[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 2))
{var state_36883__$1 = state_36883;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36883__$1,4,ch);
} else
{if((state_val_36884 === 3))
{var inst_36881 = (state_36883[2]);var state_36883__$1 = state_36883;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36883__$1,inst_36881);
} else
{if((state_val_36884 === 4))
{var inst_36851 = (state_36883[9]);var inst_36851__$1 = (state_36883[2]);var inst_36852 = (inst_36851__$1 == null);var inst_36853 = cljs.core.not.call(null,inst_36852);var state_36883__$1 = (function (){var statearr_36887 = state_36883;(statearr_36887[9] = inst_36851__$1);
return statearr_36887;
})();if(inst_36853)
{var statearr_36888_36915 = state_36883__$1;(statearr_36888_36915[1] = 5);
} else
{var statearr_36889_36916 = state_36883__$1;(statearr_36889_36916[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 5))
{var inst_36848 = (state_36883[7]);var inst_36856 = (state_36883[10]);var inst_36847 = (state_36883[8]);var inst_36851 = (state_36883[9]);var inst_36855 = (inst_36847[inst_36848] = inst_36851);var inst_36856__$1 = (inst_36848 + 1);var inst_36857 = (inst_36856__$1 < n);var state_36883__$1 = (function (){var statearr_36890 = state_36883;(statearr_36890[11] = inst_36855);
(statearr_36890[10] = inst_36856__$1);
return statearr_36890;
})();if(cljs.core.truth_(inst_36857))
{var statearr_36891_36917 = state_36883__$1;(statearr_36891_36917[1] = 8);
} else
{var statearr_36892_36918 = state_36883__$1;(statearr_36892_36918[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 6))
{var inst_36848 = (state_36883[7]);var inst_36869 = (inst_36848 > 0);var state_36883__$1 = state_36883;if(cljs.core.truth_(inst_36869))
{var statearr_36894_36919 = state_36883__$1;(statearr_36894_36919[1] = 12);
} else
{var statearr_36895_36920 = state_36883__$1;(statearr_36895_36920[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 7))
{var inst_36879 = (state_36883[2]);var state_36883__$1 = state_36883;var statearr_36896_36921 = state_36883__$1;(statearr_36896_36921[2] = inst_36879);
(statearr_36896_36921[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 8))
{var inst_36856 = (state_36883[10]);var inst_36847 = (state_36883[8]);var tmp36893 = inst_36847;var inst_36847__$1 = tmp36893;var inst_36848 = inst_36856;var state_36883__$1 = (function (){var statearr_36897 = state_36883;(statearr_36897[7] = inst_36848);
(statearr_36897[8] = inst_36847__$1);
return statearr_36897;
})();var statearr_36898_36922 = state_36883__$1;(statearr_36898_36922[2] = null);
(statearr_36898_36922[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 9))
{var inst_36847 = (state_36883[8]);var inst_36861 = cljs.core.vec.call(null,inst_36847);var state_36883__$1 = state_36883;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36883__$1,11,out,inst_36861);
} else
{if((state_val_36884 === 10))
{var inst_36867 = (state_36883[2]);var state_36883__$1 = state_36883;var statearr_36899_36923 = state_36883__$1;(statearr_36899_36923[2] = inst_36867);
(statearr_36899_36923[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 11))
{var inst_36863 = (state_36883[2]);var inst_36864 = (new Array(n));var inst_36847 = inst_36864;var inst_36848 = 0;var state_36883__$1 = (function (){var statearr_36900 = state_36883;(statearr_36900[7] = inst_36848);
(statearr_36900[12] = inst_36863);
(statearr_36900[8] = inst_36847);
return statearr_36900;
})();var statearr_36901_36924 = state_36883__$1;(statearr_36901_36924[2] = null);
(statearr_36901_36924[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 12))
{var inst_36847 = (state_36883[8]);var inst_36871 = cljs.core.vec.call(null,inst_36847);var state_36883__$1 = state_36883;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36883__$1,15,out,inst_36871);
} else
{if((state_val_36884 === 13))
{var state_36883__$1 = state_36883;var statearr_36902_36925 = state_36883__$1;(statearr_36902_36925[2] = null);
(statearr_36902_36925[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 14))
{var inst_36876 = (state_36883[2]);var inst_36877 = cljs.core.async.close_BANG_.call(null,out);var state_36883__$1 = (function (){var statearr_36903 = state_36883;(statearr_36903[13] = inst_36876);
return statearr_36903;
})();var statearr_36904_36926 = state_36883__$1;(statearr_36904_36926[2] = inst_36877);
(statearr_36904_36926[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_36884 === 15))
{var inst_36873 = (state_36883[2]);var state_36883__$1 = state_36883;var statearr_36905_36927 = state_36883__$1;(statearr_36905_36927[2] = inst_36873);
(statearr_36905_36927[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_36909 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_36909[0] = state_machine__5507__auto__);
(statearr_36909[1] = 1);
return statearr_36909;
});
var state_machine__5507__auto____1 = (function (state_36883){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_36883);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e36910){if((e36910 instanceof Object))
{var ex__5510__auto__ = e36910;var statearr_36911_36928 = state_36883;(statearr_36911_36928[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36883);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e36910;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__36929 = state_36883;
state_36883 = G__36929;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_36883){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_36883);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_36912 = f__5522__auto__.call(null);(statearr_36912[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___36913);
return statearr_36912;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___37072 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_37042){var state_val_37043 = (state_37042[1]);if((state_val_37043 === 1))
{var inst_37001 = [];var inst_37002 = inst_37001;var inst_37003 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_37042__$1 = (function (){var statearr_37044 = state_37042;(statearr_37044[7] = inst_37003);
(statearr_37044[8] = inst_37002);
return statearr_37044;
})();var statearr_37045_37073 = state_37042__$1;(statearr_37045_37073[2] = null);
(statearr_37045_37073[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 2))
{var state_37042__$1 = state_37042;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37042__$1,4,ch);
} else
{if((state_val_37043 === 3))
{var inst_37040 = (state_37042[2]);var state_37042__$1 = state_37042;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37042__$1,inst_37040);
} else
{if((state_val_37043 === 4))
{var inst_37006 = (state_37042[9]);var inst_37006__$1 = (state_37042[2]);var inst_37007 = (inst_37006__$1 == null);var inst_37008 = cljs.core.not.call(null,inst_37007);var state_37042__$1 = (function (){var statearr_37046 = state_37042;(statearr_37046[9] = inst_37006__$1);
return statearr_37046;
})();if(inst_37008)
{var statearr_37047_37074 = state_37042__$1;(statearr_37047_37074[1] = 5);
} else
{var statearr_37048_37075 = state_37042__$1;(statearr_37048_37075[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 5))
{var inst_37006 = (state_37042[9]);var inst_37003 = (state_37042[7]);var inst_37010 = (state_37042[10]);var inst_37010__$1 = f.call(null,inst_37006);var inst_37011 = cljs.core._EQ_.call(null,inst_37010__$1,inst_37003);var inst_37012 = cljs.core.keyword_identical_QMARK_.call(null,inst_37003,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_37013 = (inst_37011) || (inst_37012);var state_37042__$1 = (function (){var statearr_37049 = state_37042;(statearr_37049[10] = inst_37010__$1);
return statearr_37049;
})();if(cljs.core.truth_(inst_37013))
{var statearr_37050_37076 = state_37042__$1;(statearr_37050_37076[1] = 8);
} else
{var statearr_37051_37077 = state_37042__$1;(statearr_37051_37077[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 6))
{var inst_37002 = (state_37042[8]);var inst_37027 = inst_37002.length;var inst_37028 = (inst_37027 > 0);var state_37042__$1 = state_37042;if(cljs.core.truth_(inst_37028))
{var statearr_37053_37078 = state_37042__$1;(statearr_37053_37078[1] = 12);
} else
{var statearr_37054_37079 = state_37042__$1;(statearr_37054_37079[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 7))
{var inst_37038 = (state_37042[2]);var state_37042__$1 = state_37042;var statearr_37055_37080 = state_37042__$1;(statearr_37055_37080[2] = inst_37038);
(statearr_37055_37080[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 8))
{var inst_37006 = (state_37042[9]);var inst_37002 = (state_37042[8]);var inst_37010 = (state_37042[10]);var inst_37015 = inst_37002.push(inst_37006);var tmp37052 = inst_37002;var inst_37002__$1 = tmp37052;var inst_37003 = inst_37010;var state_37042__$1 = (function (){var statearr_37056 = state_37042;(statearr_37056[7] = inst_37003);
(statearr_37056[8] = inst_37002__$1);
(statearr_37056[11] = inst_37015);
return statearr_37056;
})();var statearr_37057_37081 = state_37042__$1;(statearr_37057_37081[2] = null);
(statearr_37057_37081[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 9))
{var inst_37002 = (state_37042[8]);var inst_37018 = cljs.core.vec.call(null,inst_37002);var state_37042__$1 = state_37042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37042__$1,11,out,inst_37018);
} else
{if((state_val_37043 === 10))
{var inst_37025 = (state_37042[2]);var state_37042__$1 = state_37042;var statearr_37058_37082 = state_37042__$1;(statearr_37058_37082[2] = inst_37025);
(statearr_37058_37082[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 11))
{var inst_37006 = (state_37042[9]);var inst_37010 = (state_37042[10]);var inst_37020 = (state_37042[2]);var inst_37021 = [];var inst_37022 = inst_37021.push(inst_37006);var inst_37002 = inst_37021;var inst_37003 = inst_37010;var state_37042__$1 = (function (){var statearr_37059 = state_37042;(statearr_37059[7] = inst_37003);
(statearr_37059[8] = inst_37002);
(statearr_37059[12] = inst_37020);
(statearr_37059[13] = inst_37022);
return statearr_37059;
})();var statearr_37060_37083 = state_37042__$1;(statearr_37060_37083[2] = null);
(statearr_37060_37083[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 12))
{var inst_37002 = (state_37042[8]);var inst_37030 = cljs.core.vec.call(null,inst_37002);var state_37042__$1 = state_37042;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37042__$1,15,out,inst_37030);
} else
{if((state_val_37043 === 13))
{var state_37042__$1 = state_37042;var statearr_37061_37084 = state_37042__$1;(statearr_37061_37084[2] = null);
(statearr_37061_37084[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 14))
{var inst_37035 = (state_37042[2]);var inst_37036 = cljs.core.async.close_BANG_.call(null,out);var state_37042__$1 = (function (){var statearr_37062 = state_37042;(statearr_37062[14] = inst_37035);
return statearr_37062;
})();var statearr_37063_37085 = state_37042__$1;(statearr_37063_37085[2] = inst_37036);
(statearr_37063_37085[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_37043 === 15))
{var inst_37032 = (state_37042[2]);var state_37042__$1 = state_37042;var statearr_37064_37086 = state_37042__$1;(statearr_37064_37086[2] = inst_37032);
(statearr_37064_37086[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_37068 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_37068[0] = state_machine__5507__auto__);
(statearr_37068[1] = 1);
return statearr_37068;
});
var state_machine__5507__auto____1 = (function (state_37042){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_37042);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e37069){if((e37069 instanceof Object))
{var ex__5510__auto__ = e37069;var statearr_37070_37087 = state_37042;(statearr_37070_37087[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37042);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e37069;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__37088 = state_37042;
state_37042 = G__37088;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_37042){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_37042);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_37071 = f__5522__auto__.call(null);(statearr_37071[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___37072);
return statearr_37071;
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

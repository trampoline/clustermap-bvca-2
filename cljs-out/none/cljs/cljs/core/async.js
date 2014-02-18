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
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t13694 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13694 = (function (f,fn_handler,meta13695){
this.f = f;
this.fn_handler = fn_handler;
this.meta13695 = meta13695;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13694.cljs$lang$type = true;
cljs.core.async.t13694.cljs$lang$ctorStr = "cljs.core.async/t13694";
cljs.core.async.t13694.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13694");
});
cljs.core.async.t13694.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t13694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t13694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13696){var self__ = this;
var _13696__$1 = this;return self__.meta13695;
});
cljs.core.async.t13694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13696,meta13695__$1){var self__ = this;
var _13696__$1 = this;return (new cljs.core.async.t13694(self__.f,self__.fn_handler,meta13695__$1));
});
cljs.core.async.__GT_t13694 = (function __GT_t13694(f__$1,fn_handler__$1,meta13695){return (new cljs.core.async.t13694(f__$1,fn_handler__$1,meta13695));
});
}
return (new cljs.core.async.t13694(f,fn_handler,null));
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
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__13698 = buff;if(G__13698)
{var bit__4050__auto__ = null;if(cljs.core.truth_((function (){var or__3406__auto__ = bit__4050__auto__;if(cljs.core.truth_(or__3406__auto__))
{return or__3406__auto__;
} else
{return G__13698.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__13698.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13698);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__13698);
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
{var val_13699 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_13699);
} else
{cljs.core.async.impl.dispatch.run.call(null,(function (){return fn1.call(null,val_13699);
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
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4248__auto___13700 = n;var x_13701 = 0;while(true){
if((x_13701 < n__4248__auto___13700))
{(a[x_13701] = 0);
{
var G__13702 = (x_13701 + 1);
x_13701 = G__13702;
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
var G__13703 = (i + 1);
i = G__13703;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t13707 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13707 = (function (flag,alt_flag,meta13708){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta13708 = meta13708;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13707.cljs$lang$type = true;
cljs.core.async.t13707.cljs$lang$ctorStr = "cljs.core.async/t13707";
cljs.core.async.t13707.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13707");
});
cljs.core.async.t13707.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});
cljs.core.async.t13707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});
cljs.core.async.t13707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13709){var self__ = this;
var _13709__$1 = this;return self__.meta13708;
});
cljs.core.async.t13707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13709,meta13708__$1){var self__ = this;
var _13709__$1 = this;return (new cljs.core.async.t13707(self__.flag,self__.alt_flag,meta13708__$1));
});
cljs.core.async.__GT_t13707 = (function __GT_t13707(flag__$1,alt_flag__$1,meta13708){return (new cljs.core.async.t13707(flag__$1,alt_flag__$1,meta13708));
});
}
return (new cljs.core.async.t13707(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t13713 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13713 = (function (cb,flag,alt_handler,meta13714){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta13714 = meta13714;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13713.cljs$lang$type = true;
cljs.core.async.t13713.cljs$lang$ctorStr = "cljs.core.async/t13713";
cljs.core.async.t13713.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13713");
});
cljs.core.async.t13713.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13713.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t13713.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t13713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13715){var self__ = this;
var _13715__$1 = this;return self__.meta13714;
});
cljs.core.async.t13713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13715,meta13714__$1){var self__ = this;
var _13715__$1 = this;return (new cljs.core.async.t13713(self__.cb,self__.flag,self__.alt_handler,meta13714__$1));
});
cljs.core.async.__GT_t13713 = (function __GT_t13713(cb__$1,flag__$1,alt_handler__$1,meta13714){return (new cljs.core.async.t13713(cb__$1,flag__$1,alt_handler__$1,meta13714));
});
}
return (new cljs.core.async.t13713(cb,flag,alt_handler,null));
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
return (function (p1__13716_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__13716_SHARP_,port], null));
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
var G__13717 = (i + 1);
i = G__13717;
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
var alts_BANG___delegate = function (ports,p__13718){var map__13720 = p__13718;var map__13720__$1 = ((cljs.core.seq_QMARK_.call(null,map__13720))?cljs.core.apply.call(null,cljs.core.hash_map,map__13720):map__13720);var opts = map__13720__$1;if(null)
{return null;
} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("alts! used not in (go ...) block"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,null))].join('')));
}
};
var alts_BANG_ = function (ports,var_args){
var p__13718 = null;if (arguments.length > 1) {
  p__13718 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__13718);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__13721){
var ports = cljs.core.first(arglist__13721);
var p__13718 = cljs.core.rest(arglist__13721);
return alts_BANG___delegate(ports,p__13718);
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
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t13729 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13729 = (function (ch,f,map_LT_,meta13730){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13730 = meta13730;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13729.cljs$lang$type = true;
cljs.core.async.t13729.cljs$lang$ctorStr = "cljs.core.async/t13729";
cljs.core.async.t13729.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13729");
});
cljs.core.async.t13729.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13729.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t13729.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13729.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t13732 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13732 = (function (fn1,_,meta13730,ch,f,map_LT_,meta13733){
this.fn1 = fn1;
this._ = _;
this.meta13730 = meta13730;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta13733 = meta13733;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13732.cljs$lang$type = true;
cljs.core.async.t13732.cljs$lang$ctorStr = "cljs.core.async/t13732";
cljs.core.async.t13732.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13732");
});
cljs.core.async.t13732.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t13732.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});
cljs.core.async.t13732.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});
cljs.core.async.t13732.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4){
return (function (p1__13722_SHARP_){return f1.call(null,(((p1__13722_SHARP_ == null))?null:self__.f.call(null,p1__13722_SHARP_)));
});
;})(f1,___$4))
});
cljs.core.async.t13732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13734){var self__ = this;
var _13734__$1 = this;return self__.meta13733;
});
cljs.core.async.t13732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13734,meta13733__$1){var self__ = this;
var _13734__$1 = this;return (new cljs.core.async.t13732(self__.fn1,self__._,self__.meta13730,self__.ch,self__.f,self__.map_LT_,meta13733__$1));
});
cljs.core.async.__GT_t13732 = (function __GT_t13732(fn1__$1,___$2,meta13730__$1,ch__$2,f__$2,map_LT___$2,meta13733){return (new cljs.core.async.t13732(fn1__$1,___$2,meta13730__$1,ch__$2,f__$2,map_LT___$2,meta13733));
});
}
return (new cljs.core.async.t13732(fn1,___$1,self__.meta13730,self__.ch,self__.f,self__.map_LT_,null));
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
cljs.core.async.t13729.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13729.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13731){var self__ = this;
var _13731__$1 = this;return self__.meta13730;
});
cljs.core.async.t13729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13731,meta13730__$1){var self__ = this;
var _13731__$1 = this;return (new cljs.core.async.t13729(self__.ch,self__.f,self__.map_LT_,meta13730__$1));
});
cljs.core.async.__GT_t13729 = (function __GT_t13729(ch__$1,f__$1,map_LT___$1,meta13730){return (new cljs.core.async.t13729(ch__$1,f__$1,map_LT___$1,meta13730));
});
}
return (new cljs.core.async.t13729(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t13738 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13738 = (function (ch,f,map_GT_,meta13739){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta13739 = meta13739;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13738.cljs$lang$type = true;
cljs.core.async.t13738.cljs$lang$ctorStr = "cljs.core.async/t13738";
cljs.core.async.t13738.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13738");
});
cljs.core.async.t13738.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13738.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t13738.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13738.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13738.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13738.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13738.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13740){var self__ = this;
var _13740__$1 = this;return self__.meta13739;
});
cljs.core.async.t13738.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13740,meta13739__$1){var self__ = this;
var _13740__$1 = this;return (new cljs.core.async.t13738(self__.ch,self__.f,self__.map_GT_,meta13739__$1));
});
cljs.core.async.__GT_t13738 = (function __GT_t13738(ch__$1,f__$1,map_GT___$1,meta13739){return (new cljs.core.async.t13738(ch__$1,f__$1,map_GT___$1,meta13739));
});
}
return (new cljs.core.async.t13738(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t13744 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t13744 = (function (ch,p,filter_GT_,meta13745){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta13745 = meta13745;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t13744.cljs$lang$type = true;
cljs.core.async.t13744.cljs$lang$ctorStr = "cljs.core.async/t13744";
cljs.core.async.t13744.cljs$lang$ctorPrWriter = (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t13744");
});
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t13744.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t13744.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_13746){var self__ = this;
var _13746__$1 = this;return self__.meta13745;
});
cljs.core.async.t13744.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_13746,meta13745__$1){var self__ = this;
var _13746__$1 = this;return (new cljs.core.async.t13744(self__.ch,self__.p,self__.filter_GT_,meta13745__$1));
});
cljs.core.async.__GT_t13744 = (function __GT_t13744(ch__$1,p__$1,filter_GT___$1,meta13745){return (new cljs.core.async.t13744(ch__$1,p__$1,filter_GT___$1,meta13745));
});
}
return (new cljs.core.async.t13744(ch,p,filter_GT_,null));
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
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___13829 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13808){var state_val_13809 = (state_13808[1]);if((state_val_13809 === 1))
{var state_13808__$1 = state_13808;var statearr_13810_13830 = state_13808__$1;(statearr_13810_13830[2] = null);
(statearr_13810_13830[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 2))
{var state_13808__$1 = state_13808;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13808__$1,4,ch);
} else
{if((state_val_13809 === 3))
{var inst_13806 = (state_13808[2]);var state_13808__$1 = state_13808;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13808__$1,inst_13806);
} else
{if((state_val_13809 === 4))
{var inst_13790 = (state_13808[7]);var inst_13790__$1 = (state_13808[2]);var inst_13791 = (inst_13790__$1 == null);var state_13808__$1 = (function (){var statearr_13811 = state_13808;(statearr_13811[7] = inst_13790__$1);
return statearr_13811;
})();if(cljs.core.truth_(inst_13791))
{var statearr_13812_13831 = state_13808__$1;(statearr_13812_13831[1] = 5);
} else
{var statearr_13813_13832 = state_13808__$1;(statearr_13813_13832[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 5))
{var inst_13793 = cljs.core.async.close_BANG_.call(null,out);var state_13808__$1 = state_13808;var statearr_13814_13833 = state_13808__$1;(statearr_13814_13833[2] = inst_13793);
(statearr_13814_13833[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 6))
{var inst_13790 = (state_13808[7]);var inst_13795 = p.call(null,inst_13790);var state_13808__$1 = state_13808;if(cljs.core.truth_(inst_13795))
{var statearr_13815_13834 = state_13808__$1;(statearr_13815_13834[1] = 8);
} else
{var statearr_13816_13835 = state_13808__$1;(statearr_13816_13835[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 7))
{var inst_13804 = (state_13808[2]);var state_13808__$1 = state_13808;var statearr_13817_13836 = state_13808__$1;(statearr_13817_13836[2] = inst_13804);
(statearr_13817_13836[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 8))
{var inst_13790 = (state_13808[7]);var state_13808__$1 = state_13808;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13808__$1,11,out,inst_13790);
} else
{if((state_val_13809 === 9))
{var state_13808__$1 = state_13808;var statearr_13818_13837 = state_13808__$1;(statearr_13818_13837[2] = null);
(statearr_13818_13837[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 10))
{var inst_13801 = (state_13808[2]);var state_13808__$1 = (function (){var statearr_13819 = state_13808;(statearr_13819[8] = inst_13801);
return statearr_13819;
})();var statearr_13820_13838 = state_13808__$1;(statearr_13820_13838[2] = null);
(statearr_13820_13838[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13809 === 11))
{var inst_13798 = (state_13808[2]);var state_13808__$1 = state_13808;var statearr_13821_13839 = state_13808__$1;(statearr_13821_13839[2] = inst_13798);
(statearr_13821_13839[1] = 10);
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
var state_machine__5507__auto____0 = (function (){var statearr_13825 = [null,null,null,null,null,null,null,null,null];(statearr_13825[0] = state_machine__5507__auto__);
(statearr_13825[1] = 1);
return statearr_13825;
});
var state_machine__5507__auto____1 = (function (state_13808){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13808);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e13826){if((e13826 instanceof Object))
{var ex__5510__auto__ = e13826;var statearr_13827_13840 = state_13808;(statearr_13827_13840[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13808);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e13826;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__13841 = state_13808;
state_13808 = G__13841;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13808){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13808);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_13828 = f__5522__auto__.call(null);(statearr_13828[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___13829);
return statearr_13828;
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
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_13993){var state_val_13994 = (state_13993[1]);if((state_val_13994 === 1))
{var state_13993__$1 = state_13993;var statearr_13995_14032 = state_13993__$1;(statearr_13995_14032[2] = null);
(statearr_13995_14032[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 2))
{var state_13993__$1 = state_13993;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_13993__$1,4,in$);
} else
{if((state_val_13994 === 3))
{var inst_13991 = (state_13993[2]);var state_13993__$1 = state_13993;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_13993__$1,inst_13991);
} else
{if((state_val_13994 === 4))
{var inst_13939 = (state_13993[7]);var inst_13939__$1 = (state_13993[2]);var inst_13940 = (inst_13939__$1 == null);var state_13993__$1 = (function (){var statearr_13996 = state_13993;(statearr_13996[7] = inst_13939__$1);
return statearr_13996;
})();if(cljs.core.truth_(inst_13940))
{var statearr_13997_14033 = state_13993__$1;(statearr_13997_14033[1] = 5);
} else
{var statearr_13998_14034 = state_13993__$1;(statearr_13998_14034[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 5))
{var inst_13942 = cljs.core.async.close_BANG_.call(null,out);var state_13993__$1 = state_13993;var statearr_13999_14035 = state_13993__$1;(statearr_13999_14035[2] = inst_13942);
(statearr_13999_14035[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 6))
{var inst_13939 = (state_13993[7]);var inst_13944 = f.call(null,inst_13939);var inst_13949 = cljs.core.seq.call(null,inst_13944);var inst_13950 = inst_13949;var inst_13951 = null;var inst_13952 = 0;var inst_13953 = 0;var state_13993__$1 = (function (){var statearr_14000 = state_13993;(statearr_14000[8] = inst_13953);
(statearr_14000[9] = inst_13952);
(statearr_14000[10] = inst_13951);
(statearr_14000[11] = inst_13950);
return statearr_14000;
})();var statearr_14001_14036 = state_13993__$1;(statearr_14001_14036[2] = null);
(statearr_14001_14036[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 7))
{var inst_13989 = (state_13993[2]);var state_13993__$1 = state_13993;var statearr_14002_14037 = state_13993__$1;(statearr_14002_14037[2] = inst_13989);
(statearr_14002_14037[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 8))
{var inst_13953 = (state_13993[8]);var inst_13952 = (state_13993[9]);var inst_13955 = (inst_13953 < inst_13952);var inst_13956 = inst_13955;var state_13993__$1 = state_13993;if(cljs.core.truth_(inst_13956))
{var statearr_14003_14038 = state_13993__$1;(statearr_14003_14038[1] = 10);
} else
{var statearr_14004_14039 = state_13993__$1;(statearr_14004_14039[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 9))
{var inst_13986 = (state_13993[2]);var state_13993__$1 = (function (){var statearr_14005 = state_13993;(statearr_14005[12] = inst_13986);
return statearr_14005;
})();var statearr_14006_14040 = state_13993__$1;(statearr_14006_14040[2] = null);
(statearr_14006_14040[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 10))
{var inst_13953 = (state_13993[8]);var inst_13951 = (state_13993[10]);var inst_13958 = cljs.core._nth.call(null,inst_13951,inst_13953);var state_13993__$1 = state_13993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13993__$1,13,out,inst_13958);
} else
{if((state_val_13994 === 11))
{var inst_13950 = (state_13993[11]);var inst_13964 = (state_13993[13]);var inst_13964__$1 = cljs.core.seq.call(null,inst_13950);var state_13993__$1 = (function (){var statearr_14010 = state_13993;(statearr_14010[13] = inst_13964__$1);
return statearr_14010;
})();if(inst_13964__$1)
{var statearr_14011_14041 = state_13993__$1;(statearr_14011_14041[1] = 14);
} else
{var statearr_14012_14042 = state_13993__$1;(statearr_14012_14042[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 12))
{var inst_13984 = (state_13993[2]);var state_13993__$1 = state_13993;var statearr_14013_14043 = state_13993__$1;(statearr_14013_14043[2] = inst_13984);
(statearr_14013_14043[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 13))
{var inst_13953 = (state_13993[8]);var inst_13952 = (state_13993[9]);var inst_13951 = (state_13993[10]);var inst_13950 = (state_13993[11]);var inst_13960 = (state_13993[2]);var inst_13961 = (inst_13953 + 1);var tmp14007 = inst_13952;var tmp14008 = inst_13951;var tmp14009 = inst_13950;var inst_13950__$1 = tmp14009;var inst_13951__$1 = tmp14008;var inst_13952__$1 = tmp14007;var inst_13953__$1 = inst_13961;var state_13993__$1 = (function (){var statearr_14014 = state_13993;(statearr_14014[8] = inst_13953__$1);
(statearr_14014[14] = inst_13960);
(statearr_14014[9] = inst_13952__$1);
(statearr_14014[10] = inst_13951__$1);
(statearr_14014[11] = inst_13950__$1);
return statearr_14014;
})();var statearr_14015_14044 = state_13993__$1;(statearr_14015_14044[2] = null);
(statearr_14015_14044[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 14))
{var inst_13964 = (state_13993[13]);var inst_13966 = cljs.core.chunked_seq_QMARK_.call(null,inst_13964);var state_13993__$1 = state_13993;if(inst_13966)
{var statearr_14016_14045 = state_13993__$1;(statearr_14016_14045[1] = 17);
} else
{var statearr_14017_14046 = state_13993__$1;(statearr_14017_14046[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 15))
{var state_13993__$1 = state_13993;var statearr_14018_14047 = state_13993__$1;(statearr_14018_14047[2] = null);
(statearr_14018_14047[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 16))
{var inst_13982 = (state_13993[2]);var state_13993__$1 = state_13993;var statearr_14019_14048 = state_13993__$1;(statearr_14019_14048[2] = inst_13982);
(statearr_14019_14048[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 17))
{var inst_13964 = (state_13993[13]);var inst_13968 = cljs.core.chunk_first.call(null,inst_13964);var inst_13969 = cljs.core.chunk_rest.call(null,inst_13964);var inst_13970 = cljs.core.count.call(null,inst_13968);var inst_13950 = inst_13969;var inst_13951 = inst_13968;var inst_13952 = inst_13970;var inst_13953 = 0;var state_13993__$1 = (function (){var statearr_14020 = state_13993;(statearr_14020[8] = inst_13953);
(statearr_14020[9] = inst_13952);
(statearr_14020[10] = inst_13951);
(statearr_14020[11] = inst_13950);
return statearr_14020;
})();var statearr_14021_14049 = state_13993__$1;(statearr_14021_14049[2] = null);
(statearr_14021_14049[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 18))
{var inst_13964 = (state_13993[13]);var inst_13973 = cljs.core.first.call(null,inst_13964);var state_13993__$1 = state_13993;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_13993__$1,20,out,inst_13973);
} else
{if((state_val_13994 === 19))
{var inst_13979 = (state_13993[2]);var state_13993__$1 = state_13993;var statearr_14022_14050 = state_13993__$1;(statearr_14022_14050[2] = inst_13979);
(statearr_14022_14050[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_13994 === 20))
{var inst_13964 = (state_13993[13]);var inst_13975 = (state_13993[2]);var inst_13976 = cljs.core.next.call(null,inst_13964);var inst_13950 = inst_13976;var inst_13951 = null;var inst_13952 = 0;var inst_13953 = 0;var state_13993__$1 = (function (){var statearr_14023 = state_13993;(statearr_14023[8] = inst_13953);
(statearr_14023[9] = inst_13952);
(statearr_14023[10] = inst_13951);
(statearr_14023[11] = inst_13950);
(statearr_14023[15] = inst_13975);
return statearr_14023;
})();var statearr_14024_14051 = state_13993__$1;(statearr_14024_14051[2] = null);
(statearr_14024_14051[1] = 8);
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
var state_machine__5507__auto____0 = (function (){var statearr_14028 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14028[0] = state_machine__5507__auto__);
(statearr_14028[1] = 1);
return statearr_14028;
});
var state_machine__5507__auto____1 = (function (state_13993){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_13993);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14029){if((e14029 instanceof Object))
{var ex__5510__auto__ = e14029;var statearr_14030_14052 = state_13993;(statearr_14030_14052[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_13993);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14029;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14053 = state_13993;
state_13993 = G__14053;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_13993){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_13993);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14031 = f__5522__auto__.call(null);(statearr_14031[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14031;
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
var pipe__3 = (function (from,to,close_QMARK_){var c__5521__auto___14134 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14113){var state_val_14114 = (state_14113[1]);if((state_val_14114 === 1))
{var state_14113__$1 = state_14113;var statearr_14115_14135 = state_14113__$1;(statearr_14115_14135[2] = null);
(statearr_14115_14135[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14114 === 2))
{var state_14113__$1 = state_14113;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14113__$1,4,from);
} else
{if((state_val_14114 === 3))
{var inst_14111 = (state_14113[2]);var state_14113__$1 = state_14113;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14113__$1,inst_14111);
} else
{if((state_val_14114 === 4))
{var inst_14096 = (state_14113[7]);var inst_14096__$1 = (state_14113[2]);var inst_14097 = (inst_14096__$1 == null);var state_14113__$1 = (function (){var statearr_14116 = state_14113;(statearr_14116[7] = inst_14096__$1);
return statearr_14116;
})();if(cljs.core.truth_(inst_14097))
{var statearr_14117_14136 = state_14113__$1;(statearr_14117_14136[1] = 5);
} else
{var statearr_14118_14137 = state_14113__$1;(statearr_14118_14137[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14114 === 5))
{var state_14113__$1 = state_14113;if(cljs.core.truth_(close_QMARK_))
{var statearr_14119_14138 = state_14113__$1;(statearr_14119_14138[1] = 8);
} else
{var statearr_14120_14139 = state_14113__$1;(statearr_14120_14139[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14114 === 6))
{var inst_14096 = (state_14113[7]);var state_14113__$1 = state_14113;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14113__$1,11,to,inst_14096);
} else
{if((state_val_14114 === 7))
{var inst_14109 = (state_14113[2]);var state_14113__$1 = state_14113;var statearr_14121_14140 = state_14113__$1;(statearr_14121_14140[2] = inst_14109);
(statearr_14121_14140[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14114 === 8))
{var inst_14100 = cljs.core.async.close_BANG_.call(null,to);var state_14113__$1 = state_14113;var statearr_14122_14141 = state_14113__$1;(statearr_14122_14141[2] = inst_14100);
(statearr_14122_14141[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14114 === 9))
{var state_14113__$1 = state_14113;var statearr_14123_14142 = state_14113__$1;(statearr_14123_14142[2] = null);
(statearr_14123_14142[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14114 === 10))
{var inst_14103 = (state_14113[2]);var state_14113__$1 = state_14113;var statearr_14124_14143 = state_14113__$1;(statearr_14124_14143[2] = inst_14103);
(statearr_14124_14143[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14114 === 11))
{var inst_14106 = (state_14113[2]);var state_14113__$1 = (function (){var statearr_14125 = state_14113;(statearr_14125[8] = inst_14106);
return statearr_14125;
})();var statearr_14126_14144 = state_14113__$1;(statearr_14126_14144[2] = null);
(statearr_14126_14144[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14130 = [null,null,null,null,null,null,null,null,null];(statearr_14130[0] = state_machine__5507__auto__);
(statearr_14130[1] = 1);
return statearr_14130;
});
var state_machine__5507__auto____1 = (function (state_14113){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14113);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14131){if((e14131 instanceof Object))
{var ex__5510__auto__ = e14131;var statearr_14132_14145 = state_14113;(statearr_14132_14145[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14113);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14131;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14146 = state_14113;
state_14113 = G__14146;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14113){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14133 = f__5522__auto__.call(null);(statearr_14133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14134);
return statearr_14133;
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
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__5521__auto___14233 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14211){var state_val_14212 = (state_14211[1]);if((state_val_14212 === 1))
{var state_14211__$1 = state_14211;var statearr_14213_14234 = state_14211__$1;(statearr_14213_14234[2] = null);
(statearr_14213_14234[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14212 === 2))
{var state_14211__$1 = state_14211;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14211__$1,4,ch);
} else
{if((state_val_14212 === 3))
{var inst_14209 = (state_14211[2]);var state_14211__$1 = state_14211;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14211__$1,inst_14209);
} else
{if((state_val_14212 === 4))
{var inst_14192 = (state_14211[7]);var inst_14192__$1 = (state_14211[2]);var inst_14193 = (inst_14192__$1 == null);var state_14211__$1 = (function (){var statearr_14214 = state_14211;(statearr_14214[7] = inst_14192__$1);
return statearr_14214;
})();if(cljs.core.truth_(inst_14193))
{var statearr_14215_14235 = state_14211__$1;(statearr_14215_14235[1] = 5);
} else
{var statearr_14216_14236 = state_14211__$1;(statearr_14216_14236[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14212 === 5))
{var inst_14195 = cljs.core.async.close_BANG_.call(null,tc);var inst_14196 = cljs.core.async.close_BANG_.call(null,fc);var state_14211__$1 = (function (){var statearr_14217 = state_14211;(statearr_14217[8] = inst_14195);
return statearr_14217;
})();var statearr_14218_14237 = state_14211__$1;(statearr_14218_14237[2] = inst_14196);
(statearr_14218_14237[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14212 === 6))
{var inst_14192 = (state_14211[7]);var inst_14198 = p.call(null,inst_14192);var state_14211__$1 = state_14211;if(cljs.core.truth_(inst_14198))
{var statearr_14219_14238 = state_14211__$1;(statearr_14219_14238[1] = 9);
} else
{var statearr_14220_14239 = state_14211__$1;(statearr_14220_14239[1] = 10);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14212 === 7))
{var inst_14207 = (state_14211[2]);var state_14211__$1 = state_14211;var statearr_14221_14240 = state_14211__$1;(statearr_14221_14240[2] = inst_14207);
(statearr_14221_14240[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14212 === 8))
{var inst_14204 = (state_14211[2]);var state_14211__$1 = (function (){var statearr_14222 = state_14211;(statearr_14222[9] = inst_14204);
return statearr_14222;
})();var statearr_14223_14241 = state_14211__$1;(statearr_14223_14241[2] = null);
(statearr_14223_14241[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14212 === 9))
{var state_14211__$1 = state_14211;var statearr_14224_14242 = state_14211__$1;(statearr_14224_14242[2] = tc);
(statearr_14224_14242[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14212 === 10))
{var state_14211__$1 = state_14211;var statearr_14225_14243 = state_14211__$1;(statearr_14225_14243[2] = fc);
(statearr_14225_14243[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14212 === 11))
{var inst_14192 = (state_14211[7]);var inst_14202 = (state_14211[2]);var state_14211__$1 = state_14211;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14211__$1,8,inst_14202,inst_14192);
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
var state_machine__5507__auto____0 = (function (){var statearr_14229 = [null,null,null,null,null,null,null,null,null,null];(statearr_14229[0] = state_machine__5507__auto__);
(statearr_14229[1] = 1);
return statearr_14229;
});
var state_machine__5507__auto____1 = (function (state_14211){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14211);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14230){if((e14230 instanceof Object))
{var ex__5510__auto__ = e14230;var statearr_14231_14244 = state_14211;(statearr_14231_14244[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14211);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14230;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14245 = state_14211;
state_14211 = G__14245;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14211){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14232 = f__5522__auto__.call(null);(statearr_14232[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14233);
return statearr_14232;
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
cljs.core.async.reduce = (function reduce(f,init,ch){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14292){var state_val_14293 = (state_14292[1]);if((state_val_14293 === 7))
{var inst_14288 = (state_14292[2]);var state_14292__$1 = state_14292;var statearr_14294_14310 = state_14292__$1;(statearr_14294_14310[2] = inst_14288);
(statearr_14294_14310[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 6))
{var inst_14278 = (state_14292[7]);var inst_14281 = (state_14292[8]);var inst_14285 = f.call(null,inst_14278,inst_14281);var inst_14278__$1 = inst_14285;var state_14292__$1 = (function (){var statearr_14295 = state_14292;(statearr_14295[7] = inst_14278__$1);
return statearr_14295;
})();var statearr_14296_14311 = state_14292__$1;(statearr_14296_14311[2] = null);
(statearr_14296_14311[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 5))
{var inst_14278 = (state_14292[7]);var state_14292__$1 = state_14292;var statearr_14297_14312 = state_14292__$1;(statearr_14297_14312[2] = inst_14278);
(statearr_14297_14312[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 4))
{var inst_14281 = (state_14292[8]);var inst_14281__$1 = (state_14292[2]);var inst_14282 = (inst_14281__$1 == null);var state_14292__$1 = (function (){var statearr_14298 = state_14292;(statearr_14298[8] = inst_14281__$1);
return statearr_14298;
})();if(cljs.core.truth_(inst_14282))
{var statearr_14299_14313 = state_14292__$1;(statearr_14299_14313[1] = 5);
} else
{var statearr_14300_14314 = state_14292__$1;(statearr_14300_14314[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14293 === 3))
{var inst_14290 = (state_14292[2]);var state_14292__$1 = state_14292;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14292__$1,inst_14290);
} else
{if((state_val_14293 === 2))
{var state_14292__$1 = state_14292;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14292__$1,4,ch);
} else
{if((state_val_14293 === 1))
{var inst_14278 = init;var state_14292__$1 = (function (){var statearr_14301 = state_14292;(statearr_14301[7] = inst_14278);
return statearr_14301;
})();var statearr_14302_14315 = state_14292__$1;(statearr_14302_14315[2] = null);
(statearr_14302_14315[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_14306 = [null,null,null,null,null,null,null,null,null];(statearr_14306[0] = state_machine__5507__auto__);
(statearr_14306[1] = 1);
return statearr_14306;
});
var state_machine__5507__auto____1 = (function (state_14292){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14292);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14307){if((e14307 instanceof Object))
{var ex__5510__auto__ = e14307;var statearr_14308_14316 = state_14292;(statearr_14308_14316[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14292);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14307;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14317 = state_14292;
state_14292 = G__14317;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14292){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14292);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14309 = f__5522__auto__.call(null);(statearr_14309[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14309;
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
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__5521__auto__ = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14379){var state_val_14380 = (state_14379[1]);if((state_val_14380 === 1))
{var inst_14359 = cljs.core.seq.call(null,coll);var inst_14360 = inst_14359;var state_14379__$1 = (function (){var statearr_14381 = state_14379;(statearr_14381[7] = inst_14360);
return statearr_14381;
})();var statearr_14382_14400 = state_14379__$1;(statearr_14382_14400[2] = null);
(statearr_14382_14400[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14380 === 2))
{var inst_14360 = (state_14379[7]);var state_14379__$1 = state_14379;if(cljs.core.truth_(inst_14360))
{var statearr_14383_14401 = state_14379__$1;(statearr_14383_14401[1] = 4);
} else
{var statearr_14384_14402 = state_14379__$1;(statearr_14384_14402[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14380 === 3))
{var inst_14377 = (state_14379[2]);var state_14379__$1 = state_14379;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14379__$1,inst_14377);
} else
{if((state_val_14380 === 4))
{var inst_14360 = (state_14379[7]);var inst_14363 = cljs.core.first.call(null,inst_14360);var state_14379__$1 = state_14379;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_14379__$1,7,ch,inst_14363);
} else
{if((state_val_14380 === 5))
{var state_14379__$1 = state_14379;if(cljs.core.truth_(close_QMARK_))
{var statearr_14385_14403 = state_14379__$1;(statearr_14385_14403[1] = 8);
} else
{var statearr_14386_14404 = state_14379__$1;(statearr_14386_14404[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14380 === 6))
{var inst_14375 = (state_14379[2]);var state_14379__$1 = state_14379;var statearr_14387_14405 = state_14379__$1;(statearr_14387_14405[2] = inst_14375);
(statearr_14387_14405[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14380 === 7))
{var inst_14360 = (state_14379[7]);var inst_14365 = (state_14379[2]);var inst_14366 = cljs.core.next.call(null,inst_14360);var inst_14360__$1 = inst_14366;var state_14379__$1 = (function (){var statearr_14388 = state_14379;(statearr_14388[8] = inst_14365);
(statearr_14388[7] = inst_14360__$1);
return statearr_14388;
})();var statearr_14389_14406 = state_14379__$1;(statearr_14389_14406[2] = null);
(statearr_14389_14406[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14380 === 8))
{var inst_14370 = cljs.core.async.close_BANG_.call(null,ch);var state_14379__$1 = state_14379;var statearr_14390_14407 = state_14379__$1;(statearr_14390_14407[2] = inst_14370);
(statearr_14390_14407[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14380 === 9))
{var state_14379__$1 = state_14379;var statearr_14391_14408 = state_14379__$1;(statearr_14391_14408[2] = null);
(statearr_14391_14408[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14380 === 10))
{var inst_14373 = (state_14379[2]);var state_14379__$1 = state_14379;var statearr_14392_14409 = state_14379__$1;(statearr_14392_14409[2] = inst_14373);
(statearr_14392_14409[1] = 6);
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
var state_machine__5507__auto____0 = (function (){var statearr_14396 = [null,null,null,null,null,null,null,null,null];(statearr_14396[0] = state_machine__5507__auto__);
(statearr_14396[1] = 1);
return statearr_14396;
});
var state_machine__5507__auto____1 = (function (state_14379){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14379);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14397){if((e14397 instanceof Object))
{var ex__5510__auto__ = e14397;var statearr_14398_14410 = state_14379;(statearr_14398_14410[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14379);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14397;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14411 = state_14379;
state_14379 = G__14411;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14379){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14379);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14399 = f__5522__auto__.call(null);(statearr_14399[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto__);
return statearr_14399;
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
cljs.core.async.Mux = (function (){var obj14413 = {};return obj14413;
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
cljs.core.async.Mult = (function (){var obj14415 = {};return obj14415;
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
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t14639 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t14639 = (function (cs,ch,mult,meta14640){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta14640 = meta14640;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t14639.cljs$lang$type = true;
cljs.core.async.t14639.cljs$lang$ctorStr = "cljs.core.async/t14639";
cljs.core.async.t14639.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t14639");
});})(cs))
;
cljs.core.async.t14639.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t14639.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t14639.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t14639.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t14639.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t14639.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t14639.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_14641){var self__ = this;
var _14641__$1 = this;return self__.meta14640;
});})(cs))
;
cljs.core.async.t14639.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_14641,meta14640__$1){var self__ = this;
var _14641__$1 = this;return (new cljs.core.async.t14639(self__.cs,self__.ch,self__.mult,meta14640__$1));
});})(cs))
;
cljs.core.async.__GT_t14639 = ((function (cs){
return (function __GT_t14639(cs__$1,ch__$1,mult__$1,meta14640){return (new cljs.core.async.t14639(cs__$1,ch__$1,mult__$1,meta14640));
});})(cs))
;
}
return (new cljs.core.async.t14639(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,1);var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === 0))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__5521__auto___14862 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_14776){var state_val_14777 = (state_14776[1]);if((state_val_14777 === 32))
{var inst_14644 = (state_14776[7]);var inst_14720 = (state_14776[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14776,31,Object,null,30);var inst_14727 = cljs.core.async.put_BANG_.call(null,inst_14720,inst_14644,done);var state_14776__$1 = state_14776;var statearr_14778_14863 = state_14776__$1;(statearr_14778_14863[2] = inst_14727);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14776__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 1))
{var state_14776__$1 = state_14776;var statearr_14779_14864 = state_14776__$1;(statearr_14779_14864[2] = null);
(statearr_14779_14864[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 33))
{var inst_14733 = (state_14776[9]);var inst_14735 = cljs.core.chunked_seq_QMARK_.call(null,inst_14733);var state_14776__$1 = state_14776;if(inst_14735)
{var statearr_14780_14865 = state_14776__$1;(statearr_14780_14865[1] = 36);
} else
{var statearr_14781_14866 = state_14776__$1;(statearr_14781_14866[1] = 37);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 2))
{var state_14776__$1 = state_14776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14776__$1,4,ch);
} else
{if((state_val_14777 === 34))
{var state_14776__$1 = state_14776;var statearr_14782_14867 = state_14776__$1;(statearr_14782_14867[2] = null);
(statearr_14782_14867[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 3))
{var inst_14774 = (state_14776[2]);var state_14776__$1 = state_14776;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14776__$1,inst_14774);
} else
{if((state_val_14777 === 35))
{var inst_14758 = (state_14776[2]);var state_14776__$1 = state_14776;var statearr_14783_14868 = state_14776__$1;(statearr_14783_14868[2] = inst_14758);
(statearr_14783_14868[1] = 29);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 4))
{var inst_14644 = (state_14776[7]);var inst_14644__$1 = (state_14776[2]);var inst_14645 = (inst_14644__$1 == null);var state_14776__$1 = (function (){var statearr_14784 = state_14776;(statearr_14784[7] = inst_14644__$1);
return statearr_14784;
})();if(cljs.core.truth_(inst_14645))
{var statearr_14785_14869 = state_14776__$1;(statearr_14785_14869[1] = 5);
} else
{var statearr_14786_14870 = state_14776__$1;(statearr_14786_14870[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 36))
{var inst_14733 = (state_14776[9]);var inst_14737 = cljs.core.chunk_first.call(null,inst_14733);var inst_14738 = cljs.core.chunk_rest.call(null,inst_14733);var inst_14739 = cljs.core.count.call(null,inst_14737);var inst_14712 = inst_14738;var inst_14713 = inst_14737;var inst_14714 = inst_14739;var inst_14715 = 0;var state_14776__$1 = (function (){var statearr_14787 = state_14776;(statearr_14787[10] = inst_14712);
(statearr_14787[11] = inst_14713);
(statearr_14787[12] = inst_14714);
(statearr_14787[13] = inst_14715);
return statearr_14787;
})();var statearr_14788_14871 = state_14776__$1;(statearr_14788_14871[2] = null);
(statearr_14788_14871[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 5))
{var inst_14651 = cljs.core.deref.call(null,cs);var inst_14652 = cljs.core.seq.call(null,inst_14651);var inst_14653 = inst_14652;var inst_14654 = null;var inst_14655 = 0;var inst_14656 = 0;var state_14776__$1 = (function (){var statearr_14789 = state_14776;(statearr_14789[14] = inst_14656);
(statearr_14789[15] = inst_14655);
(statearr_14789[16] = inst_14654);
(statearr_14789[17] = inst_14653);
return statearr_14789;
})();var statearr_14790_14872 = state_14776__$1;(statearr_14790_14872[2] = null);
(statearr_14790_14872[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 37))
{var inst_14733 = (state_14776[9]);var inst_14742 = cljs.core.first.call(null,inst_14733);var state_14776__$1 = (function (){var statearr_14791 = state_14776;(statearr_14791[18] = inst_14742);
return statearr_14791;
})();var statearr_14792_14873 = state_14776__$1;(statearr_14792_14873[2] = null);
(statearr_14792_14873[1] = 41);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 6))
{var inst_14704 = (state_14776[19]);var inst_14703 = cljs.core.deref.call(null,cs);var inst_14704__$1 = cljs.core.keys.call(null,inst_14703);var inst_14705 = cljs.core.count.call(null,inst_14704__$1);var inst_14706 = cljs.core.reset_BANG_.call(null,dctr,inst_14705);var inst_14711 = cljs.core.seq.call(null,inst_14704__$1);var inst_14712 = inst_14711;var inst_14713 = null;var inst_14714 = 0;var inst_14715 = 0;var state_14776__$1 = (function (){var statearr_14793 = state_14776;(statearr_14793[20] = inst_14706);
(statearr_14793[10] = inst_14712);
(statearr_14793[11] = inst_14713);
(statearr_14793[12] = inst_14714);
(statearr_14793[13] = inst_14715);
(statearr_14793[19] = inst_14704__$1);
return statearr_14793;
})();var statearr_14794_14874 = state_14776__$1;(statearr_14794_14874[2] = null);
(statearr_14794_14874[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 38))
{var inst_14755 = (state_14776[2]);var state_14776__$1 = state_14776;var statearr_14795_14875 = state_14776__$1;(statearr_14795_14875[2] = inst_14755);
(statearr_14795_14875[1] = 35);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 7))
{var inst_14772 = (state_14776[2]);var state_14776__$1 = state_14776;var statearr_14796_14876 = state_14776__$1;(statearr_14796_14876[2] = inst_14772);
(statearr_14796_14876[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 39))
{var inst_14733 = (state_14776[9]);var inst_14751 = (state_14776[2]);var inst_14752 = cljs.core.next.call(null,inst_14733);var inst_14712 = inst_14752;var inst_14713 = null;var inst_14714 = 0;var inst_14715 = 0;var state_14776__$1 = (function (){var statearr_14797 = state_14776;(statearr_14797[10] = inst_14712);
(statearr_14797[11] = inst_14713);
(statearr_14797[12] = inst_14714);
(statearr_14797[13] = inst_14715);
(statearr_14797[21] = inst_14751);
return statearr_14797;
})();var statearr_14798_14877 = state_14776__$1;(statearr_14798_14877[2] = null);
(statearr_14798_14877[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 8))
{var inst_14656 = (state_14776[14]);var inst_14655 = (state_14776[15]);var inst_14658 = (inst_14656 < inst_14655);var inst_14659 = inst_14658;var state_14776__$1 = state_14776;if(cljs.core.truth_(inst_14659))
{var statearr_14799_14878 = state_14776__$1;(statearr_14799_14878[1] = 10);
} else
{var statearr_14800_14879 = state_14776__$1;(statearr_14800_14879[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 40))
{var inst_14742 = (state_14776[18]);var inst_14743 = (state_14776[2]);var inst_14744 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14745 = cljs.core.async.untap_STAR_.call(null,m,inst_14742);var state_14776__$1 = (function (){var statearr_14801 = state_14776;(statearr_14801[22] = inst_14744);
(statearr_14801[23] = inst_14743);
return statearr_14801;
})();var statearr_14802_14880 = state_14776__$1;(statearr_14802_14880[2] = inst_14745);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14776__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 9))
{var inst_14701 = (state_14776[2]);var state_14776__$1 = state_14776;var statearr_14803_14881 = state_14776__$1;(statearr_14803_14881[2] = inst_14701);
(statearr_14803_14881[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 41))
{var inst_14644 = (state_14776[7]);var inst_14742 = (state_14776[18]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_14776,40,Object,null,39);var inst_14749 = cljs.core.async.put_BANG_.call(null,inst_14742,inst_14644,done);var state_14776__$1 = state_14776;var statearr_14804_14882 = state_14776__$1;(statearr_14804_14882[2] = inst_14749);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14776__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 10))
{var inst_14656 = (state_14776[14]);var inst_14654 = (state_14776[16]);var inst_14662 = cljs.core._nth.call(null,inst_14654,inst_14656);var inst_14663 = cljs.core.nth.call(null,inst_14662,0,null);var inst_14664 = cljs.core.nth.call(null,inst_14662,1,null);var state_14776__$1 = (function (){var statearr_14805 = state_14776;(statearr_14805[24] = inst_14663);
return statearr_14805;
})();if(cljs.core.truth_(inst_14664))
{var statearr_14806_14883 = state_14776__$1;(statearr_14806_14883[1] = 13);
} else
{var statearr_14807_14884 = state_14776__$1;(statearr_14807_14884[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 42))
{var state_14776__$1 = state_14776;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14776__$1,45,dchan);
} else
{if((state_val_14777 === 11))
{var inst_14653 = (state_14776[17]);var inst_14673 = (state_14776[25]);var inst_14673__$1 = cljs.core.seq.call(null,inst_14653);var state_14776__$1 = (function (){var statearr_14808 = state_14776;(statearr_14808[25] = inst_14673__$1);
return statearr_14808;
})();if(inst_14673__$1)
{var statearr_14809_14885 = state_14776__$1;(statearr_14809_14885[1] = 16);
} else
{var statearr_14810_14886 = state_14776__$1;(statearr_14810_14886[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 43))
{var state_14776__$1 = state_14776;var statearr_14811_14887 = state_14776__$1;(statearr_14811_14887[2] = null);
(statearr_14811_14887[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 12))
{var inst_14699 = (state_14776[2]);var state_14776__$1 = state_14776;var statearr_14812_14888 = state_14776__$1;(statearr_14812_14888[2] = inst_14699);
(statearr_14812_14888[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 44))
{var inst_14769 = (state_14776[2]);var state_14776__$1 = (function (){var statearr_14813 = state_14776;(statearr_14813[26] = inst_14769);
return statearr_14813;
})();var statearr_14814_14889 = state_14776__$1;(statearr_14814_14889[2] = null);
(statearr_14814_14889[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 13))
{var inst_14663 = (state_14776[24]);var inst_14666 = cljs.core.async.close_BANG_.call(null,inst_14663);var state_14776__$1 = state_14776;var statearr_14815_14890 = state_14776__$1;(statearr_14815_14890[2] = inst_14666);
(statearr_14815_14890[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 45))
{var inst_14766 = (state_14776[2]);var state_14776__$1 = state_14776;var statearr_14819_14891 = state_14776__$1;(statearr_14819_14891[2] = inst_14766);
(statearr_14819_14891[1] = 44);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 14))
{var state_14776__$1 = state_14776;var statearr_14820_14892 = state_14776__$1;(statearr_14820_14892[2] = null);
(statearr_14820_14892[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 15))
{var inst_14656 = (state_14776[14]);var inst_14655 = (state_14776[15]);var inst_14654 = (state_14776[16]);var inst_14653 = (state_14776[17]);var inst_14669 = (state_14776[2]);var inst_14670 = (inst_14656 + 1);var tmp14816 = inst_14655;var tmp14817 = inst_14654;var tmp14818 = inst_14653;var inst_14653__$1 = tmp14818;var inst_14654__$1 = tmp14817;var inst_14655__$1 = tmp14816;var inst_14656__$1 = inst_14670;var state_14776__$1 = (function (){var statearr_14821 = state_14776;(statearr_14821[14] = inst_14656__$1);
(statearr_14821[15] = inst_14655__$1);
(statearr_14821[16] = inst_14654__$1);
(statearr_14821[17] = inst_14653__$1);
(statearr_14821[27] = inst_14669);
return statearr_14821;
})();var statearr_14822_14893 = state_14776__$1;(statearr_14822_14893[2] = null);
(statearr_14822_14893[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 16))
{var inst_14673 = (state_14776[25]);var inst_14675 = cljs.core.chunked_seq_QMARK_.call(null,inst_14673);var state_14776__$1 = state_14776;if(inst_14675)
{var statearr_14823_14894 = state_14776__$1;(statearr_14823_14894[1] = 19);
} else
{var statearr_14824_14895 = state_14776__$1;(statearr_14824_14895[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 17))
{var state_14776__$1 = state_14776;var statearr_14825_14896 = state_14776__$1;(statearr_14825_14896[2] = null);
(statearr_14825_14896[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 18))
{var inst_14697 = (state_14776[2]);var state_14776__$1 = state_14776;var statearr_14826_14897 = state_14776__$1;(statearr_14826_14897[2] = inst_14697);
(statearr_14826_14897[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 19))
{var inst_14673 = (state_14776[25]);var inst_14677 = cljs.core.chunk_first.call(null,inst_14673);var inst_14678 = cljs.core.chunk_rest.call(null,inst_14673);var inst_14679 = cljs.core.count.call(null,inst_14677);var inst_14653 = inst_14678;var inst_14654 = inst_14677;var inst_14655 = inst_14679;var inst_14656 = 0;var state_14776__$1 = (function (){var statearr_14827 = state_14776;(statearr_14827[14] = inst_14656);
(statearr_14827[15] = inst_14655);
(statearr_14827[16] = inst_14654);
(statearr_14827[17] = inst_14653);
return statearr_14827;
})();var statearr_14828_14898 = state_14776__$1;(statearr_14828_14898[2] = null);
(statearr_14828_14898[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 20))
{var inst_14673 = (state_14776[25]);var inst_14683 = cljs.core.first.call(null,inst_14673);var inst_14684 = cljs.core.nth.call(null,inst_14683,0,null);var inst_14685 = cljs.core.nth.call(null,inst_14683,1,null);var state_14776__$1 = (function (){var statearr_14829 = state_14776;(statearr_14829[28] = inst_14684);
return statearr_14829;
})();if(cljs.core.truth_(inst_14685))
{var statearr_14830_14899 = state_14776__$1;(statearr_14830_14899[1] = 22);
} else
{var statearr_14831_14900 = state_14776__$1;(statearr_14831_14900[1] = 23);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 21))
{var inst_14694 = (state_14776[2]);var state_14776__$1 = state_14776;var statearr_14832_14901 = state_14776__$1;(statearr_14832_14901[2] = inst_14694);
(statearr_14832_14901[1] = 18);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 22))
{var inst_14684 = (state_14776[28]);var inst_14687 = cljs.core.async.close_BANG_.call(null,inst_14684);var state_14776__$1 = state_14776;var statearr_14833_14902 = state_14776__$1;(statearr_14833_14902[2] = inst_14687);
(statearr_14833_14902[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 23))
{var state_14776__$1 = state_14776;var statearr_14834_14903 = state_14776__$1;(statearr_14834_14903[2] = null);
(statearr_14834_14903[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 24))
{var inst_14673 = (state_14776[25]);var inst_14690 = (state_14776[2]);var inst_14691 = cljs.core.next.call(null,inst_14673);var inst_14653 = inst_14691;var inst_14654 = null;var inst_14655 = 0;var inst_14656 = 0;var state_14776__$1 = (function (){var statearr_14835 = state_14776;(statearr_14835[14] = inst_14656);
(statearr_14835[15] = inst_14655);
(statearr_14835[16] = inst_14654);
(statearr_14835[17] = inst_14653);
(statearr_14835[29] = inst_14690);
return statearr_14835;
})();var statearr_14836_14904 = state_14776__$1;(statearr_14836_14904[2] = null);
(statearr_14836_14904[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 25))
{var inst_14714 = (state_14776[12]);var inst_14715 = (state_14776[13]);var inst_14717 = (inst_14715 < inst_14714);var inst_14718 = inst_14717;var state_14776__$1 = state_14776;if(cljs.core.truth_(inst_14718))
{var statearr_14837_14905 = state_14776__$1;(statearr_14837_14905[1] = 27);
} else
{var statearr_14838_14906 = state_14776__$1;(statearr_14838_14906[1] = 28);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 26))
{var inst_14704 = (state_14776[19]);var inst_14762 = (state_14776[2]);var inst_14763 = cljs.core.seq.call(null,inst_14704);var state_14776__$1 = (function (){var statearr_14839 = state_14776;(statearr_14839[30] = inst_14762);
return statearr_14839;
})();if(inst_14763)
{var statearr_14840_14907 = state_14776__$1;(statearr_14840_14907[1] = 42);
} else
{var statearr_14841_14908 = state_14776__$1;(statearr_14841_14908[1] = 43);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 27))
{var inst_14713 = (state_14776[11]);var inst_14715 = (state_14776[13]);var inst_14720 = cljs.core._nth.call(null,inst_14713,inst_14715);var state_14776__$1 = (function (){var statearr_14842 = state_14776;(statearr_14842[8] = inst_14720);
return statearr_14842;
})();var statearr_14843_14909 = state_14776__$1;(statearr_14843_14909[2] = null);
(statearr_14843_14909[1] = 32);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 28))
{var inst_14733 = (state_14776[9]);var inst_14712 = (state_14776[10]);var inst_14733__$1 = cljs.core.seq.call(null,inst_14712);var state_14776__$1 = (function (){var statearr_14847 = state_14776;(statearr_14847[9] = inst_14733__$1);
return statearr_14847;
})();if(inst_14733__$1)
{var statearr_14848_14910 = state_14776__$1;(statearr_14848_14910[1] = 33);
} else
{var statearr_14849_14911 = state_14776__$1;(statearr_14849_14911[1] = 34);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 29))
{var inst_14760 = (state_14776[2]);var state_14776__$1 = state_14776;var statearr_14850_14912 = state_14776__$1;(statearr_14850_14912[2] = inst_14760);
(statearr_14850_14912[1] = 26);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 30))
{var inst_14712 = (state_14776[10]);var inst_14713 = (state_14776[11]);var inst_14714 = (state_14776[12]);var inst_14715 = (state_14776[13]);var inst_14729 = (state_14776[2]);var inst_14730 = (inst_14715 + 1);var tmp14844 = inst_14712;var tmp14845 = inst_14713;var tmp14846 = inst_14714;var inst_14712__$1 = tmp14844;var inst_14713__$1 = tmp14845;var inst_14714__$1 = tmp14846;var inst_14715__$1 = inst_14730;var state_14776__$1 = (function (){var statearr_14851 = state_14776;(statearr_14851[10] = inst_14712__$1);
(statearr_14851[11] = inst_14713__$1);
(statearr_14851[12] = inst_14714__$1);
(statearr_14851[13] = inst_14715__$1);
(statearr_14851[31] = inst_14729);
return statearr_14851;
})();var statearr_14852_14913 = state_14776__$1;(statearr_14852_14913[2] = null);
(statearr_14852_14913[1] = 25);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_14777 === 31))
{var inst_14720 = (state_14776[8]);var inst_14721 = (state_14776[2]);var inst_14722 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_14723 = cljs.core.async.untap_STAR_.call(null,m,inst_14720);var state_14776__$1 = (function (){var statearr_14853 = state_14776;(statearr_14853[32] = inst_14722);
(statearr_14853[33] = inst_14721);
return statearr_14853;
})();var statearr_14854_14914 = state_14776__$1;(statearr_14854_14914[2] = inst_14723);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14776__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_14858 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_14858[0] = state_machine__5507__auto__);
(statearr_14858[1] = 1);
return statearr_14858;
});
var state_machine__5507__auto____1 = (function (state_14776){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_14776);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e14859){if((e14859 instanceof Object))
{var ex__5510__auto__ = e14859;var statearr_14860_14915 = state_14776;(statearr_14860_14915[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14776);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e14859;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__14916 = state_14776;
state_14776 = G__14916;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_14776){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_14776);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_14861 = f__5522__auto__.call(null);(statearr_14861[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___14862);
return statearr_14861;
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
cljs.core.async.Mix = (function (){var obj14918 = {};return obj14918;
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
;var m = (function (){if(typeof cljs.core.async.t15028 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15028 = (function (pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,meta15029){
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
this.meta15029 = meta15029;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15028.cljs$lang$type = true;
cljs.core.async.t15028.cljs$lang$ctorStr = "cljs.core.async/t15028";
cljs.core.async.t15028.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15028");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15028.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t15028.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15028.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15028.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15028.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15028.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",-1162732933,null),new cljs.core.Symbol(null,"mode","mode",-1637174436,null))))].join('')));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15028.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15028.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15028.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15030){var self__ = this;
var _15030__$1 = this;return self__.meta15029;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t15028.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_15030,meta15029__$1){var self__ = this;
var _15030__$1 = this;return (new cljs.core.async.t15028(self__.pick,self__.out,self__.attrs,self__.cs,self__.calc_state,self__.solo_modes,self__.mix,self__.changed,self__.change,self__.solo_mode,meta15029__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t15028 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t15028(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15029){return (new cljs.core.async.t15028(pick__$1,out__$1,attrs__$1,cs__$1,calc_state__$1,solo_modes__$1,mix__$1,changed__$1,change__$1,solo_mode__$1,meta15029));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t15028(pick,out,attrs,cs,calc_state,solo_modes,mix,changed,change,solo_mode,null));
})();var c__5521__auto___15137 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15095){var state_val_15096 = (state_15095[1]);if((state_val_15096 === 1))
{var inst_15034 = (state_15095[7]);var inst_15034__$1 = calc_state.call(null);var inst_15035 = cljs.core.seq_QMARK_.call(null,inst_15034__$1);var state_15095__$1 = (function (){var statearr_15097 = state_15095;(statearr_15097[7] = inst_15034__$1);
return statearr_15097;
})();if(inst_15035)
{var statearr_15098_15138 = state_15095__$1;(statearr_15098_15138[1] = 2);
} else
{var statearr_15099_15139 = state_15095__$1;(statearr_15099_15139[1] = 3);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 2))
{var inst_15034 = (state_15095[7]);var inst_15037 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15034);var state_15095__$1 = state_15095;var statearr_15100_15140 = state_15095__$1;(statearr_15100_15140[2] = inst_15037);
(statearr_15100_15140[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 3))
{var inst_15034 = (state_15095[7]);var state_15095__$1 = state_15095;var statearr_15101_15141 = state_15095__$1;(statearr_15101_15141[2] = inst_15034);
(statearr_15101_15141[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 4))
{var inst_15034 = (state_15095[7]);var inst_15040 = (state_15095[2]);var inst_15041 = cljs.core.get.call(null,inst_15040,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15042 = cljs.core.get.call(null,inst_15040,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15043 = cljs.core.get.call(null,inst_15040,new cljs.core.Keyword(null,"solos","solos",1123523302));var inst_15044 = inst_15034;var state_15095__$1 = (function (){var statearr_15102 = state_15095;(statearr_15102[8] = inst_15042);
(statearr_15102[9] = inst_15041);
(statearr_15102[10] = inst_15044);
(statearr_15102[11] = inst_15043);
return statearr_15102;
})();var statearr_15103_15142 = state_15095__$1;(statearr_15103_15142[2] = null);
(statearr_15103_15142[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 5))
{var inst_15044 = (state_15095[10]);var inst_15047 = cljs.core.seq_QMARK_.call(null,inst_15044);var state_15095__$1 = state_15095;if(inst_15047)
{var statearr_15104_15143 = state_15095__$1;(statearr_15104_15143[1] = 7);
} else
{var statearr_15105_15144 = state_15095__$1;(statearr_15105_15144[1] = 8);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 6))
{var inst_15093 = (state_15095[2]);var state_15095__$1 = state_15095;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15095__$1,inst_15093);
} else
{if((state_val_15096 === 7))
{var inst_15044 = (state_15095[10]);var inst_15049 = cljs.core.apply.call(null,cljs.core.hash_map,inst_15044);var state_15095__$1 = state_15095;var statearr_15106_15145 = state_15095__$1;(statearr_15106_15145[2] = inst_15049);
(statearr_15106_15145[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 8))
{var inst_15044 = (state_15095[10]);var state_15095__$1 = state_15095;var statearr_15107_15146 = state_15095__$1;(statearr_15107_15146[2] = inst_15044);
(statearr_15107_15146[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 9))
{var inst_15052 = (state_15095[12]);var inst_15052__$1 = (state_15095[2]);var inst_15053 = cljs.core.get.call(null,inst_15052__$1,new cljs.core.Keyword(null,"reads","reads",1122290959));var inst_15054 = cljs.core.get.call(null,inst_15052__$1,new cljs.core.Keyword(null,"mutes","mutes",1118168300));var inst_15055 = cljs.core.get.call(null,inst_15052__$1,new cljs.core.Keyword(null,"solos","solos",1123523302));var state_15095__$1 = (function (){var statearr_15108 = state_15095;(statearr_15108[12] = inst_15052__$1);
(statearr_15108[13] = inst_15055);
(statearr_15108[14] = inst_15054);
return statearr_15108;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15095__$1,10,inst_15053);
} else
{if((state_val_15096 === 10))
{var inst_15059 = (state_15095[15]);var inst_15060 = (state_15095[16]);var inst_15058 = (state_15095[2]);var inst_15059__$1 = cljs.core.nth.call(null,inst_15058,0,null);var inst_15060__$1 = cljs.core.nth.call(null,inst_15058,1,null);var inst_15061 = (inst_15059__$1 == null);var inst_15062 = cljs.core._EQ_.call(null,inst_15060__$1,change);var inst_15063 = (inst_15061) || (inst_15062);var state_15095__$1 = (function (){var statearr_15109 = state_15095;(statearr_15109[15] = inst_15059__$1);
(statearr_15109[16] = inst_15060__$1);
return statearr_15109;
})();if(cljs.core.truth_(inst_15063))
{var statearr_15110_15147 = state_15095__$1;(statearr_15110_15147[1] = 11);
} else
{var statearr_15111_15148 = state_15095__$1;(statearr_15111_15148[1] = 12);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 11))
{var inst_15059 = (state_15095[15]);var inst_15065 = (inst_15059 == null);var state_15095__$1 = state_15095;if(cljs.core.truth_(inst_15065))
{var statearr_15112_15149 = state_15095__$1;(statearr_15112_15149[1] = 14);
} else
{var statearr_15113_15150 = state_15095__$1;(statearr_15113_15150[1] = 15);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 12))
{var inst_15055 = (state_15095[13]);var inst_15060 = (state_15095[16]);var inst_15074 = (state_15095[17]);var inst_15074__$1 = inst_15055.call(null,inst_15060);var state_15095__$1 = (function (){var statearr_15114 = state_15095;(statearr_15114[17] = inst_15074__$1);
return statearr_15114;
})();if(cljs.core.truth_(inst_15074__$1))
{var statearr_15115_15151 = state_15095__$1;(statearr_15115_15151[1] = 17);
} else
{var statearr_15116_15152 = state_15095__$1;(statearr_15116_15152[1] = 18);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 13))
{var inst_15091 = (state_15095[2]);var state_15095__$1 = state_15095;var statearr_15117_15153 = state_15095__$1;(statearr_15117_15153[2] = inst_15091);
(statearr_15117_15153[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 14))
{var inst_15060 = (state_15095[16]);var inst_15067 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_15060);var state_15095__$1 = state_15095;var statearr_15118_15154 = state_15095__$1;(statearr_15118_15154[2] = inst_15067);
(statearr_15118_15154[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 15))
{var state_15095__$1 = state_15095;var statearr_15119_15155 = state_15095__$1;(statearr_15119_15155[2] = null);
(statearr_15119_15155[1] = 16);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 16))
{var inst_15070 = (state_15095[2]);var inst_15071 = calc_state.call(null);var inst_15044 = inst_15071;var state_15095__$1 = (function (){var statearr_15120 = state_15095;(statearr_15120[18] = inst_15070);
(statearr_15120[10] = inst_15044);
return statearr_15120;
})();var statearr_15121_15156 = state_15095__$1;(statearr_15121_15156[2] = null);
(statearr_15121_15156[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 17))
{var inst_15074 = (state_15095[17]);var state_15095__$1 = state_15095;var statearr_15122_15157 = state_15095__$1;(statearr_15122_15157[2] = inst_15074);
(statearr_15122_15157[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 18))
{var inst_15055 = (state_15095[13]);var inst_15054 = (state_15095[14]);var inst_15060 = (state_15095[16]);var inst_15077 = cljs.core.empty_QMARK_.call(null,inst_15055);var inst_15078 = inst_15054.call(null,inst_15060);var inst_15079 = cljs.core.not.call(null,inst_15078);var inst_15080 = (inst_15077) && (inst_15079);var state_15095__$1 = state_15095;var statearr_15123_15158 = state_15095__$1;(statearr_15123_15158[2] = inst_15080);
(statearr_15123_15158[1] = 19);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 19))
{var inst_15082 = (state_15095[2]);var state_15095__$1 = state_15095;if(cljs.core.truth_(inst_15082))
{var statearr_15124_15159 = state_15095__$1;(statearr_15124_15159[1] = 20);
} else
{var statearr_15125_15160 = state_15095__$1;(statearr_15125_15160[1] = 21);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 20))
{var inst_15059 = (state_15095[15]);var state_15095__$1 = state_15095;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15095__$1,23,out,inst_15059);
} else
{if((state_val_15096 === 21))
{var state_15095__$1 = state_15095;var statearr_15126_15161 = state_15095__$1;(statearr_15126_15161[2] = null);
(statearr_15126_15161[1] = 22);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 22))
{var inst_15052 = (state_15095[12]);var inst_15088 = (state_15095[2]);var inst_15044 = inst_15052;var state_15095__$1 = (function (){var statearr_15127 = state_15095;(statearr_15127[10] = inst_15044);
(statearr_15127[19] = inst_15088);
return statearr_15127;
})();var statearr_15128_15162 = state_15095__$1;(statearr_15128_15162[2] = null);
(statearr_15128_15162[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15096 === 23))
{var inst_15085 = (state_15095[2]);var state_15095__$1 = state_15095;var statearr_15129_15163 = state_15095__$1;(statearr_15129_15163[2] = inst_15085);
(statearr_15129_15163[1] = 22);
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
var state_machine__5507__auto____0 = (function (){var statearr_15133 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15133[0] = state_machine__5507__auto__);
(statearr_15133[1] = 1);
return statearr_15133;
});
var state_machine__5507__auto____1 = (function (state_15095){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15095);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15134){if((e15134 instanceof Object))
{var ex__5510__auto__ = e15134;var statearr_15135_15164 = state_15095;(statearr_15135_15164[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15095);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15134;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15165 = state_15095;
state_15095 = G__15165;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15095){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15095);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15136 = f__5522__auto__.call(null);(statearr_15136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15137);
return statearr_15136;
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
cljs.core.async.Pub = (function (){var obj15167 = {};return obj15167;
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
return (function (p1__15168_SHARP_){if(cljs.core.truth_(p1__15168_SHARP_.call(null,topic)))
{return p1__15168_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__15168_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3406__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t15293 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t15293 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta15294){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta15294 = meta15294;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t15293.cljs$lang$type = true;
cljs.core.async.t15293.cljs$lang$ctorStr = "cljs.core.async/t15293";
cljs.core.async.t15293.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__3968__auto__,writer__3969__auto__,opt__3970__auto__){return cljs.core._write.call(null,writer__3969__auto__,"cljs.core.async/t15293");
});})(mults,ensure_mult))
;
cljs.core.async.t15293.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t15293.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t15293.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4092__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4092__auto__))
{var m = temp__4092__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t15293.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t15293.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t15293.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t15293.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t15293.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_15295){var self__ = this;
var _15295__$1 = this;return self__.meta15294;
});})(mults,ensure_mult))
;
cljs.core.async.t15293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_15295,meta15294__$1){var self__ = this;
var _15295__$1 = this;return (new cljs.core.async.t15293(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta15294__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t15293 = ((function (mults,ensure_mult){
return (function __GT_t15293(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15294){return (new cljs.core.async.t15293(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta15294));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t15293(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__5521__auto___15417 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15369){var state_val_15370 = (state_15369[1]);if((state_val_15370 === 1))
{var state_15369__$1 = state_15369;var statearr_15371_15418 = state_15369__$1;(statearr_15371_15418[2] = null);
(statearr_15371_15418[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 2))
{var state_15369__$1 = state_15369;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15369__$1,4,ch);
} else
{if((state_val_15370 === 3))
{var inst_15367 = (state_15369[2]);var state_15369__$1 = state_15369;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15369__$1,inst_15367);
} else
{if((state_val_15370 === 4))
{var inst_15298 = (state_15369[7]);var inst_15298__$1 = (state_15369[2]);var inst_15299 = (inst_15298__$1 == null);var state_15369__$1 = (function (){var statearr_15372 = state_15369;(statearr_15372[7] = inst_15298__$1);
return statearr_15372;
})();if(cljs.core.truth_(inst_15299))
{var statearr_15373_15419 = state_15369__$1;(statearr_15373_15419[1] = 5);
} else
{var statearr_15374_15420 = state_15369__$1;(statearr_15374_15420[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 5))
{var inst_15305 = cljs.core.deref.call(null,mults);var inst_15306 = cljs.core.vals.call(null,inst_15305);var inst_15307 = cljs.core.seq.call(null,inst_15306);var inst_15308 = inst_15307;var inst_15309 = null;var inst_15310 = 0;var inst_15311 = 0;var state_15369__$1 = (function (){var statearr_15375 = state_15369;(statearr_15375[8] = inst_15311);
(statearr_15375[9] = inst_15310);
(statearr_15375[10] = inst_15308);
(statearr_15375[11] = inst_15309);
return statearr_15375;
})();var statearr_15376_15421 = state_15369__$1;(statearr_15376_15421[2] = null);
(statearr_15376_15421[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 6))
{var inst_15298 = (state_15369[7]);var inst_15348 = (state_15369[12]);var inst_15346 = (state_15369[13]);var inst_15346__$1 = topic_fn.call(null,inst_15298);var inst_15347 = cljs.core.deref.call(null,mults);var inst_15348__$1 = cljs.core.get.call(null,inst_15347,inst_15346__$1);var state_15369__$1 = (function (){var statearr_15377 = state_15369;(statearr_15377[12] = inst_15348__$1);
(statearr_15377[13] = inst_15346__$1);
return statearr_15377;
})();if(cljs.core.truth_(inst_15348__$1))
{var statearr_15378_15422 = state_15369__$1;(statearr_15378_15422[1] = 19);
} else
{var statearr_15379_15423 = state_15369__$1;(statearr_15379_15423[1] = 20);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 7))
{var inst_15365 = (state_15369[2]);var state_15369__$1 = state_15369;var statearr_15380_15424 = state_15369__$1;(statearr_15380_15424[2] = inst_15365);
(statearr_15380_15424[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 8))
{var inst_15311 = (state_15369[8]);var inst_15310 = (state_15369[9]);var inst_15313 = (inst_15311 < inst_15310);var inst_15314 = inst_15313;var state_15369__$1 = state_15369;if(cljs.core.truth_(inst_15314))
{var statearr_15384_15425 = state_15369__$1;(statearr_15384_15425[1] = 10);
} else
{var statearr_15385_15426 = state_15369__$1;(statearr_15385_15426[1] = 11);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 9))
{var inst_15344 = (state_15369[2]);var state_15369__$1 = state_15369;var statearr_15386_15427 = state_15369__$1;(statearr_15386_15427[2] = inst_15344);
(statearr_15386_15427[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 10))
{var inst_15311 = (state_15369[8]);var inst_15310 = (state_15369[9]);var inst_15308 = (state_15369[10]);var inst_15309 = (state_15369[11]);var inst_15316 = cljs.core._nth.call(null,inst_15309,inst_15311);var inst_15317 = cljs.core.async.muxch_STAR_.call(null,inst_15316);var inst_15318 = cljs.core.async.close_BANG_.call(null,inst_15317);var inst_15319 = (inst_15311 + 1);var tmp15381 = inst_15310;var tmp15382 = inst_15308;var tmp15383 = inst_15309;var inst_15308__$1 = tmp15382;var inst_15309__$1 = tmp15383;var inst_15310__$1 = tmp15381;var inst_15311__$1 = inst_15319;var state_15369__$1 = (function (){var statearr_15387 = state_15369;(statearr_15387[8] = inst_15311__$1);
(statearr_15387[9] = inst_15310__$1);
(statearr_15387[14] = inst_15318);
(statearr_15387[10] = inst_15308__$1);
(statearr_15387[11] = inst_15309__$1);
return statearr_15387;
})();var statearr_15388_15428 = state_15369__$1;(statearr_15388_15428[2] = null);
(statearr_15388_15428[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 11))
{var inst_15322 = (state_15369[15]);var inst_15308 = (state_15369[10]);var inst_15322__$1 = cljs.core.seq.call(null,inst_15308);var state_15369__$1 = (function (){var statearr_15389 = state_15369;(statearr_15389[15] = inst_15322__$1);
return statearr_15389;
})();if(inst_15322__$1)
{var statearr_15390_15429 = state_15369__$1;(statearr_15390_15429[1] = 13);
} else
{var statearr_15391_15430 = state_15369__$1;(statearr_15391_15430[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 12))
{var inst_15342 = (state_15369[2]);var state_15369__$1 = state_15369;var statearr_15392_15431 = state_15369__$1;(statearr_15392_15431[2] = inst_15342);
(statearr_15392_15431[1] = 9);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 13))
{var inst_15322 = (state_15369[15]);var inst_15324 = cljs.core.chunked_seq_QMARK_.call(null,inst_15322);var state_15369__$1 = state_15369;if(inst_15324)
{var statearr_15393_15432 = state_15369__$1;(statearr_15393_15432[1] = 16);
} else
{var statearr_15394_15433 = state_15369__$1;(statearr_15394_15433[1] = 17);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 14))
{var state_15369__$1 = state_15369;var statearr_15395_15434 = state_15369__$1;(statearr_15395_15434[2] = null);
(statearr_15395_15434[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 15))
{var inst_15340 = (state_15369[2]);var state_15369__$1 = state_15369;var statearr_15396_15435 = state_15369__$1;(statearr_15396_15435[2] = inst_15340);
(statearr_15396_15435[1] = 12);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 16))
{var inst_15322 = (state_15369[15]);var inst_15326 = cljs.core.chunk_first.call(null,inst_15322);var inst_15327 = cljs.core.chunk_rest.call(null,inst_15322);var inst_15328 = cljs.core.count.call(null,inst_15326);var inst_15308 = inst_15327;var inst_15309 = inst_15326;var inst_15310 = inst_15328;var inst_15311 = 0;var state_15369__$1 = (function (){var statearr_15397 = state_15369;(statearr_15397[8] = inst_15311);
(statearr_15397[9] = inst_15310);
(statearr_15397[10] = inst_15308);
(statearr_15397[11] = inst_15309);
return statearr_15397;
})();var statearr_15398_15436 = state_15369__$1;(statearr_15398_15436[2] = null);
(statearr_15398_15436[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 17))
{var inst_15322 = (state_15369[15]);var inst_15331 = cljs.core.first.call(null,inst_15322);var inst_15332 = cljs.core.async.muxch_STAR_.call(null,inst_15331);var inst_15333 = cljs.core.async.close_BANG_.call(null,inst_15332);var inst_15334 = cljs.core.next.call(null,inst_15322);var inst_15308 = inst_15334;var inst_15309 = null;var inst_15310 = 0;var inst_15311 = 0;var state_15369__$1 = (function (){var statearr_15399 = state_15369;(statearr_15399[16] = inst_15333);
(statearr_15399[8] = inst_15311);
(statearr_15399[9] = inst_15310);
(statearr_15399[10] = inst_15308);
(statearr_15399[11] = inst_15309);
return statearr_15399;
})();var statearr_15400_15437 = state_15369__$1;(statearr_15400_15437[2] = null);
(statearr_15400_15437[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 18))
{var inst_15337 = (state_15369[2]);var state_15369__$1 = state_15369;var statearr_15401_15438 = state_15369__$1;(statearr_15401_15438[2] = inst_15337);
(statearr_15401_15438[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 19))
{var state_15369__$1 = state_15369;var statearr_15402_15439 = state_15369__$1;(statearr_15402_15439[2] = null);
(statearr_15402_15439[1] = 24);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 20))
{var state_15369__$1 = state_15369;var statearr_15403_15440 = state_15369__$1;(statearr_15403_15440[2] = null);
(statearr_15403_15440[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 21))
{var inst_15362 = (state_15369[2]);var state_15369__$1 = (function (){var statearr_15404 = state_15369;(statearr_15404[17] = inst_15362);
return statearr_15404;
})();var statearr_15405_15441 = state_15369__$1;(statearr_15405_15441[2] = null);
(statearr_15405_15441[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 22))
{var inst_15359 = (state_15369[2]);var state_15369__$1 = state_15369;var statearr_15406_15442 = state_15369__$1;(statearr_15406_15442[2] = inst_15359);
(statearr_15406_15442[1] = 21);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 23))
{var inst_15346 = (state_15369[13]);var inst_15350 = (state_15369[2]);var inst_15351 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_15346);var state_15369__$1 = (function (){var statearr_15407 = state_15369;(statearr_15407[18] = inst_15350);
return statearr_15407;
})();var statearr_15408_15443 = state_15369__$1;(statearr_15408_15443[2] = inst_15351);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15369__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15370 === 24))
{var inst_15298 = (state_15369[7]);var inst_15348 = (state_15369[12]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15369,23,Object,null,22);var inst_15355 = cljs.core.async.muxch_STAR_.call(null,inst_15348);var state_15369__$1 = state_15369;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15369__$1,25,inst_15355,inst_15298);
} else
{if((state_val_15370 === 25))
{var inst_15357 = (state_15369[2]);var state_15369__$1 = state_15369;var statearr_15409_15444 = state_15369__$1;(statearr_15409_15444[2] = inst_15357);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15369__$1);
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
var state_machine__5507__auto____0 = (function (){var statearr_15413 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15413[0] = state_machine__5507__auto__);
(statearr_15413[1] = 1);
return statearr_15413;
});
var state_machine__5507__auto____1 = (function (state_15369){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15369);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15414){if((e15414 instanceof Object))
{var ex__5510__auto__ = e15414;var statearr_15415_15445 = state_15369;(statearr_15415_15445[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15369);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15414;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15446 = state_15369;
state_15369 = G__15446;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15369){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15416 = f__5522__auto__.call(null);(statearr_15416[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15417);
return statearr_15416;
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
,cljs.core.range.call(null,cnt));var c__5521__auto___15583 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15553){var state_val_15554 = (state_15553[1]);if((state_val_15554 === 1))
{var state_15553__$1 = state_15553;var statearr_15555_15584 = state_15553__$1;(statearr_15555_15584[2] = null);
(statearr_15555_15584[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 2))
{var inst_15516 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_15517 = 0;var state_15553__$1 = (function (){var statearr_15556 = state_15553;(statearr_15556[7] = inst_15516);
(statearr_15556[8] = inst_15517);
return statearr_15556;
})();var statearr_15557_15585 = state_15553__$1;(statearr_15557_15585[2] = null);
(statearr_15557_15585[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 3))
{var inst_15551 = (state_15553[2]);var state_15553__$1 = state_15553;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15553__$1,inst_15551);
} else
{if((state_val_15554 === 4))
{var inst_15517 = (state_15553[8]);var inst_15519 = (inst_15517 < cnt);var state_15553__$1 = state_15553;if(cljs.core.truth_(inst_15519))
{var statearr_15558_15586 = state_15553__$1;(statearr_15558_15586[1] = 6);
} else
{var statearr_15559_15587 = state_15553__$1;(statearr_15559_15587[1] = 7);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 5))
{var inst_15537 = (state_15553[2]);var state_15553__$1 = (function (){var statearr_15560 = state_15553;(statearr_15560[9] = inst_15537);
return statearr_15560;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15553__$1,12,dchan);
} else
{if((state_val_15554 === 6))
{var state_15553__$1 = state_15553;var statearr_15561_15588 = state_15553__$1;(statearr_15561_15588[2] = null);
(statearr_15561_15588[1] = 11);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 7))
{var state_15553__$1 = state_15553;var statearr_15562_15589 = state_15553__$1;(statearr_15562_15589[2] = null);
(statearr_15562_15589[1] = 8);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 8))
{var inst_15535 = (state_15553[2]);var state_15553__$1 = state_15553;var statearr_15563_15590 = state_15553__$1;(statearr_15563_15590[2] = inst_15535);
(statearr_15563_15590[1] = 5);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 9))
{var inst_15517 = (state_15553[8]);var inst_15530 = (state_15553[2]);var inst_15531 = (inst_15517 + 1);var inst_15517__$1 = inst_15531;var state_15553__$1 = (function (){var statearr_15564 = state_15553;(statearr_15564[10] = inst_15530);
(statearr_15564[8] = inst_15517__$1);
return statearr_15564;
})();var statearr_15565_15591 = state_15553__$1;(statearr_15565_15591[2] = null);
(statearr_15565_15591[1] = 4);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 10))
{var inst_15521 = (state_15553[2]);var inst_15522 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_15553__$1 = (function (){var statearr_15566 = state_15553;(statearr_15566[11] = inst_15521);
return statearr_15566;
})();var statearr_15567_15592 = state_15553__$1;(statearr_15567_15592[2] = inst_15522);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15553__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 11))
{var inst_15517 = (state_15553[8]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_15553,10,Object,null,9);var inst_15526 = chs__$1.call(null,inst_15517);var inst_15527 = done.call(null,inst_15517);var inst_15528 = cljs.core.async.take_BANG_.call(null,inst_15526,inst_15527);var state_15553__$1 = state_15553;var statearr_15568_15593 = state_15553__$1;(statearr_15568_15593[2] = inst_15528);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15553__$1);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 12))
{var inst_15539 = (state_15553[12]);var inst_15539__$1 = (state_15553[2]);var inst_15540 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_15539__$1);var state_15553__$1 = (function (){var statearr_15569 = state_15553;(statearr_15569[12] = inst_15539__$1);
return statearr_15569;
})();if(cljs.core.truth_(inst_15540))
{var statearr_15570_15594 = state_15553__$1;(statearr_15570_15594[1] = 13);
} else
{var statearr_15571_15595 = state_15553__$1;(statearr_15571_15595[1] = 14);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 13))
{var inst_15542 = cljs.core.async.close_BANG_.call(null,out);var state_15553__$1 = state_15553;var statearr_15572_15596 = state_15553__$1;(statearr_15572_15596[2] = inst_15542);
(statearr_15572_15596[1] = 15);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 14))
{var inst_15539 = (state_15553[12]);var inst_15544 = cljs.core.apply.call(null,f,inst_15539);var state_15553__$1 = state_15553;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15553__$1,16,out,inst_15544);
} else
{if((state_val_15554 === 15))
{var inst_15549 = (state_15553[2]);var state_15553__$1 = state_15553;var statearr_15573_15597 = state_15553__$1;(statearr_15573_15597[2] = inst_15549);
(statearr_15573_15597[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15554 === 16))
{var inst_15546 = (state_15553[2]);var state_15553__$1 = (function (){var statearr_15574 = state_15553;(statearr_15574[13] = inst_15546);
return statearr_15574;
})();var statearr_15575_15598 = state_15553__$1;(statearr_15575_15598[2] = null);
(statearr_15575_15598[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15579 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15579[0] = state_machine__5507__auto__);
(statearr_15579[1] = 1);
return statearr_15579;
});
var state_machine__5507__auto____1 = (function (state_15553){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15553);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15580){if((e15580 instanceof Object))
{var ex__5510__auto__ = e15580;var statearr_15581_15599 = state_15553;(statearr_15581_15599[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15553);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15580;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15600 = state_15553;
state_15553 = G__15600;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15553){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15553);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15582 = f__5522__auto__.call(null);(statearr_15582[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15583);
return statearr_15582;
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
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15708 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15684){var state_val_15685 = (state_15684[1]);if((state_val_15685 === 1))
{var inst_15655 = cljs.core.vec.call(null,chs);var inst_15656 = inst_15655;var state_15684__$1 = (function (){var statearr_15686 = state_15684;(statearr_15686[7] = inst_15656);
return statearr_15686;
})();var statearr_15687_15709 = state_15684__$1;(statearr_15687_15709[2] = null);
(statearr_15687_15709[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15685 === 2))
{var inst_15656 = (state_15684[7]);var inst_15658 = cljs.core.count.call(null,inst_15656);var inst_15659 = (inst_15658 > 0);var state_15684__$1 = state_15684;if(cljs.core.truth_(inst_15659))
{var statearr_15688_15710 = state_15684__$1;(statearr_15688_15710[1] = 4);
} else
{var statearr_15689_15711 = state_15684__$1;(statearr_15689_15711[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15685 === 3))
{var inst_15682 = (state_15684[2]);var state_15684__$1 = state_15684;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15684__$1,inst_15682);
} else
{if((state_val_15685 === 4))
{var inst_15656 = (state_15684[7]);var state_15684__$1 = state_15684;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_15684__$1,7,inst_15656);
} else
{if((state_val_15685 === 5))
{var inst_15678 = cljs.core.async.close_BANG_.call(null,out);var state_15684__$1 = state_15684;var statearr_15690_15712 = state_15684__$1;(statearr_15690_15712[2] = inst_15678);
(statearr_15690_15712[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15685 === 6))
{var inst_15680 = (state_15684[2]);var state_15684__$1 = state_15684;var statearr_15691_15713 = state_15684__$1;(statearr_15691_15713[2] = inst_15680);
(statearr_15691_15713[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15685 === 7))
{var inst_15663 = (state_15684[8]);var inst_15664 = (state_15684[9]);var inst_15663__$1 = (state_15684[2]);var inst_15664__$1 = cljs.core.nth.call(null,inst_15663__$1,0,null);var inst_15665 = cljs.core.nth.call(null,inst_15663__$1,1,null);var inst_15666 = (inst_15664__$1 == null);var state_15684__$1 = (function (){var statearr_15692 = state_15684;(statearr_15692[10] = inst_15665);
(statearr_15692[8] = inst_15663__$1);
(statearr_15692[9] = inst_15664__$1);
return statearr_15692;
})();if(cljs.core.truth_(inst_15666))
{var statearr_15693_15714 = state_15684__$1;(statearr_15693_15714[1] = 8);
} else
{var statearr_15694_15715 = state_15684__$1;(statearr_15694_15715[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15685 === 8))
{var inst_15665 = (state_15684[10]);var inst_15663 = (state_15684[8]);var inst_15664 = (state_15684[9]);var inst_15656 = (state_15684[7]);var inst_15668 = (function (){var c = inst_15665;var v = inst_15664;var vec__15661 = inst_15663;var cs = inst_15656;return ((function (c,v,vec__15661,cs,inst_15665,inst_15663,inst_15664,inst_15656,state_val_15685){
return (function (p1__15601_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__15601_SHARP_);
});
;})(c,v,vec__15661,cs,inst_15665,inst_15663,inst_15664,inst_15656,state_val_15685))
})();var inst_15669 = cljs.core.filterv.call(null,inst_15668,inst_15656);var inst_15656__$1 = inst_15669;var state_15684__$1 = (function (){var statearr_15695 = state_15684;(statearr_15695[7] = inst_15656__$1);
return statearr_15695;
})();var statearr_15696_15716 = state_15684__$1;(statearr_15696_15716[2] = null);
(statearr_15696_15716[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15685 === 9))
{var inst_15664 = (state_15684[9]);var state_15684__$1 = state_15684;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15684__$1,11,out,inst_15664);
} else
{if((state_val_15685 === 10))
{var inst_15676 = (state_15684[2]);var state_15684__$1 = state_15684;var statearr_15698_15717 = state_15684__$1;(statearr_15698_15717[2] = inst_15676);
(statearr_15698_15717[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15685 === 11))
{var inst_15656 = (state_15684[7]);var inst_15673 = (state_15684[2]);var tmp15697 = inst_15656;var inst_15656__$1 = tmp15697;var state_15684__$1 = (function (){var statearr_15699 = state_15684;(statearr_15699[7] = inst_15656__$1);
(statearr_15699[11] = inst_15673);
return statearr_15699;
})();var statearr_15700_15718 = state_15684__$1;(statearr_15700_15718[2] = null);
(statearr_15700_15718[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15704 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_15704[0] = state_machine__5507__auto__);
(statearr_15704[1] = 1);
return statearr_15704;
});
var state_machine__5507__auto____1 = (function (state_15684){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15684);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15705){if((e15705 instanceof Object))
{var ex__5510__auto__ = e15705;var statearr_15706_15719 = state_15684;(statearr_15706_15719[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15684);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15705;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15720 = state_15684;
state_15684 = G__15720;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15684){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15684);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15707 = f__5522__auto__.call(null);(statearr_15707[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15708);
return statearr_15707;
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
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15813 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15790){var state_val_15791 = (state_15790[1]);if((state_val_15791 === 1))
{var inst_15767 = 0;var state_15790__$1 = (function (){var statearr_15792 = state_15790;(statearr_15792[7] = inst_15767);
return statearr_15792;
})();var statearr_15793_15814 = state_15790__$1;(statearr_15793_15814[2] = null);
(statearr_15793_15814[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15791 === 2))
{var inst_15767 = (state_15790[7]);var inst_15769 = (inst_15767 < n);var state_15790__$1 = state_15790;if(cljs.core.truth_(inst_15769))
{var statearr_15794_15815 = state_15790__$1;(statearr_15794_15815[1] = 4);
} else
{var statearr_15795_15816 = state_15790__$1;(statearr_15795_15816[1] = 5);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15791 === 3))
{var inst_15787 = (state_15790[2]);var inst_15788 = cljs.core.async.close_BANG_.call(null,out);var state_15790__$1 = (function (){var statearr_15796 = state_15790;(statearr_15796[8] = inst_15787);
return statearr_15796;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15790__$1,inst_15788);
} else
{if((state_val_15791 === 4))
{var state_15790__$1 = state_15790;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15790__$1,7,ch);
} else
{if((state_val_15791 === 5))
{var state_15790__$1 = state_15790;var statearr_15797_15817 = state_15790__$1;(statearr_15797_15817[2] = null);
(statearr_15797_15817[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15791 === 6))
{var inst_15785 = (state_15790[2]);var state_15790__$1 = state_15790;var statearr_15798_15818 = state_15790__$1;(statearr_15798_15818[2] = inst_15785);
(statearr_15798_15818[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15791 === 7))
{var inst_15772 = (state_15790[9]);var inst_15772__$1 = (state_15790[2]);var inst_15773 = (inst_15772__$1 == null);var inst_15774 = cljs.core.not.call(null,inst_15773);var state_15790__$1 = (function (){var statearr_15799 = state_15790;(statearr_15799[9] = inst_15772__$1);
return statearr_15799;
})();if(inst_15774)
{var statearr_15800_15819 = state_15790__$1;(statearr_15800_15819[1] = 8);
} else
{var statearr_15801_15820 = state_15790__$1;(statearr_15801_15820[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15791 === 8))
{var inst_15772 = (state_15790[9]);var state_15790__$1 = state_15790;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15790__$1,11,out,inst_15772);
} else
{if((state_val_15791 === 9))
{var state_15790__$1 = state_15790;var statearr_15802_15821 = state_15790__$1;(statearr_15802_15821[2] = null);
(statearr_15802_15821[1] = 10);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15791 === 10))
{var inst_15782 = (state_15790[2]);var state_15790__$1 = state_15790;var statearr_15803_15822 = state_15790__$1;(statearr_15803_15822[2] = inst_15782);
(statearr_15803_15822[1] = 6);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15791 === 11))
{var inst_15767 = (state_15790[7]);var inst_15777 = (state_15790[2]);var inst_15778 = (inst_15767 + 1);var inst_15767__$1 = inst_15778;var state_15790__$1 = (function (){var statearr_15804 = state_15790;(statearr_15804[10] = inst_15777);
(statearr_15804[7] = inst_15767__$1);
return statearr_15804;
})();var statearr_15805_15823 = state_15790__$1;(statearr_15805_15823[2] = null);
(statearr_15805_15823[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15809 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15809[0] = state_machine__5507__auto__);
(statearr_15809[1] = 1);
return statearr_15809;
});
var state_machine__5507__auto____1 = (function (state_15790){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15790);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15810){if((e15810 instanceof Object))
{var ex__5510__auto__ = e15810;var statearr_15811_15824 = state_15790;(statearr_15811_15824[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15790);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15810;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15825 = state_15790;
state_15790 = G__15825;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15790){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15790);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15812 = f__5522__auto__.call(null);(statearr_15812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15813);
return statearr_15812;
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
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___15922 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_15897){var state_val_15898 = (state_15897[1]);if((state_val_15898 === 1))
{var inst_15874 = null;var state_15897__$1 = (function (){var statearr_15899 = state_15897;(statearr_15899[7] = inst_15874);
return statearr_15899;
})();var statearr_15900_15923 = state_15897__$1;(statearr_15900_15923[2] = null);
(statearr_15900_15923[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15898 === 2))
{var state_15897__$1 = state_15897;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_15897__$1,4,ch);
} else
{if((state_val_15898 === 3))
{var inst_15894 = (state_15897[2]);var inst_15895 = cljs.core.async.close_BANG_.call(null,out);var state_15897__$1 = (function (){var statearr_15901 = state_15897;(statearr_15901[8] = inst_15894);
return statearr_15901;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_15897__$1,inst_15895);
} else
{if((state_val_15898 === 4))
{var inst_15877 = (state_15897[9]);var inst_15877__$1 = (state_15897[2]);var inst_15878 = (inst_15877__$1 == null);var inst_15879 = cljs.core.not.call(null,inst_15878);var state_15897__$1 = (function (){var statearr_15902 = state_15897;(statearr_15902[9] = inst_15877__$1);
return statearr_15902;
})();if(inst_15879)
{var statearr_15903_15924 = state_15897__$1;(statearr_15903_15924[1] = 5);
} else
{var statearr_15904_15925 = state_15897__$1;(statearr_15904_15925[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15898 === 5))
{var inst_15877 = (state_15897[9]);var inst_15874 = (state_15897[7]);var inst_15881 = cljs.core._EQ_.call(null,inst_15877,inst_15874);var state_15897__$1 = state_15897;if(inst_15881)
{var statearr_15905_15926 = state_15897__$1;(statearr_15905_15926[1] = 8);
} else
{var statearr_15906_15927 = state_15897__$1;(statearr_15906_15927[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15898 === 6))
{var state_15897__$1 = state_15897;var statearr_15908_15928 = state_15897__$1;(statearr_15908_15928[2] = null);
(statearr_15908_15928[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15898 === 7))
{var inst_15892 = (state_15897[2]);var state_15897__$1 = state_15897;var statearr_15909_15929 = state_15897__$1;(statearr_15909_15929[2] = inst_15892);
(statearr_15909_15929[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15898 === 8))
{var inst_15874 = (state_15897[7]);var tmp15907 = inst_15874;var inst_15874__$1 = tmp15907;var state_15897__$1 = (function (){var statearr_15910 = state_15897;(statearr_15910[7] = inst_15874__$1);
return statearr_15910;
})();var statearr_15911_15930 = state_15897__$1;(statearr_15911_15930[2] = null);
(statearr_15911_15930[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15898 === 9))
{var inst_15877 = (state_15897[9]);var state_15897__$1 = state_15897;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_15897__$1,11,out,inst_15877);
} else
{if((state_val_15898 === 10))
{var inst_15889 = (state_15897[2]);var state_15897__$1 = state_15897;var statearr_15912_15931 = state_15897__$1;(statearr_15912_15931[2] = inst_15889);
(statearr_15912_15931[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_15898 === 11))
{var inst_15877 = (state_15897[9]);var inst_15886 = (state_15897[2]);var inst_15874 = inst_15877;var state_15897__$1 = (function (){var statearr_15913 = state_15897;(statearr_15913[10] = inst_15886);
(statearr_15913[7] = inst_15874);
return statearr_15913;
})();var statearr_15914_15932 = state_15897__$1;(statearr_15914_15932[2] = null);
(statearr_15914_15932[1] = 2);
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
var state_machine__5507__auto____0 = (function (){var statearr_15918 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_15918[0] = state_machine__5507__auto__);
(statearr_15918[1] = 1);
return statearr_15918;
});
var state_machine__5507__auto____1 = (function (state_15897){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_15897);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e15919){if((e15919 instanceof Object))
{var ex__5510__auto__ = e15919;var statearr_15920_15933 = state_15897;(statearr_15920_15933[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_15897);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e15919;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__15934 = state_15897;
state_15897 = G__15934;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_15897){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_15897);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_15921 = f__5522__auto__.call(null);(statearr_15921[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___15922);
return statearr_15921;
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
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16069 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16039){var state_val_16040 = (state_16039[1]);if((state_val_16040 === 1))
{var inst_16002 = (new Array(n));var inst_16003 = inst_16002;var inst_16004 = 0;var state_16039__$1 = (function (){var statearr_16041 = state_16039;(statearr_16041[7] = inst_16004);
(statearr_16041[8] = inst_16003);
return statearr_16041;
})();var statearr_16042_16070 = state_16039__$1;(statearr_16042_16070[2] = null);
(statearr_16042_16070[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 2))
{var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16039__$1,4,ch);
} else
{if((state_val_16040 === 3))
{var inst_16037 = (state_16039[2]);var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16039__$1,inst_16037);
} else
{if((state_val_16040 === 4))
{var inst_16007 = (state_16039[9]);var inst_16007__$1 = (state_16039[2]);var inst_16008 = (inst_16007__$1 == null);var inst_16009 = cljs.core.not.call(null,inst_16008);var state_16039__$1 = (function (){var statearr_16043 = state_16039;(statearr_16043[9] = inst_16007__$1);
return statearr_16043;
})();if(inst_16009)
{var statearr_16044_16071 = state_16039__$1;(statearr_16044_16071[1] = 5);
} else
{var statearr_16045_16072 = state_16039__$1;(statearr_16045_16072[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 5))
{var inst_16004 = (state_16039[7]);var inst_16003 = (state_16039[8]);var inst_16012 = (state_16039[10]);var inst_16007 = (state_16039[9]);var inst_16011 = (inst_16003[inst_16004] = inst_16007);var inst_16012__$1 = (inst_16004 + 1);var inst_16013 = (inst_16012__$1 < n);var state_16039__$1 = (function (){var statearr_16046 = state_16039;(statearr_16046[10] = inst_16012__$1);
(statearr_16046[11] = inst_16011);
return statearr_16046;
})();if(cljs.core.truth_(inst_16013))
{var statearr_16047_16073 = state_16039__$1;(statearr_16047_16073[1] = 8);
} else
{var statearr_16048_16074 = state_16039__$1;(statearr_16048_16074[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 6))
{var inst_16004 = (state_16039[7]);var inst_16025 = (inst_16004 > 0);var state_16039__$1 = state_16039;if(cljs.core.truth_(inst_16025))
{var statearr_16050_16075 = state_16039__$1;(statearr_16050_16075[1] = 12);
} else
{var statearr_16051_16076 = state_16039__$1;(statearr_16051_16076[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 7))
{var inst_16035 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16052_16077 = state_16039__$1;(statearr_16052_16077[2] = inst_16035);
(statearr_16052_16077[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 8))
{var inst_16003 = (state_16039[8]);var inst_16012 = (state_16039[10]);var tmp16049 = inst_16003;var inst_16003__$1 = tmp16049;var inst_16004 = inst_16012;var state_16039__$1 = (function (){var statearr_16053 = state_16039;(statearr_16053[7] = inst_16004);
(statearr_16053[8] = inst_16003__$1);
return statearr_16053;
})();var statearr_16054_16078 = state_16039__$1;(statearr_16054_16078[2] = null);
(statearr_16054_16078[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 9))
{var inst_16003 = (state_16039[8]);var inst_16017 = cljs.core.vec.call(null,inst_16003);var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16039__$1,11,out,inst_16017);
} else
{if((state_val_16040 === 10))
{var inst_16023 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16055_16079 = state_16039__$1;(statearr_16055_16079[2] = inst_16023);
(statearr_16055_16079[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 11))
{var inst_16019 = (state_16039[2]);var inst_16020 = (new Array(n));var inst_16003 = inst_16020;var inst_16004 = 0;var state_16039__$1 = (function (){var statearr_16056 = state_16039;(statearr_16056[7] = inst_16004);
(statearr_16056[8] = inst_16003);
(statearr_16056[12] = inst_16019);
return statearr_16056;
})();var statearr_16057_16080 = state_16039__$1;(statearr_16057_16080[2] = null);
(statearr_16057_16080[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 12))
{var inst_16003 = (state_16039[8]);var inst_16027 = cljs.core.vec.call(null,inst_16003);var state_16039__$1 = state_16039;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16039__$1,15,out,inst_16027);
} else
{if((state_val_16040 === 13))
{var state_16039__$1 = state_16039;var statearr_16058_16081 = state_16039__$1;(statearr_16058_16081[2] = null);
(statearr_16058_16081[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 14))
{var inst_16032 = (state_16039[2]);var inst_16033 = cljs.core.async.close_BANG_.call(null,out);var state_16039__$1 = (function (){var statearr_16059 = state_16039;(statearr_16059[13] = inst_16032);
return statearr_16059;
})();var statearr_16060_16082 = state_16039__$1;(statearr_16060_16082[2] = inst_16033);
(statearr_16060_16082[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16040 === 15))
{var inst_16029 = (state_16039[2]);var state_16039__$1 = state_16039;var statearr_16061_16083 = state_16039__$1;(statearr_16061_16083[2] = inst_16029);
(statearr_16061_16083[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16065 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16065[0] = state_machine__5507__auto__);
(statearr_16065[1] = 1);
return statearr_16065;
});
var state_machine__5507__auto____1 = (function (state_16039){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16039);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16066){if((e16066 instanceof Object))
{var ex__5510__auto__ = e16066;var statearr_16067_16084 = state_16039;(statearr_16067_16084[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16039);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16066;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16085 = state_16039;
state_16039 = G__16085;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16039){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16068 = f__5522__auto__.call(null);(statearr_16068[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16069);
return statearr_16068;
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
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__5521__auto___16228 = cljs.core.async.chan.call(null,1);cljs.core.async.impl.dispatch.run.call(null,(function (){var f__5522__auto__ = (function (){var switch__5506__auto__ = (function (state_16198){var state_val_16199 = (state_16198[1]);if((state_val_16199 === 1))
{var inst_16157 = [];var inst_16158 = inst_16157;var inst_16159 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538);var state_16198__$1 = (function (){var statearr_16200 = state_16198;(statearr_16200[7] = inst_16158);
(statearr_16200[8] = inst_16159);
return statearr_16200;
})();var statearr_16201_16229 = state_16198__$1;(statearr_16201_16229[2] = null);
(statearr_16201_16229[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 2))
{var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_16198__$1,4,ch);
} else
{if((state_val_16199 === 3))
{var inst_16196 = (state_16198[2]);var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_16198__$1,inst_16196);
} else
{if((state_val_16199 === 4))
{var inst_16162 = (state_16198[9]);var inst_16162__$1 = (state_16198[2]);var inst_16163 = (inst_16162__$1 == null);var inst_16164 = cljs.core.not.call(null,inst_16163);var state_16198__$1 = (function (){var statearr_16202 = state_16198;(statearr_16202[9] = inst_16162__$1);
return statearr_16202;
})();if(inst_16164)
{var statearr_16203_16230 = state_16198__$1;(statearr_16203_16230[1] = 5);
} else
{var statearr_16204_16231 = state_16198__$1;(statearr_16204_16231[1] = 6);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 5))
{var inst_16159 = (state_16198[8]);var inst_16162 = (state_16198[9]);var inst_16166 = (state_16198[10]);var inst_16166__$1 = f.call(null,inst_16162);var inst_16167 = cljs.core._EQ_.call(null,inst_16166__$1,inst_16159);var inst_16168 = cljs.core.keyword_identical_QMARK_.call(null,inst_16159,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",4382193538));var inst_16169 = (inst_16167) || (inst_16168);var state_16198__$1 = (function (){var statearr_16205 = state_16198;(statearr_16205[10] = inst_16166__$1);
return statearr_16205;
})();if(cljs.core.truth_(inst_16169))
{var statearr_16206_16232 = state_16198__$1;(statearr_16206_16232[1] = 8);
} else
{var statearr_16207_16233 = state_16198__$1;(statearr_16207_16233[1] = 9);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 6))
{var inst_16158 = (state_16198[7]);var inst_16183 = inst_16158.length;var inst_16184 = (inst_16183 > 0);var state_16198__$1 = state_16198;if(cljs.core.truth_(inst_16184))
{var statearr_16209_16234 = state_16198__$1;(statearr_16209_16234[1] = 12);
} else
{var statearr_16210_16235 = state_16198__$1;(statearr_16210_16235[1] = 13);
}
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 7))
{var inst_16194 = (state_16198[2]);var state_16198__$1 = state_16198;var statearr_16211_16236 = state_16198__$1;(statearr_16211_16236[2] = inst_16194);
(statearr_16211_16236[1] = 3);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 8))
{var inst_16158 = (state_16198[7]);var inst_16162 = (state_16198[9]);var inst_16166 = (state_16198[10]);var inst_16171 = inst_16158.push(inst_16162);var tmp16208 = inst_16158;var inst_16158__$1 = tmp16208;var inst_16159 = inst_16166;var state_16198__$1 = (function (){var statearr_16212 = state_16198;(statearr_16212[11] = inst_16171);
(statearr_16212[7] = inst_16158__$1);
(statearr_16212[8] = inst_16159);
return statearr_16212;
})();var statearr_16213_16237 = state_16198__$1;(statearr_16213_16237[2] = null);
(statearr_16213_16237[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 9))
{var inst_16158 = (state_16198[7]);var inst_16174 = cljs.core.vec.call(null,inst_16158);var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16198__$1,11,out,inst_16174);
} else
{if((state_val_16199 === 10))
{var inst_16181 = (state_16198[2]);var state_16198__$1 = state_16198;var statearr_16214_16238 = state_16198__$1;(statearr_16214_16238[2] = inst_16181);
(statearr_16214_16238[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 11))
{var inst_16162 = (state_16198[9]);var inst_16166 = (state_16198[10]);var inst_16176 = (state_16198[2]);var inst_16177 = [];var inst_16178 = inst_16177.push(inst_16162);var inst_16158 = inst_16177;var inst_16159 = inst_16166;var state_16198__$1 = (function (){var statearr_16215 = state_16198;(statearr_16215[7] = inst_16158);
(statearr_16215[8] = inst_16159);
(statearr_16215[12] = inst_16178);
(statearr_16215[13] = inst_16176);
return statearr_16215;
})();var statearr_16216_16239 = state_16198__$1;(statearr_16216_16239[2] = null);
(statearr_16216_16239[1] = 2);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 12))
{var inst_16158 = (state_16198[7]);var inst_16186 = cljs.core.vec.call(null,inst_16158);var state_16198__$1 = state_16198;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_16198__$1,15,out,inst_16186);
} else
{if((state_val_16199 === 13))
{var state_16198__$1 = state_16198;var statearr_16217_16240 = state_16198__$1;(statearr_16217_16240[2] = null);
(statearr_16217_16240[1] = 14);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 14))
{var inst_16191 = (state_16198[2]);var inst_16192 = cljs.core.async.close_BANG_.call(null,out);var state_16198__$1 = (function (){var statearr_16218 = state_16198;(statearr_16218[14] = inst_16191);
return statearr_16218;
})();var statearr_16219_16241 = state_16198__$1;(statearr_16219_16241[2] = inst_16192);
(statearr_16219_16241[1] = 7);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if((state_val_16199 === 15))
{var inst_16188 = (state_16198[2]);var state_16198__$1 = state_16198;var statearr_16220_16242 = state_16198__$1;(statearr_16220_16242[2] = inst_16188);
(statearr_16220_16242[1] = 14);
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
var state_machine__5507__auto____0 = (function (){var statearr_16224 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_16224[0] = state_machine__5507__auto__);
(statearr_16224[1] = 1);
return statearr_16224;
});
var state_machine__5507__auto____1 = (function (state_16198){while(true){
var ret_value__5508__auto__ = (function (){try{while(true){
var result__5509__auto__ = switch__5506__auto__.call(null,state_16198);if(cljs.core.keyword_identical_QMARK_.call(null,result__5509__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
continue;
}
} else
{return result__5509__auto__;
}
break;
}
}catch (e16225){if((e16225 instanceof Object))
{var ex__5510__auto__ = e16225;var statearr_16226_16243 = state_16198;(statearr_16226_16243[5] = ex__5510__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_16198);
return new cljs.core.Keyword(null,"recur","recur",1122293407);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e16225;
} else
{return null;
}
}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__5508__auto__,new cljs.core.Keyword(null,"recur","recur",1122293407)))
{{
var G__16244 = state_16198;
state_16198 = G__16244;
continue;
}
} else
{return ret_value__5508__auto__;
}
break;
}
});
state_machine__5507__auto__ = function(state_16198){
switch(arguments.length){
case 0:
return state_machine__5507__auto____0.call(this);
case 1:
return state_machine__5507__auto____1.call(this,state_16198);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__5507__auto____0;
state_machine__5507__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__5507__auto____1;
return state_machine__5507__auto__;
})()
;})(switch__5506__auto__))
})();var state__5523__auto__ = (function (){var statearr_16227 = f__5522__auto__.call(null);(statearr_16227[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__5521__auto___16228);
return statearr_16227;
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

//# sourceMappingURL=async.js.map
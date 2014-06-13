// Compiled by ClojureScript 0.0-2173
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.classes');
goog.require('domina.support');
goog.require('goog.dom.classes');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.string');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('goog.dom.xml');
goog.require('goog.style');
goog.require('goog.dom.forms');
goog.require('domina.support');
goog.require('goog.events');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_17469 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_17470 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_17471 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_17470,table_section_wrapper_17470,opt_wrapper_17469,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_17471,table_section_wrapper_17470,cell_wrapper_17471,opt_wrapper_17469,table_section_wrapper_17470,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_17470]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__17476 = cljs.core.seq.call(null,tbody);var chunk__17477 = null;var count__17478 = 0;var i__17479 = 0;while(true){
if((i__17479 < count__17478))
{var child = cljs.core._nth.call(null,chunk__17477,i__17479);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17480 = seq__17476;
var G__17481 = chunk__17477;
var G__17482 = count__17478;
var G__17483 = (i__17479 + 1);
seq__17476 = G__17480;
chunk__17477 = G__17481;
count__17478 = G__17482;
i__17479 = G__17483;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__17476);if(temp__4092__auto__)
{var seq__17476__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17476__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__17476__$1);{
var G__17484 = cljs.core.chunk_rest.call(null,seq__17476__$1);
var G__17485 = c__4189__auto__;
var G__17486 = cljs.core.count.call(null,c__4189__auto__);
var G__17487 = 0;
seq__17476 = G__17484;
chunk__17477 = G__17485;
count__17478 = G__17486;
i__17479 = G__17487;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__17476__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__17488 = cljs.core.next.call(null,seq__17476__$1);
var G__17489 = null;
var G__17490 = 0;
var G__17491 = 0;
seq__17476 = G__17488;
chunk__17477 = G__17489;
count__17478 = G__17490;
i__17479 = G__17491;
continue;
}
}
} else
{return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__17493 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__17493,0,null);var start_wrap = cljs.core.nth.call(null,vec__17493,1,null);var end_wrap = cljs.core.nth.call(null,vec__17493,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__17494 = wrapper.lastChild;
var G__17495 = (level - 1);
wrapper = G__17494;
level = G__17495;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3429__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3429__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3429__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj17497 = {};return obj17497;
})();
domina.nodes = (function nodes(content){if((function (){var and__3429__auto__ = content;if(and__3429__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3429__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4068__auto__ = (((content == null))?null:content);return (function (){var or__3441__auto__ = (domina.nodes[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.nodes["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3429__auto__ = nodeseq;if(and__3429__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3429__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4068__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3441__auto__ = (domina.single_node[goog.typeOf(x__4068__auto__)]);if(or__3441__auto__)
{return or__3441__auto__;
} else
{var or__3441__auto____$1 = (domina.single_node["_"]);if(or__3441__auto____$1)
{return or__3441__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3429__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3429__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3429__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__17498){
var mesg = cljs.core.seq(arglist__17498);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__17499){
var mesg = cljs.core.seq(arglist__17499);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__17500){
var contents = cljs.core.seq(arglist__17500);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__17501_SHARP_){return p1__17501_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__17502_SHARP_,p2__17503_SHARP_){return goog.dom.insertChildAt(p1__17502_SHARP_,p2__17503_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,0);
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17505_SHARP_,p2__17504_SHARP_){return goog.dom.insertSiblingBefore(p2__17504_SHARP_,p1__17505_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__17507_SHARP_,p2__17506_SHARP_){return goog.dom.insertSiblingAfter(p2__17506_SHARP_,p1__17507_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__17509_SHARP_,p2__17508_SHARP_){return goog.dom.replaceNode(p2__17508_SHARP_,p1__17509_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__17514_17518 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17515_17519 = null;var count__17516_17520 = 0;var i__17517_17521 = 0;while(true){
if((i__17517_17521 < count__17516_17520))
{var n_17522 = cljs.core._nth.call(null,chunk__17515_17519,i__17517_17521);goog.style.setStyle(n_17522,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17523 = seq__17514_17518;
var G__17524 = chunk__17515_17519;
var G__17525 = count__17516_17520;
var G__17526 = (i__17517_17521 + 1);
seq__17514_17518 = G__17523;
chunk__17515_17519 = G__17524;
count__17516_17520 = G__17525;
i__17517_17521 = G__17526;
continue;
}
} else
{var temp__4092__auto___17527 = cljs.core.seq.call(null,seq__17514_17518);if(temp__4092__auto___17527)
{var seq__17514_17528__$1 = temp__4092__auto___17527;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17514_17528__$1))
{var c__4189__auto___17529 = cljs.core.chunk_first.call(null,seq__17514_17528__$1);{
var G__17530 = cljs.core.chunk_rest.call(null,seq__17514_17528__$1);
var G__17531 = c__4189__auto___17529;
var G__17532 = cljs.core.count.call(null,c__4189__auto___17529);
var G__17533 = 0;
seq__17514_17518 = G__17530;
chunk__17515_17519 = G__17531;
count__17516_17520 = G__17532;
i__17517_17521 = G__17533;
continue;
}
} else
{var n_17534 = cljs.core.first.call(null,seq__17514_17528__$1);goog.style.setStyle(n_17534,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17535 = cljs.core.next.call(null,seq__17514_17528__$1);
var G__17536 = null;
var G__17537 = 0;
var G__17538 = 0;
seq__17514_17518 = G__17535;
chunk__17515_17519 = G__17536;
count__17516_17520 = G__17537;
i__17517_17521 = G__17538;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__17539){
var content = cljs.core.first(arglist__17539);
arglist__17539 = cljs.core.next(arglist__17539);
var name = cljs.core.first(arglist__17539);
var value = cljs.core.rest(arglist__17539);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__17544_17548 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17545_17549 = null;var count__17546_17550 = 0;var i__17547_17551 = 0;while(true){
if((i__17547_17551 < count__17546_17550))
{var n_17552 = cljs.core._nth.call(null,chunk__17545_17549,i__17547_17551);n_17552.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17553 = seq__17544_17548;
var G__17554 = chunk__17545_17549;
var G__17555 = count__17546_17550;
var G__17556 = (i__17547_17551 + 1);
seq__17544_17548 = G__17553;
chunk__17545_17549 = G__17554;
count__17546_17550 = G__17555;
i__17547_17551 = G__17556;
continue;
}
} else
{var temp__4092__auto___17557 = cljs.core.seq.call(null,seq__17544_17548);if(temp__4092__auto___17557)
{var seq__17544_17558__$1 = temp__4092__auto___17557;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17544_17558__$1))
{var c__4189__auto___17559 = cljs.core.chunk_first.call(null,seq__17544_17558__$1);{
var G__17560 = cljs.core.chunk_rest.call(null,seq__17544_17558__$1);
var G__17561 = c__4189__auto___17559;
var G__17562 = cljs.core.count.call(null,c__4189__auto___17559);
var G__17563 = 0;
seq__17544_17548 = G__17560;
chunk__17545_17549 = G__17561;
count__17546_17550 = G__17562;
i__17547_17551 = G__17563;
continue;
}
} else
{var n_17564 = cljs.core.first.call(null,seq__17544_17558__$1);n_17564.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__17565 = cljs.core.next.call(null,seq__17544_17558__$1);
var G__17566 = null;
var G__17567 = 0;
var G__17568 = 0;
seq__17544_17548 = G__17565;
chunk__17545_17549 = G__17566;
count__17546_17550 = G__17567;
i__17547_17551 = G__17568;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__17569){
var content = cljs.core.first(arglist__17569);
arglist__17569 = cljs.core.next(arglist__17569);
var name = cljs.core.first(arglist__17569);
var value = cljs.core.rest(arglist__17569);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__17574_17578 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17575_17579 = null;var count__17576_17580 = 0;var i__17577_17581 = 0;while(true){
if((i__17577_17581 < count__17576_17580))
{var n_17582 = cljs.core._nth.call(null,chunk__17575_17579,i__17577_17581);n_17582.removeAttribute(cljs.core.name.call(null,name));
{
var G__17583 = seq__17574_17578;
var G__17584 = chunk__17575_17579;
var G__17585 = count__17576_17580;
var G__17586 = (i__17577_17581 + 1);
seq__17574_17578 = G__17583;
chunk__17575_17579 = G__17584;
count__17576_17580 = G__17585;
i__17577_17581 = G__17586;
continue;
}
} else
{var temp__4092__auto___17587 = cljs.core.seq.call(null,seq__17574_17578);if(temp__4092__auto___17587)
{var seq__17574_17588__$1 = temp__4092__auto___17587;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17574_17588__$1))
{var c__4189__auto___17589 = cljs.core.chunk_first.call(null,seq__17574_17588__$1);{
var G__17590 = cljs.core.chunk_rest.call(null,seq__17574_17588__$1);
var G__17591 = c__4189__auto___17589;
var G__17592 = cljs.core.count.call(null,c__4189__auto___17589);
var G__17593 = 0;
seq__17574_17578 = G__17590;
chunk__17575_17579 = G__17591;
count__17576_17580 = G__17592;
i__17577_17581 = G__17593;
continue;
}
} else
{var n_17594 = cljs.core.first.call(null,seq__17574_17588__$1);n_17594.removeAttribute(cljs.core.name.call(null,name));
{
var G__17595 = cljs.core.next.call(null,seq__17574_17588__$1);
var G__17596 = null;
var G__17597 = 0;
var G__17598 = 0;
seq__17574_17578 = G__17595;
chunk__17575_17579 = G__17596;
count__17576_17580 = G__17597;
i__17577_17581 = G__17598;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__17600 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__17600,0,null);var v = cljs.core.nth.call(null,vec__17600,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
{return v;
} else
{return and__3429__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__17601_SHARP_){var attr = attrs__$1.item(p1__17601_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__17608_17614 = cljs.core.seq.call(null,styles);var chunk__17609_17615 = null;var count__17610_17616 = 0;var i__17611_17617 = 0;while(true){
if((i__17611_17617 < count__17610_17616))
{var vec__17612_17618 = cljs.core._nth.call(null,chunk__17609_17615,i__17611_17617);var name_17619 = cljs.core.nth.call(null,vec__17612_17618,0,null);var value_17620 = cljs.core.nth.call(null,vec__17612_17618,1,null);domina.set_style_BANG_.call(null,content,name_17619,value_17620);
{
var G__17621 = seq__17608_17614;
var G__17622 = chunk__17609_17615;
var G__17623 = count__17610_17616;
var G__17624 = (i__17611_17617 + 1);
seq__17608_17614 = G__17621;
chunk__17609_17615 = G__17622;
count__17610_17616 = G__17623;
i__17611_17617 = G__17624;
continue;
}
} else
{var temp__4092__auto___17625 = cljs.core.seq.call(null,seq__17608_17614);if(temp__4092__auto___17625)
{var seq__17608_17626__$1 = temp__4092__auto___17625;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17608_17626__$1))
{var c__4189__auto___17627 = cljs.core.chunk_first.call(null,seq__17608_17626__$1);{
var G__17628 = cljs.core.chunk_rest.call(null,seq__17608_17626__$1);
var G__17629 = c__4189__auto___17627;
var G__17630 = cljs.core.count.call(null,c__4189__auto___17627);
var G__17631 = 0;
seq__17608_17614 = G__17628;
chunk__17609_17615 = G__17629;
count__17610_17616 = G__17630;
i__17611_17617 = G__17631;
continue;
}
} else
{var vec__17613_17632 = cljs.core.first.call(null,seq__17608_17626__$1);var name_17633 = cljs.core.nth.call(null,vec__17613_17632,0,null);var value_17634 = cljs.core.nth.call(null,vec__17613_17632,1,null);domina.set_style_BANG_.call(null,content,name_17633,value_17634);
{
var G__17635 = cljs.core.next.call(null,seq__17608_17626__$1);
var G__17636 = null;
var G__17637 = 0;
var G__17638 = 0;
seq__17608_17614 = G__17635;
chunk__17609_17615 = G__17636;
count__17610_17616 = G__17637;
i__17611_17617 = G__17638;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__17645_17651 = cljs.core.seq.call(null,attrs);var chunk__17646_17652 = null;var count__17647_17653 = 0;var i__17648_17654 = 0;while(true){
if((i__17648_17654 < count__17647_17653))
{var vec__17649_17655 = cljs.core._nth.call(null,chunk__17646_17652,i__17648_17654);var name_17656 = cljs.core.nth.call(null,vec__17649_17655,0,null);var value_17657 = cljs.core.nth.call(null,vec__17649_17655,1,null);domina.set_attr_BANG_.call(null,content,name_17656,value_17657);
{
var G__17658 = seq__17645_17651;
var G__17659 = chunk__17646_17652;
var G__17660 = count__17647_17653;
var G__17661 = (i__17648_17654 + 1);
seq__17645_17651 = G__17658;
chunk__17646_17652 = G__17659;
count__17647_17653 = G__17660;
i__17648_17654 = G__17661;
continue;
}
} else
{var temp__4092__auto___17662 = cljs.core.seq.call(null,seq__17645_17651);if(temp__4092__auto___17662)
{var seq__17645_17663__$1 = temp__4092__auto___17662;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17645_17663__$1))
{var c__4189__auto___17664 = cljs.core.chunk_first.call(null,seq__17645_17663__$1);{
var G__17665 = cljs.core.chunk_rest.call(null,seq__17645_17663__$1);
var G__17666 = c__4189__auto___17664;
var G__17667 = cljs.core.count.call(null,c__4189__auto___17664);
var G__17668 = 0;
seq__17645_17651 = G__17665;
chunk__17646_17652 = G__17666;
count__17647_17653 = G__17667;
i__17648_17654 = G__17668;
continue;
}
} else
{var vec__17650_17669 = cljs.core.first.call(null,seq__17645_17663__$1);var name_17670 = cljs.core.nth.call(null,vec__17650_17669,0,null);var value_17671 = cljs.core.nth.call(null,vec__17650_17669,1,null);domina.set_attr_BANG_.call(null,content,name_17670,value_17671);
{
var G__17672 = cljs.core.next.call(null,seq__17645_17663__$1);
var G__17673 = null;
var G__17674 = 0;
var G__17675 = 0;
seq__17645_17651 = G__17672;
chunk__17646_17652 = G__17673;
count__17647_17653 = G__17674;
i__17648_17654 = G__17675;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__17680_17684 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17681_17685 = null;var count__17682_17686 = 0;var i__17683_17687 = 0;while(true){
if((i__17683_17687 < count__17682_17686))
{var node_17688 = cljs.core._nth.call(null,chunk__17681_17685,i__17683_17687);goog.dom.classes.add(node_17688,class$);
{
var G__17689 = seq__17680_17684;
var G__17690 = chunk__17681_17685;
var G__17691 = count__17682_17686;
var G__17692 = (i__17683_17687 + 1);
seq__17680_17684 = G__17689;
chunk__17681_17685 = G__17690;
count__17682_17686 = G__17691;
i__17683_17687 = G__17692;
continue;
}
} else
{var temp__4092__auto___17693 = cljs.core.seq.call(null,seq__17680_17684);if(temp__4092__auto___17693)
{var seq__17680_17694__$1 = temp__4092__auto___17693;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17680_17694__$1))
{var c__4189__auto___17695 = cljs.core.chunk_first.call(null,seq__17680_17694__$1);{
var G__17696 = cljs.core.chunk_rest.call(null,seq__17680_17694__$1);
var G__17697 = c__4189__auto___17695;
var G__17698 = cljs.core.count.call(null,c__4189__auto___17695);
var G__17699 = 0;
seq__17680_17684 = G__17696;
chunk__17681_17685 = G__17697;
count__17682_17686 = G__17698;
i__17683_17687 = G__17699;
continue;
}
} else
{var node_17700 = cljs.core.first.call(null,seq__17680_17694__$1);goog.dom.classes.add(node_17700,class$);
{
var G__17701 = cljs.core.next.call(null,seq__17680_17694__$1);
var G__17702 = null;
var G__17703 = 0;
var G__17704 = 0;
seq__17680_17684 = G__17701;
chunk__17681_17685 = G__17702;
count__17682_17686 = G__17703;
i__17683_17687 = G__17704;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__17709_17713 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17710_17714 = null;var count__17711_17715 = 0;var i__17712_17716 = 0;while(true){
if((i__17712_17716 < count__17711_17715))
{var node_17717 = cljs.core._nth.call(null,chunk__17710_17714,i__17712_17716);goog.dom.classes.remove(node_17717,class$);
{
var G__17718 = seq__17709_17713;
var G__17719 = chunk__17710_17714;
var G__17720 = count__17711_17715;
var G__17721 = (i__17712_17716 + 1);
seq__17709_17713 = G__17718;
chunk__17710_17714 = G__17719;
count__17711_17715 = G__17720;
i__17712_17716 = G__17721;
continue;
}
} else
{var temp__4092__auto___17722 = cljs.core.seq.call(null,seq__17709_17713);if(temp__4092__auto___17722)
{var seq__17709_17723__$1 = temp__4092__auto___17722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17709_17723__$1))
{var c__4189__auto___17724 = cljs.core.chunk_first.call(null,seq__17709_17723__$1);{
var G__17725 = cljs.core.chunk_rest.call(null,seq__17709_17723__$1);
var G__17726 = c__4189__auto___17724;
var G__17727 = cljs.core.count.call(null,c__4189__auto___17724);
var G__17728 = 0;
seq__17709_17713 = G__17725;
chunk__17710_17714 = G__17726;
count__17711_17715 = G__17727;
i__17712_17716 = G__17728;
continue;
}
} else
{var node_17729 = cljs.core.first.call(null,seq__17709_17723__$1);goog.dom.classes.remove(node_17729,class$);
{
var G__17730 = cljs.core.next.call(null,seq__17709_17723__$1);
var G__17731 = null;
var G__17732 = 0;
var G__17733 = 0;
seq__17709_17713 = G__17730;
chunk__17710_17714 = G__17731;
count__17711_17715 = G__17732;
i__17712_17716 = G__17733;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__17738_17742 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17739_17743 = null;var count__17740_17744 = 0;var i__17741_17745 = 0;while(true){
if((i__17741_17745 < count__17740_17744))
{var node_17746 = cljs.core._nth.call(null,chunk__17739_17743,i__17741_17745);goog.dom.classes.toggle(node_17746,class$);
{
var G__17747 = seq__17738_17742;
var G__17748 = chunk__17739_17743;
var G__17749 = count__17740_17744;
var G__17750 = (i__17741_17745 + 1);
seq__17738_17742 = G__17747;
chunk__17739_17743 = G__17748;
count__17740_17744 = G__17749;
i__17741_17745 = G__17750;
continue;
}
} else
{var temp__4092__auto___17751 = cljs.core.seq.call(null,seq__17738_17742);if(temp__4092__auto___17751)
{var seq__17738_17752__$1 = temp__4092__auto___17751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17738_17752__$1))
{var c__4189__auto___17753 = cljs.core.chunk_first.call(null,seq__17738_17752__$1);{
var G__17754 = cljs.core.chunk_rest.call(null,seq__17738_17752__$1);
var G__17755 = c__4189__auto___17753;
var G__17756 = cljs.core.count.call(null,c__4189__auto___17753);
var G__17757 = 0;
seq__17738_17742 = G__17754;
chunk__17739_17743 = G__17755;
count__17740_17744 = G__17756;
i__17741_17745 = G__17757;
continue;
}
} else
{var node_17758 = cljs.core.first.call(null,seq__17738_17752__$1);goog.dom.classes.toggle(node_17758,class$);
{
var G__17759 = cljs.core.next.call(null,seq__17738_17752__$1);
var G__17760 = null;
var G__17761 = 0;
var G__17762 = 0;
seq__17738_17742 = G__17759;
chunk__17739_17743 = G__17760;
count__17740_17744 = G__17761;
i__17741_17745 = G__17762;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_17771__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__17767_17772 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17768_17773 = null;var count__17769_17774 = 0;var i__17770_17775 = 0;while(true){
if((i__17770_17775 < count__17769_17774))
{var node_17776 = cljs.core._nth.call(null,chunk__17768_17773,i__17770_17775);goog.dom.classes.set(node_17776,classes_17771__$1);
{
var G__17777 = seq__17767_17772;
var G__17778 = chunk__17768_17773;
var G__17779 = count__17769_17774;
var G__17780 = (i__17770_17775 + 1);
seq__17767_17772 = G__17777;
chunk__17768_17773 = G__17778;
count__17769_17774 = G__17779;
i__17770_17775 = G__17780;
continue;
}
} else
{var temp__4092__auto___17781 = cljs.core.seq.call(null,seq__17767_17772);if(temp__4092__auto___17781)
{var seq__17767_17782__$1 = temp__4092__auto___17781;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17767_17782__$1))
{var c__4189__auto___17783 = cljs.core.chunk_first.call(null,seq__17767_17782__$1);{
var G__17784 = cljs.core.chunk_rest.call(null,seq__17767_17782__$1);
var G__17785 = c__4189__auto___17783;
var G__17786 = cljs.core.count.call(null,c__4189__auto___17783);
var G__17787 = 0;
seq__17767_17772 = G__17784;
chunk__17768_17773 = G__17785;
count__17769_17774 = G__17786;
i__17770_17775 = G__17787;
continue;
}
} else
{var node_17788 = cljs.core.first.call(null,seq__17767_17782__$1);goog.dom.classes.set(node_17788,classes_17771__$1);
{
var G__17789 = cljs.core.next.call(null,seq__17767_17782__$1);
var G__17790 = null;
var G__17791 = 0;
var G__17792 = 0;
seq__17767_17772 = G__17789;
chunk__17768_17773 = G__17790;
count__17769_17774 = G__17791;
i__17770_17775 = G__17792;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__17797_17801 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17798_17802 = null;var count__17799_17803 = 0;var i__17800_17804 = 0;while(true){
if((i__17800_17804 < count__17799_17803))
{var node_17805 = cljs.core._nth.call(null,chunk__17798_17802,i__17800_17804);goog.dom.setTextContent(node_17805,value);
{
var G__17806 = seq__17797_17801;
var G__17807 = chunk__17798_17802;
var G__17808 = count__17799_17803;
var G__17809 = (i__17800_17804 + 1);
seq__17797_17801 = G__17806;
chunk__17798_17802 = G__17807;
count__17799_17803 = G__17808;
i__17800_17804 = G__17809;
continue;
}
} else
{var temp__4092__auto___17810 = cljs.core.seq.call(null,seq__17797_17801);if(temp__4092__auto___17810)
{var seq__17797_17811__$1 = temp__4092__auto___17810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17797_17811__$1))
{var c__4189__auto___17812 = cljs.core.chunk_first.call(null,seq__17797_17811__$1);{
var G__17813 = cljs.core.chunk_rest.call(null,seq__17797_17811__$1);
var G__17814 = c__4189__auto___17812;
var G__17815 = cljs.core.count.call(null,c__4189__auto___17812);
var G__17816 = 0;
seq__17797_17801 = G__17813;
chunk__17798_17802 = G__17814;
count__17799_17803 = G__17815;
i__17800_17804 = G__17816;
continue;
}
} else
{var node_17817 = cljs.core.first.call(null,seq__17797_17811__$1);goog.dom.setTextContent(node_17817,value);
{
var G__17818 = cljs.core.next.call(null,seq__17797_17811__$1);
var G__17819 = null;
var G__17820 = 0;
var G__17821 = 0;
seq__17797_17801 = G__17818;
chunk__17798_17802 = G__17819;
count__17799_17803 = G__17820;
i__17800_17804 = G__17821;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__17826_17830 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17827_17831 = null;var count__17828_17832 = 0;var i__17829_17833 = 0;while(true){
if((i__17829_17833 < count__17828_17832))
{var node_17834 = cljs.core._nth.call(null,chunk__17827_17831,i__17829_17833);goog.dom.forms.setValue(node_17834,value);
{
var G__17835 = seq__17826_17830;
var G__17836 = chunk__17827_17831;
var G__17837 = count__17828_17832;
var G__17838 = (i__17829_17833 + 1);
seq__17826_17830 = G__17835;
chunk__17827_17831 = G__17836;
count__17828_17832 = G__17837;
i__17829_17833 = G__17838;
continue;
}
} else
{var temp__4092__auto___17839 = cljs.core.seq.call(null,seq__17826_17830);if(temp__4092__auto___17839)
{var seq__17826_17840__$1 = temp__4092__auto___17839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17826_17840__$1))
{var c__4189__auto___17841 = cljs.core.chunk_first.call(null,seq__17826_17840__$1);{
var G__17842 = cljs.core.chunk_rest.call(null,seq__17826_17840__$1);
var G__17843 = c__4189__auto___17841;
var G__17844 = cljs.core.count.call(null,c__4189__auto___17841);
var G__17845 = 0;
seq__17826_17830 = G__17842;
chunk__17827_17831 = G__17843;
count__17828_17832 = G__17844;
i__17829_17833 = G__17845;
continue;
}
} else
{var node_17846 = cljs.core.first.call(null,seq__17826_17840__$1);goog.dom.forms.setValue(node_17846,value);
{
var G__17847 = cljs.core.next.call(null,seq__17826_17840__$1);
var G__17848 = null;
var G__17849 = 0;
var G__17850 = 0;
seq__17826_17830 = G__17847;
chunk__17827_17831 = G__17848;
count__17828_17832 = G__17849;
i__17829_17833 = G__17850;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3429__auto__ = allows_inner_html_QMARK_;if(and__3429__auto__)
{var and__3429__auto____$1 = (function (){var or__3441__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3429__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
})()))
{var value_17861 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__17857_17862 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__17858_17863 = null;var count__17859_17864 = 0;var i__17860_17865 = 0;while(true){
if((i__17860_17865 < count__17859_17864))
{var node_17866 = cljs.core._nth.call(null,chunk__17858_17863,i__17860_17865);node_17866.innerHTML = value_17861;
{
var G__17867 = seq__17857_17862;
var G__17868 = chunk__17858_17863;
var G__17869 = count__17859_17864;
var G__17870 = (i__17860_17865 + 1);
seq__17857_17862 = G__17867;
chunk__17858_17863 = G__17868;
count__17859_17864 = G__17869;
i__17860_17865 = G__17870;
continue;
}
} else
{var temp__4092__auto___17871 = cljs.core.seq.call(null,seq__17857_17862);if(temp__4092__auto___17871)
{var seq__17857_17872__$1 = temp__4092__auto___17871;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17857_17872__$1))
{var c__4189__auto___17873 = cljs.core.chunk_first.call(null,seq__17857_17872__$1);{
var G__17874 = cljs.core.chunk_rest.call(null,seq__17857_17872__$1);
var G__17875 = c__4189__auto___17873;
var G__17876 = cljs.core.count.call(null,c__4189__auto___17873);
var G__17877 = 0;
seq__17857_17862 = G__17874;
chunk__17858_17863 = G__17875;
count__17859_17864 = G__17876;
i__17860_17865 = G__17877;
continue;
}
} else
{var node_17878 = cljs.core.first.call(null,seq__17857_17872__$1);node_17878.innerHTML = value_17861;
{
var G__17879 = cljs.core.next.call(null,seq__17857_17872__$1);
var G__17880 = null;
var G__17881 = 0;
var G__17882 = 0;
seq__17857_17862 = G__17879;
chunk__17858_17863 = G__17880;
count__17859_17864 = G__17881;
i__17860_17865 = G__17882;
continue;
}
}
} else
{}
}
break;
}
}catch (e17856){if((e17856 instanceof Error))
{var e_17883 = e17856;domina.replace_children_BANG_.call(null,content,value_17861);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e17856;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3429__auto__ = bubble;if(cljs.core.truth_(and__3429__auto__))
{return (value == null);
} else
{return and__3429__auto__;
}
})()))
{var temp__4092__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4092__auto__))
{var parent = temp__4092__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3441__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3441__auto__))
{return or__3441__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__17890_17894 = cljs.core.seq.call(null,children);var chunk__17891_17895 = null;var count__17892_17896 = 0;var i__17893_17897 = 0;while(true){
if((i__17893_17897 < count__17892_17896))
{var child_17898 = cljs.core._nth.call(null,chunk__17891_17895,i__17893_17897);frag.appendChild(child_17898);
{
var G__17899 = seq__17890_17894;
var G__17900 = chunk__17891_17895;
var G__17901 = count__17892_17896;
var G__17902 = (i__17893_17897 + 1);
seq__17890_17894 = G__17899;
chunk__17891_17895 = G__17900;
count__17892_17896 = G__17901;
i__17893_17897 = G__17902;
continue;
}
} else
{var temp__4092__auto___17903 = cljs.core.seq.call(null,seq__17890_17894);if(temp__4092__auto___17903)
{var seq__17890_17904__$1 = temp__4092__auto___17903;if(cljs.core.chunked_seq_QMARK_.call(null,seq__17890_17904__$1))
{var c__4189__auto___17905 = cljs.core.chunk_first.call(null,seq__17890_17904__$1);{
var G__17906 = cljs.core.chunk_rest.call(null,seq__17890_17904__$1);
var G__17907 = c__4189__auto___17905;
var G__17908 = cljs.core.count.call(null,c__4189__auto___17905);
var G__17909 = 0;
seq__17890_17894 = G__17906;
chunk__17891_17895 = G__17907;
count__17892_17896 = G__17908;
i__17893_17897 = G__17909;
continue;
}
} else
{var child_17910 = cljs.core.first.call(null,seq__17890_17904__$1);frag.appendChild(child_17910);
{
var G__17911 = cljs.core.next.call(null,seq__17890_17904__$1);
var G__17912 = null;
var G__17913 = 0;
var G__17914 = 0;
seq__17890_17894 = G__17911;
chunk__17891_17895 = G__17912;
count__17892_17896 = G__17913;
i__17893_17897 = G__17914;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - 1),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__17884_SHARP_,p2__17885_SHARP_){return f.call(null,p1__17884_SHARP_,p2__17885_SHARP_);
}),cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,0);
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,0);
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + 1)));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3429__auto__ = obj;if(cljs.core.truth_(and__3429__auto__))
{var and__3429__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3429__auto____$1)
{return obj.length;
} else
{return and__3429__auto____$1;
}
} else
{return and__3429__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__17916 = list_thing;if(G__17916)
{var bit__4091__auto__ = (G__17916.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17916.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17916.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17916);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17916);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__17917 = content;if(G__17917)
{var bit__4091__auto__ = (G__17917.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17917.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17917.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17917);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17917);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__17918 = content;if(G__17918)
{var bit__4091__auto__ = (G__17918.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__17918.cljs$core$ISeqable$))
{return true;
} else
{if((!G__17918.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17918);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__17918);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item(0);
} else
{if(new cljs.core.Keyword(null,"default","default",2558708147))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}

//# sourceMappingURL=domina.js.map
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
var opt_wrapper_28498 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_28499 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_28500 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_28499,table_section_wrapper_28499,opt_wrapper_28498,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_28500,table_section_wrapper_28499,cell_wrapper_28500,opt_wrapper_28498,table_section_wrapper_28499,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_28499]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3429__auto__ = div.firstChild;if(cljs.core.truth_(and__3429__auto__))
{return div.firstChild.childNodes;
} else
{return and__3429__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__28505 = cljs.core.seq.call(null,tbody);var chunk__28506 = null;var count__28507 = 0;var i__28508 = 0;while(true){
if((i__28508 < count__28507))
{var child = cljs.core._nth.call(null,chunk__28506,i__28508);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28509 = seq__28505;
var G__28510 = chunk__28506;
var G__28511 = count__28507;
var G__28512 = (i__28508 + 1);
seq__28505 = G__28509;
chunk__28506 = G__28510;
count__28507 = G__28511;
i__28508 = G__28512;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__28505);if(temp__4092__auto__)
{var seq__28505__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28505__$1))
{var c__4189__auto__ = cljs.core.chunk_first.call(null,seq__28505__$1);{
var G__28513 = cljs.core.chunk_rest.call(null,seq__28505__$1);
var G__28514 = c__4189__auto__;
var G__28515 = cljs.core.count.call(null,c__4189__auto__);
var G__28516 = 0;
seq__28505 = G__28513;
chunk__28506 = G__28514;
count__28507 = G__28515;
i__28508 = G__28516;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__28505__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__28517 = cljs.core.next.call(null,seq__28505__$1);
var G__28518 = null;
var G__28519 = 0;
var G__28520 = 0;
seq__28505 = G__28517;
chunk__28506 = G__28518;
count__28507 = G__28519;
i__28508 = G__28520;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__28522 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__28522,0,null);var start_wrap = cljs.core.nth.call(null,vec__28522,1,null);var end_wrap = cljs.core.nth.call(null,vec__28522,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__28523 = wrapper.lastChild;
var G__28524 = (level - 1);
wrapper = G__28523;
level = G__28524;
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
domina.DomContent = (function (){var obj28526 = {};return obj28526;
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
log_debug.cljs$lang$applyTo = (function (arglist__28527){
var mesg = cljs.core.seq(arglist__28527);
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
log.cljs$lang$applyTo = (function (arglist__28528){
var mesg = cljs.core.seq(arglist__28528);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__28529){
var contents = cljs.core.seq(arglist__28529);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__28530_SHARP_){return p1__28530_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__28531_SHARP_,p2__28532_SHARP_){return goog.dom.insertChildAt(p1__28531_SHARP_,p2__28532_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28534_SHARP_,p2__28533_SHARP_){return goog.dom.insertSiblingBefore(p2__28533_SHARP_,p1__28534_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__28536_SHARP_,p2__28535_SHARP_){return goog.dom.insertSiblingAfter(p2__28535_SHARP_,p1__28536_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__28538_SHARP_,p2__28537_SHARP_){return goog.dom.replaceNode(p2__28537_SHARP_,p1__28538_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__28543_28547 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28544_28548 = null;var count__28545_28549 = 0;var i__28546_28550 = 0;while(true){
if((i__28546_28550 < count__28545_28549))
{var n_28551 = cljs.core._nth.call(null,chunk__28544_28548,i__28546_28550);goog.style.setStyle(n_28551,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28552 = seq__28543_28547;
var G__28553 = chunk__28544_28548;
var G__28554 = count__28545_28549;
var G__28555 = (i__28546_28550 + 1);
seq__28543_28547 = G__28552;
chunk__28544_28548 = G__28553;
count__28545_28549 = G__28554;
i__28546_28550 = G__28555;
continue;
}
} else
{var temp__4092__auto___28556 = cljs.core.seq.call(null,seq__28543_28547);if(temp__4092__auto___28556)
{var seq__28543_28557__$1 = temp__4092__auto___28556;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28543_28557__$1))
{var c__4189__auto___28558 = cljs.core.chunk_first.call(null,seq__28543_28557__$1);{
var G__28559 = cljs.core.chunk_rest.call(null,seq__28543_28557__$1);
var G__28560 = c__4189__auto___28558;
var G__28561 = cljs.core.count.call(null,c__4189__auto___28558);
var G__28562 = 0;
seq__28543_28547 = G__28559;
chunk__28544_28548 = G__28560;
count__28545_28549 = G__28561;
i__28546_28550 = G__28562;
continue;
}
} else
{var n_28563 = cljs.core.first.call(null,seq__28543_28557__$1);goog.style.setStyle(n_28563,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28564 = cljs.core.next.call(null,seq__28543_28557__$1);
var G__28565 = null;
var G__28566 = 0;
var G__28567 = 0;
seq__28543_28547 = G__28564;
chunk__28544_28548 = G__28565;
count__28545_28549 = G__28566;
i__28546_28550 = G__28567;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__28568){
var content = cljs.core.first(arglist__28568);
arglist__28568 = cljs.core.next(arglist__28568);
var name = cljs.core.first(arglist__28568);
var value = cljs.core.rest(arglist__28568);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__28573_28577 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28574_28578 = null;var count__28575_28579 = 0;var i__28576_28580 = 0;while(true){
if((i__28576_28580 < count__28575_28579))
{var n_28581 = cljs.core._nth.call(null,chunk__28574_28578,i__28576_28580);n_28581.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28582 = seq__28573_28577;
var G__28583 = chunk__28574_28578;
var G__28584 = count__28575_28579;
var G__28585 = (i__28576_28580 + 1);
seq__28573_28577 = G__28582;
chunk__28574_28578 = G__28583;
count__28575_28579 = G__28584;
i__28576_28580 = G__28585;
continue;
}
} else
{var temp__4092__auto___28586 = cljs.core.seq.call(null,seq__28573_28577);if(temp__4092__auto___28586)
{var seq__28573_28587__$1 = temp__4092__auto___28586;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28573_28587__$1))
{var c__4189__auto___28588 = cljs.core.chunk_first.call(null,seq__28573_28587__$1);{
var G__28589 = cljs.core.chunk_rest.call(null,seq__28573_28587__$1);
var G__28590 = c__4189__auto___28588;
var G__28591 = cljs.core.count.call(null,c__4189__auto___28588);
var G__28592 = 0;
seq__28573_28577 = G__28589;
chunk__28574_28578 = G__28590;
count__28575_28579 = G__28591;
i__28576_28580 = G__28592;
continue;
}
} else
{var n_28593 = cljs.core.first.call(null,seq__28573_28587__$1);n_28593.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__28594 = cljs.core.next.call(null,seq__28573_28587__$1);
var G__28595 = null;
var G__28596 = 0;
var G__28597 = 0;
seq__28573_28577 = G__28594;
chunk__28574_28578 = G__28595;
count__28575_28579 = G__28596;
i__28576_28580 = G__28597;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__28598){
var content = cljs.core.first(arglist__28598);
arglist__28598 = cljs.core.next(arglist__28598);
var name = cljs.core.first(arglist__28598);
var value = cljs.core.rest(arglist__28598);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__28603_28607 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28604_28608 = null;var count__28605_28609 = 0;var i__28606_28610 = 0;while(true){
if((i__28606_28610 < count__28605_28609))
{var n_28611 = cljs.core._nth.call(null,chunk__28604_28608,i__28606_28610);n_28611.removeAttribute(cljs.core.name.call(null,name));
{
var G__28612 = seq__28603_28607;
var G__28613 = chunk__28604_28608;
var G__28614 = count__28605_28609;
var G__28615 = (i__28606_28610 + 1);
seq__28603_28607 = G__28612;
chunk__28604_28608 = G__28613;
count__28605_28609 = G__28614;
i__28606_28610 = G__28615;
continue;
}
} else
{var temp__4092__auto___28616 = cljs.core.seq.call(null,seq__28603_28607);if(temp__4092__auto___28616)
{var seq__28603_28617__$1 = temp__4092__auto___28616;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28603_28617__$1))
{var c__4189__auto___28618 = cljs.core.chunk_first.call(null,seq__28603_28617__$1);{
var G__28619 = cljs.core.chunk_rest.call(null,seq__28603_28617__$1);
var G__28620 = c__4189__auto___28618;
var G__28621 = cljs.core.count.call(null,c__4189__auto___28618);
var G__28622 = 0;
seq__28603_28607 = G__28619;
chunk__28604_28608 = G__28620;
count__28605_28609 = G__28621;
i__28606_28610 = G__28622;
continue;
}
} else
{var n_28623 = cljs.core.first.call(null,seq__28603_28617__$1);n_28623.removeAttribute(cljs.core.name.call(null,name));
{
var G__28624 = cljs.core.next.call(null,seq__28603_28617__$1);
var G__28625 = null;
var G__28626 = 0;
var G__28627 = 0;
seq__28603_28607 = G__28624;
chunk__28604_28608 = G__28625;
count__28605_28609 = G__28626;
i__28606_28610 = G__28627;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__28629 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__28629,0,null);var v = cljs.core.nth.call(null,vec__28629,1,null);if(cljs.core.truth_((function (){var and__3429__auto__ = k;if(cljs.core.truth_(and__3429__auto__))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__28630_SHARP_){var attr = attrs__$1.item(p1__28630_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__28637_28643 = cljs.core.seq.call(null,styles);var chunk__28638_28644 = null;var count__28639_28645 = 0;var i__28640_28646 = 0;while(true){
if((i__28640_28646 < count__28639_28645))
{var vec__28641_28647 = cljs.core._nth.call(null,chunk__28638_28644,i__28640_28646);var name_28648 = cljs.core.nth.call(null,vec__28641_28647,0,null);var value_28649 = cljs.core.nth.call(null,vec__28641_28647,1,null);domina.set_style_BANG_.call(null,content,name_28648,value_28649);
{
var G__28650 = seq__28637_28643;
var G__28651 = chunk__28638_28644;
var G__28652 = count__28639_28645;
var G__28653 = (i__28640_28646 + 1);
seq__28637_28643 = G__28650;
chunk__28638_28644 = G__28651;
count__28639_28645 = G__28652;
i__28640_28646 = G__28653;
continue;
}
} else
{var temp__4092__auto___28654 = cljs.core.seq.call(null,seq__28637_28643);if(temp__4092__auto___28654)
{var seq__28637_28655__$1 = temp__4092__auto___28654;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28637_28655__$1))
{var c__4189__auto___28656 = cljs.core.chunk_first.call(null,seq__28637_28655__$1);{
var G__28657 = cljs.core.chunk_rest.call(null,seq__28637_28655__$1);
var G__28658 = c__4189__auto___28656;
var G__28659 = cljs.core.count.call(null,c__4189__auto___28656);
var G__28660 = 0;
seq__28637_28643 = G__28657;
chunk__28638_28644 = G__28658;
count__28639_28645 = G__28659;
i__28640_28646 = G__28660;
continue;
}
} else
{var vec__28642_28661 = cljs.core.first.call(null,seq__28637_28655__$1);var name_28662 = cljs.core.nth.call(null,vec__28642_28661,0,null);var value_28663 = cljs.core.nth.call(null,vec__28642_28661,1,null);domina.set_style_BANG_.call(null,content,name_28662,value_28663);
{
var G__28664 = cljs.core.next.call(null,seq__28637_28655__$1);
var G__28665 = null;
var G__28666 = 0;
var G__28667 = 0;
seq__28637_28643 = G__28664;
chunk__28638_28644 = G__28665;
count__28639_28645 = G__28666;
i__28640_28646 = G__28667;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__28674_28680 = cljs.core.seq.call(null,attrs);var chunk__28675_28681 = null;var count__28676_28682 = 0;var i__28677_28683 = 0;while(true){
if((i__28677_28683 < count__28676_28682))
{var vec__28678_28684 = cljs.core._nth.call(null,chunk__28675_28681,i__28677_28683);var name_28685 = cljs.core.nth.call(null,vec__28678_28684,0,null);var value_28686 = cljs.core.nth.call(null,vec__28678_28684,1,null);domina.set_attr_BANG_.call(null,content,name_28685,value_28686);
{
var G__28687 = seq__28674_28680;
var G__28688 = chunk__28675_28681;
var G__28689 = count__28676_28682;
var G__28690 = (i__28677_28683 + 1);
seq__28674_28680 = G__28687;
chunk__28675_28681 = G__28688;
count__28676_28682 = G__28689;
i__28677_28683 = G__28690;
continue;
}
} else
{var temp__4092__auto___28691 = cljs.core.seq.call(null,seq__28674_28680);if(temp__4092__auto___28691)
{var seq__28674_28692__$1 = temp__4092__auto___28691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28674_28692__$1))
{var c__4189__auto___28693 = cljs.core.chunk_first.call(null,seq__28674_28692__$1);{
var G__28694 = cljs.core.chunk_rest.call(null,seq__28674_28692__$1);
var G__28695 = c__4189__auto___28693;
var G__28696 = cljs.core.count.call(null,c__4189__auto___28693);
var G__28697 = 0;
seq__28674_28680 = G__28694;
chunk__28675_28681 = G__28695;
count__28676_28682 = G__28696;
i__28677_28683 = G__28697;
continue;
}
} else
{var vec__28679_28698 = cljs.core.first.call(null,seq__28674_28692__$1);var name_28699 = cljs.core.nth.call(null,vec__28679_28698,0,null);var value_28700 = cljs.core.nth.call(null,vec__28679_28698,1,null);domina.set_attr_BANG_.call(null,content,name_28699,value_28700);
{
var G__28701 = cljs.core.next.call(null,seq__28674_28692__$1);
var G__28702 = null;
var G__28703 = 0;
var G__28704 = 0;
seq__28674_28680 = G__28701;
chunk__28675_28681 = G__28702;
count__28676_28682 = G__28703;
i__28677_28683 = G__28704;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__28709_28713 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28710_28714 = null;var count__28711_28715 = 0;var i__28712_28716 = 0;while(true){
if((i__28712_28716 < count__28711_28715))
{var node_28717 = cljs.core._nth.call(null,chunk__28710_28714,i__28712_28716);goog.dom.classes.add(node_28717,class$);
{
var G__28718 = seq__28709_28713;
var G__28719 = chunk__28710_28714;
var G__28720 = count__28711_28715;
var G__28721 = (i__28712_28716 + 1);
seq__28709_28713 = G__28718;
chunk__28710_28714 = G__28719;
count__28711_28715 = G__28720;
i__28712_28716 = G__28721;
continue;
}
} else
{var temp__4092__auto___28722 = cljs.core.seq.call(null,seq__28709_28713);if(temp__4092__auto___28722)
{var seq__28709_28723__$1 = temp__4092__auto___28722;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28709_28723__$1))
{var c__4189__auto___28724 = cljs.core.chunk_first.call(null,seq__28709_28723__$1);{
var G__28725 = cljs.core.chunk_rest.call(null,seq__28709_28723__$1);
var G__28726 = c__4189__auto___28724;
var G__28727 = cljs.core.count.call(null,c__4189__auto___28724);
var G__28728 = 0;
seq__28709_28713 = G__28725;
chunk__28710_28714 = G__28726;
count__28711_28715 = G__28727;
i__28712_28716 = G__28728;
continue;
}
} else
{var node_28729 = cljs.core.first.call(null,seq__28709_28723__$1);goog.dom.classes.add(node_28729,class$);
{
var G__28730 = cljs.core.next.call(null,seq__28709_28723__$1);
var G__28731 = null;
var G__28732 = 0;
var G__28733 = 0;
seq__28709_28713 = G__28730;
chunk__28710_28714 = G__28731;
count__28711_28715 = G__28732;
i__28712_28716 = G__28733;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__28738_28742 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28739_28743 = null;var count__28740_28744 = 0;var i__28741_28745 = 0;while(true){
if((i__28741_28745 < count__28740_28744))
{var node_28746 = cljs.core._nth.call(null,chunk__28739_28743,i__28741_28745);goog.dom.classes.remove(node_28746,class$);
{
var G__28747 = seq__28738_28742;
var G__28748 = chunk__28739_28743;
var G__28749 = count__28740_28744;
var G__28750 = (i__28741_28745 + 1);
seq__28738_28742 = G__28747;
chunk__28739_28743 = G__28748;
count__28740_28744 = G__28749;
i__28741_28745 = G__28750;
continue;
}
} else
{var temp__4092__auto___28751 = cljs.core.seq.call(null,seq__28738_28742);if(temp__4092__auto___28751)
{var seq__28738_28752__$1 = temp__4092__auto___28751;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28738_28752__$1))
{var c__4189__auto___28753 = cljs.core.chunk_first.call(null,seq__28738_28752__$1);{
var G__28754 = cljs.core.chunk_rest.call(null,seq__28738_28752__$1);
var G__28755 = c__4189__auto___28753;
var G__28756 = cljs.core.count.call(null,c__4189__auto___28753);
var G__28757 = 0;
seq__28738_28742 = G__28754;
chunk__28739_28743 = G__28755;
count__28740_28744 = G__28756;
i__28741_28745 = G__28757;
continue;
}
} else
{var node_28758 = cljs.core.first.call(null,seq__28738_28752__$1);goog.dom.classes.remove(node_28758,class$);
{
var G__28759 = cljs.core.next.call(null,seq__28738_28752__$1);
var G__28760 = null;
var G__28761 = 0;
var G__28762 = 0;
seq__28738_28742 = G__28759;
chunk__28739_28743 = G__28760;
count__28740_28744 = G__28761;
i__28741_28745 = G__28762;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__28767_28771 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28768_28772 = null;var count__28769_28773 = 0;var i__28770_28774 = 0;while(true){
if((i__28770_28774 < count__28769_28773))
{var node_28775 = cljs.core._nth.call(null,chunk__28768_28772,i__28770_28774);goog.dom.classes.toggle(node_28775,class$);
{
var G__28776 = seq__28767_28771;
var G__28777 = chunk__28768_28772;
var G__28778 = count__28769_28773;
var G__28779 = (i__28770_28774 + 1);
seq__28767_28771 = G__28776;
chunk__28768_28772 = G__28777;
count__28769_28773 = G__28778;
i__28770_28774 = G__28779;
continue;
}
} else
{var temp__4092__auto___28780 = cljs.core.seq.call(null,seq__28767_28771);if(temp__4092__auto___28780)
{var seq__28767_28781__$1 = temp__4092__auto___28780;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28767_28781__$1))
{var c__4189__auto___28782 = cljs.core.chunk_first.call(null,seq__28767_28781__$1);{
var G__28783 = cljs.core.chunk_rest.call(null,seq__28767_28781__$1);
var G__28784 = c__4189__auto___28782;
var G__28785 = cljs.core.count.call(null,c__4189__auto___28782);
var G__28786 = 0;
seq__28767_28771 = G__28783;
chunk__28768_28772 = G__28784;
count__28769_28773 = G__28785;
i__28770_28774 = G__28786;
continue;
}
} else
{var node_28787 = cljs.core.first.call(null,seq__28767_28781__$1);goog.dom.classes.toggle(node_28787,class$);
{
var G__28788 = cljs.core.next.call(null,seq__28767_28781__$1);
var G__28789 = null;
var G__28790 = 0;
var G__28791 = 0;
seq__28767_28771 = G__28788;
chunk__28768_28772 = G__28789;
count__28769_28773 = G__28790;
i__28770_28774 = G__28791;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_28800__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__28796_28801 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28797_28802 = null;var count__28798_28803 = 0;var i__28799_28804 = 0;while(true){
if((i__28799_28804 < count__28798_28803))
{var node_28805 = cljs.core._nth.call(null,chunk__28797_28802,i__28799_28804);goog.dom.classes.set(node_28805,classes_28800__$1);
{
var G__28806 = seq__28796_28801;
var G__28807 = chunk__28797_28802;
var G__28808 = count__28798_28803;
var G__28809 = (i__28799_28804 + 1);
seq__28796_28801 = G__28806;
chunk__28797_28802 = G__28807;
count__28798_28803 = G__28808;
i__28799_28804 = G__28809;
continue;
}
} else
{var temp__4092__auto___28810 = cljs.core.seq.call(null,seq__28796_28801);if(temp__4092__auto___28810)
{var seq__28796_28811__$1 = temp__4092__auto___28810;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28796_28811__$1))
{var c__4189__auto___28812 = cljs.core.chunk_first.call(null,seq__28796_28811__$1);{
var G__28813 = cljs.core.chunk_rest.call(null,seq__28796_28811__$1);
var G__28814 = c__4189__auto___28812;
var G__28815 = cljs.core.count.call(null,c__4189__auto___28812);
var G__28816 = 0;
seq__28796_28801 = G__28813;
chunk__28797_28802 = G__28814;
count__28798_28803 = G__28815;
i__28799_28804 = G__28816;
continue;
}
} else
{var node_28817 = cljs.core.first.call(null,seq__28796_28811__$1);goog.dom.classes.set(node_28817,classes_28800__$1);
{
var G__28818 = cljs.core.next.call(null,seq__28796_28811__$1);
var G__28819 = null;
var G__28820 = 0;
var G__28821 = 0;
seq__28796_28801 = G__28818;
chunk__28797_28802 = G__28819;
count__28798_28803 = G__28820;
i__28799_28804 = G__28821;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__28826_28830 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28827_28831 = null;var count__28828_28832 = 0;var i__28829_28833 = 0;while(true){
if((i__28829_28833 < count__28828_28832))
{var node_28834 = cljs.core._nth.call(null,chunk__28827_28831,i__28829_28833);goog.dom.setTextContent(node_28834,value);
{
var G__28835 = seq__28826_28830;
var G__28836 = chunk__28827_28831;
var G__28837 = count__28828_28832;
var G__28838 = (i__28829_28833 + 1);
seq__28826_28830 = G__28835;
chunk__28827_28831 = G__28836;
count__28828_28832 = G__28837;
i__28829_28833 = G__28838;
continue;
}
} else
{var temp__4092__auto___28839 = cljs.core.seq.call(null,seq__28826_28830);if(temp__4092__auto___28839)
{var seq__28826_28840__$1 = temp__4092__auto___28839;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28826_28840__$1))
{var c__4189__auto___28841 = cljs.core.chunk_first.call(null,seq__28826_28840__$1);{
var G__28842 = cljs.core.chunk_rest.call(null,seq__28826_28840__$1);
var G__28843 = c__4189__auto___28841;
var G__28844 = cljs.core.count.call(null,c__4189__auto___28841);
var G__28845 = 0;
seq__28826_28830 = G__28842;
chunk__28827_28831 = G__28843;
count__28828_28832 = G__28844;
i__28829_28833 = G__28845;
continue;
}
} else
{var node_28846 = cljs.core.first.call(null,seq__28826_28840__$1);goog.dom.setTextContent(node_28846,value);
{
var G__28847 = cljs.core.next.call(null,seq__28826_28840__$1);
var G__28848 = null;
var G__28849 = 0;
var G__28850 = 0;
seq__28826_28830 = G__28847;
chunk__28827_28831 = G__28848;
count__28828_28832 = G__28849;
i__28829_28833 = G__28850;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__28855_28859 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28856_28860 = null;var count__28857_28861 = 0;var i__28858_28862 = 0;while(true){
if((i__28858_28862 < count__28857_28861))
{var node_28863 = cljs.core._nth.call(null,chunk__28856_28860,i__28858_28862);goog.dom.forms.setValue(node_28863,value);
{
var G__28864 = seq__28855_28859;
var G__28865 = chunk__28856_28860;
var G__28866 = count__28857_28861;
var G__28867 = (i__28858_28862 + 1);
seq__28855_28859 = G__28864;
chunk__28856_28860 = G__28865;
count__28857_28861 = G__28866;
i__28858_28862 = G__28867;
continue;
}
} else
{var temp__4092__auto___28868 = cljs.core.seq.call(null,seq__28855_28859);if(temp__4092__auto___28868)
{var seq__28855_28869__$1 = temp__4092__auto___28868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28855_28869__$1))
{var c__4189__auto___28870 = cljs.core.chunk_first.call(null,seq__28855_28869__$1);{
var G__28871 = cljs.core.chunk_rest.call(null,seq__28855_28869__$1);
var G__28872 = c__4189__auto___28870;
var G__28873 = cljs.core.count.call(null,c__4189__auto___28870);
var G__28874 = 0;
seq__28855_28859 = G__28871;
chunk__28856_28860 = G__28872;
count__28857_28861 = G__28873;
i__28858_28862 = G__28874;
continue;
}
} else
{var node_28875 = cljs.core.first.call(null,seq__28855_28869__$1);goog.dom.forms.setValue(node_28875,value);
{
var G__28876 = cljs.core.next.call(null,seq__28855_28869__$1);
var G__28877 = null;
var G__28878 = 0;
var G__28879 = 0;
seq__28855_28859 = G__28876;
chunk__28856_28860 = G__28877;
count__28857_28861 = G__28878;
i__28858_28862 = G__28879;
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
{var value_28890 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__28886_28891 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__28887_28892 = null;var count__28888_28893 = 0;var i__28889_28894 = 0;while(true){
if((i__28889_28894 < count__28888_28893))
{var node_28895 = cljs.core._nth.call(null,chunk__28887_28892,i__28889_28894);node_28895.innerHTML = value_28890;
{
var G__28896 = seq__28886_28891;
var G__28897 = chunk__28887_28892;
var G__28898 = count__28888_28893;
var G__28899 = (i__28889_28894 + 1);
seq__28886_28891 = G__28896;
chunk__28887_28892 = G__28897;
count__28888_28893 = G__28898;
i__28889_28894 = G__28899;
continue;
}
} else
{var temp__4092__auto___28900 = cljs.core.seq.call(null,seq__28886_28891);if(temp__4092__auto___28900)
{var seq__28886_28901__$1 = temp__4092__auto___28900;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28886_28901__$1))
{var c__4189__auto___28902 = cljs.core.chunk_first.call(null,seq__28886_28901__$1);{
var G__28903 = cljs.core.chunk_rest.call(null,seq__28886_28901__$1);
var G__28904 = c__4189__auto___28902;
var G__28905 = cljs.core.count.call(null,c__4189__auto___28902);
var G__28906 = 0;
seq__28886_28891 = G__28903;
chunk__28887_28892 = G__28904;
count__28888_28893 = G__28905;
i__28889_28894 = G__28906;
continue;
}
} else
{var node_28907 = cljs.core.first.call(null,seq__28886_28901__$1);node_28907.innerHTML = value_28890;
{
var G__28908 = cljs.core.next.call(null,seq__28886_28901__$1);
var G__28909 = null;
var G__28910 = 0;
var G__28911 = 0;
seq__28886_28891 = G__28908;
chunk__28887_28892 = G__28909;
count__28888_28893 = G__28910;
i__28889_28894 = G__28911;
continue;
}
}
} else
{}
}
break;
}
}catch (e28885){if((e28885 instanceof Error))
{var e_28912 = e28885;domina.replace_children_BANG_.call(null,content,value_28890);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e28885;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__28919_28923 = cljs.core.seq.call(null,children);var chunk__28920_28924 = null;var count__28921_28925 = 0;var i__28922_28926 = 0;while(true){
if((i__28922_28926 < count__28921_28925))
{var child_28927 = cljs.core._nth.call(null,chunk__28920_28924,i__28922_28926);frag.appendChild(child_28927);
{
var G__28928 = seq__28919_28923;
var G__28929 = chunk__28920_28924;
var G__28930 = count__28921_28925;
var G__28931 = (i__28922_28926 + 1);
seq__28919_28923 = G__28928;
chunk__28920_28924 = G__28929;
count__28921_28925 = G__28930;
i__28922_28926 = G__28931;
continue;
}
} else
{var temp__4092__auto___28932 = cljs.core.seq.call(null,seq__28919_28923);if(temp__4092__auto___28932)
{var seq__28919_28933__$1 = temp__4092__auto___28932;if(cljs.core.chunked_seq_QMARK_.call(null,seq__28919_28933__$1))
{var c__4189__auto___28934 = cljs.core.chunk_first.call(null,seq__28919_28933__$1);{
var G__28935 = cljs.core.chunk_rest.call(null,seq__28919_28933__$1);
var G__28936 = c__4189__auto___28934;
var G__28937 = cljs.core.count.call(null,c__4189__auto___28934);
var G__28938 = 0;
seq__28919_28923 = G__28935;
chunk__28920_28924 = G__28936;
count__28921_28925 = G__28937;
i__28922_28926 = G__28938;
continue;
}
} else
{var child_28939 = cljs.core.first.call(null,seq__28919_28933__$1);frag.appendChild(child_28939);
{
var G__28940 = cljs.core.next.call(null,seq__28919_28933__$1);
var G__28941 = null;
var G__28942 = 0;
var G__28943 = 0;
seq__28919_28923 = G__28940;
chunk__28920_28924 = G__28941;
count__28921_28925 = G__28942;
i__28922_28926 = G__28943;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__28913_SHARP_,p2__28914_SHARP_){return f.call(null,p1__28913_SHARP_,p2__28914_SHARP_);
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
{if((function (){var G__28945 = list_thing;if(G__28945)
{var bit__4091__auto__ = (G__28945.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28945.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28945.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28945);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28945);
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
{if((function (){var G__28946 = content;if(G__28946)
{var bit__4091__auto__ = (G__28946.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28946.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28946.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28946);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28946);
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
{if((function (){var G__28947 = content;if(G__28947)
{var bit__4091__auto__ = (G__28947.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__4091__auto__) || (G__28947.cljs$core$ISeqable$))
{return true;
} else
{if((!G__28947.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28947);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__28947);
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
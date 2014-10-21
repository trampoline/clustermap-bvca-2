// Compiled by ClojureScript 0.0-2356
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_25549 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_25550 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_25551 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_25551,opt_wrapper_25549,table_section_wrapper_25550,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_25549,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_25550,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_25550,cell_wrapper_25551,table_section_wrapper_25550,table_section_wrapper_25550]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3625__auto__ = div.firstChild;if(cljs.core.truth_(and__3625__auto__))
{return div.firstChild.childNodes;
} else
{return and__3625__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));var seq__25556 = cljs.core.seq.call(null,tbody);var chunk__25557 = null;var count__25558 = (0);var i__25559 = (0);while(true){
if((i__25559 < count__25558))
{var child = cljs.core._nth.call(null,chunk__25557,i__25559);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25560 = seq__25556;
var G__25561 = chunk__25557;
var G__25562 = count__25558;
var G__25563 = (i__25559 + (1));
seq__25556 = G__25560;
chunk__25557 = G__25561;
count__25558 = G__25562;
i__25559 = G__25563;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__25556);if(temp__4126__auto__)
{var seq__25556__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25556__$1))
{var c__4406__auto__ = cljs.core.chunk_first.call(null,seq__25556__$1);{
var G__25564 = cljs.core.chunk_rest.call(null,seq__25556__$1);
var G__25565 = c__4406__auto__;
var G__25566 = cljs.core.count.call(null,c__4406__auto__);
var G__25567 = (0);
seq__25556 = G__25564;
chunk__25557 = G__25565;
count__25558 = G__25566;
i__25559 = G__25567;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__25556__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__25568 = cljs.core.next.call(null,seq__25556__$1);
var G__25569 = null;
var G__25570 = (0);
var G__25571 = (0);
seq__25556 = G__25568;
chunk__25557 = G__25569;
count__25558 = G__25570;
i__25559 = G__25571;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__25573 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__25573,(0),null);var start_wrap = cljs.core.nth.call(null,vec__25573,(1),null);var end_wrap = cljs.core.nth.call(null,vec__25573,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__25574 = wrapper.lastChild;
var G__25575 = (level - (1));
wrapper = G__25574;
level = G__25575;
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
if(cljs.core.truth_((function (){var and__3625__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3625__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3625__auto__;
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
domina.DomContent = (function (){var obj25577 = {};return obj25577;
})();
domina.nodes = (function nodes(content){if((function (){var and__3625__auto__ = content;if(and__3625__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3625__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4273__auto__ = (((content == null))?null:content);return (function (){var or__3637__auto__ = (domina.nodes[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.nodes["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3625__auto__ = nodeseq;if(and__3625__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3625__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4273__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3637__auto__ = (domina.single_node[goog.typeOf(x__4273__auto__)]);if(or__3637__auto__)
{return or__3637__auto__;
} else
{var or__3637__auto____$1 = (domina.single_node["_"]);if(or__3637__auto____$1)
{return or__3637__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3625__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3625__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3625__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__25578){
var mesg = cljs.core.seq(arglist__25578);
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
log.cljs$lang$applyTo = (function (arglist__25579){
var mesg = cljs.core.seq(arglist__25579);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__25580){
var contents = cljs.core.seq(arglist__25580);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__25581_SHARP_){return p1__25581_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__25582_SHARP_,p2__25583_SHARP_){return goog.dom.insertChildAt(p1__25582_SHARP_,p2__25583_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__25585_SHARP_,p2__25584_SHARP_){return goog.dom.insertSiblingBefore(p2__25584_SHARP_,p1__25585_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__25587_SHARP_,p2__25586_SHARP_){return goog.dom.insertSiblingAfter(p2__25586_SHARP_,p1__25587_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__25589_SHARP_,p2__25588_SHARP_){return goog.dom.replaceNode(p2__25588_SHARP_,p1__25589_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__25594_25598 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25595_25599 = null;var count__25596_25600 = (0);var i__25597_25601 = (0);while(true){
if((i__25597_25601 < count__25596_25600))
{var n_25602 = cljs.core._nth.call(null,chunk__25595_25599,i__25597_25601);goog.style.setStyle(n_25602,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25603 = seq__25594_25598;
var G__25604 = chunk__25595_25599;
var G__25605 = count__25596_25600;
var G__25606 = (i__25597_25601 + (1));
seq__25594_25598 = G__25603;
chunk__25595_25599 = G__25604;
count__25596_25600 = G__25605;
i__25597_25601 = G__25606;
continue;
}
} else
{var temp__4126__auto___25607 = cljs.core.seq.call(null,seq__25594_25598);if(temp__4126__auto___25607)
{var seq__25594_25608__$1 = temp__4126__auto___25607;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25594_25608__$1))
{var c__4406__auto___25609 = cljs.core.chunk_first.call(null,seq__25594_25608__$1);{
var G__25610 = cljs.core.chunk_rest.call(null,seq__25594_25608__$1);
var G__25611 = c__4406__auto___25609;
var G__25612 = cljs.core.count.call(null,c__4406__auto___25609);
var G__25613 = (0);
seq__25594_25598 = G__25610;
chunk__25595_25599 = G__25611;
count__25596_25600 = G__25612;
i__25597_25601 = G__25613;
continue;
}
} else
{var n_25614 = cljs.core.first.call(null,seq__25594_25608__$1);goog.style.setStyle(n_25614,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25615 = cljs.core.next.call(null,seq__25594_25608__$1);
var G__25616 = null;
var G__25617 = (0);
var G__25618 = (0);
seq__25594_25598 = G__25615;
chunk__25595_25599 = G__25616;
count__25596_25600 = G__25617;
i__25597_25601 = G__25618;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__25619){
var content = cljs.core.first(arglist__25619);
arglist__25619 = cljs.core.next(arglist__25619);
var name = cljs.core.first(arglist__25619);
var value = cljs.core.rest(arglist__25619);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__25624_25628 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25625_25629 = null;var count__25626_25630 = (0);var i__25627_25631 = (0);while(true){
if((i__25627_25631 < count__25626_25630))
{var n_25632 = cljs.core._nth.call(null,chunk__25625_25629,i__25627_25631);n_25632.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25633 = seq__25624_25628;
var G__25634 = chunk__25625_25629;
var G__25635 = count__25626_25630;
var G__25636 = (i__25627_25631 + (1));
seq__25624_25628 = G__25633;
chunk__25625_25629 = G__25634;
count__25626_25630 = G__25635;
i__25627_25631 = G__25636;
continue;
}
} else
{var temp__4126__auto___25637 = cljs.core.seq.call(null,seq__25624_25628);if(temp__4126__auto___25637)
{var seq__25624_25638__$1 = temp__4126__auto___25637;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25624_25638__$1))
{var c__4406__auto___25639 = cljs.core.chunk_first.call(null,seq__25624_25638__$1);{
var G__25640 = cljs.core.chunk_rest.call(null,seq__25624_25638__$1);
var G__25641 = c__4406__auto___25639;
var G__25642 = cljs.core.count.call(null,c__4406__auto___25639);
var G__25643 = (0);
seq__25624_25628 = G__25640;
chunk__25625_25629 = G__25641;
count__25626_25630 = G__25642;
i__25627_25631 = G__25643;
continue;
}
} else
{var n_25644 = cljs.core.first.call(null,seq__25624_25638__$1);n_25644.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__25645 = cljs.core.next.call(null,seq__25624_25638__$1);
var G__25646 = null;
var G__25647 = (0);
var G__25648 = (0);
seq__25624_25628 = G__25645;
chunk__25625_25629 = G__25646;
count__25626_25630 = G__25647;
i__25627_25631 = G__25648;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__25649){
var content = cljs.core.first(arglist__25649);
arglist__25649 = cljs.core.next(arglist__25649);
var name = cljs.core.first(arglist__25649);
var value = cljs.core.rest(arglist__25649);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__25654_25658 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25655_25659 = null;var count__25656_25660 = (0);var i__25657_25661 = (0);while(true){
if((i__25657_25661 < count__25656_25660))
{var n_25662 = cljs.core._nth.call(null,chunk__25655_25659,i__25657_25661);n_25662.removeAttribute(cljs.core.name.call(null,name));
{
var G__25663 = seq__25654_25658;
var G__25664 = chunk__25655_25659;
var G__25665 = count__25656_25660;
var G__25666 = (i__25657_25661 + (1));
seq__25654_25658 = G__25663;
chunk__25655_25659 = G__25664;
count__25656_25660 = G__25665;
i__25657_25661 = G__25666;
continue;
}
} else
{var temp__4126__auto___25667 = cljs.core.seq.call(null,seq__25654_25658);if(temp__4126__auto___25667)
{var seq__25654_25668__$1 = temp__4126__auto___25667;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25654_25668__$1))
{var c__4406__auto___25669 = cljs.core.chunk_first.call(null,seq__25654_25668__$1);{
var G__25670 = cljs.core.chunk_rest.call(null,seq__25654_25668__$1);
var G__25671 = c__4406__auto___25669;
var G__25672 = cljs.core.count.call(null,c__4406__auto___25669);
var G__25673 = (0);
seq__25654_25658 = G__25670;
chunk__25655_25659 = G__25671;
count__25656_25660 = G__25672;
i__25657_25661 = G__25673;
continue;
}
} else
{var n_25674 = cljs.core.first.call(null,seq__25654_25668__$1);n_25674.removeAttribute(cljs.core.name.call(null,name));
{
var G__25675 = cljs.core.next.call(null,seq__25654_25668__$1);
var G__25676 = null;
var G__25677 = (0);
var G__25678 = (0);
seq__25654_25658 = G__25675;
chunk__25655_25659 = G__25676;
count__25656_25660 = G__25677;
i__25657_25661 = G__25678;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__25680 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__25680,(0),null);var v = cljs.core.nth.call(null,vec__25680,(1),null);if(cljs.core.truth_((function (){var and__3625__auto__ = k;if(cljs.core.truth_(and__3625__auto__))
{return v;
} else
{return and__3625__auto__;
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
{return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__25681_SHARP_){var attr = attrs__$1.item(p1__25681_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__25688_25694 = cljs.core.seq.call(null,styles);var chunk__25689_25695 = null;var count__25690_25696 = (0);var i__25691_25697 = (0);while(true){
if((i__25691_25697 < count__25690_25696))
{var vec__25692_25698 = cljs.core._nth.call(null,chunk__25689_25695,i__25691_25697);var name_25699 = cljs.core.nth.call(null,vec__25692_25698,(0),null);var value_25700 = cljs.core.nth.call(null,vec__25692_25698,(1),null);domina.set_style_BANG_.call(null,content,name_25699,value_25700);
{
var G__25701 = seq__25688_25694;
var G__25702 = chunk__25689_25695;
var G__25703 = count__25690_25696;
var G__25704 = (i__25691_25697 + (1));
seq__25688_25694 = G__25701;
chunk__25689_25695 = G__25702;
count__25690_25696 = G__25703;
i__25691_25697 = G__25704;
continue;
}
} else
{var temp__4126__auto___25705 = cljs.core.seq.call(null,seq__25688_25694);if(temp__4126__auto___25705)
{var seq__25688_25706__$1 = temp__4126__auto___25705;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25688_25706__$1))
{var c__4406__auto___25707 = cljs.core.chunk_first.call(null,seq__25688_25706__$1);{
var G__25708 = cljs.core.chunk_rest.call(null,seq__25688_25706__$1);
var G__25709 = c__4406__auto___25707;
var G__25710 = cljs.core.count.call(null,c__4406__auto___25707);
var G__25711 = (0);
seq__25688_25694 = G__25708;
chunk__25689_25695 = G__25709;
count__25690_25696 = G__25710;
i__25691_25697 = G__25711;
continue;
}
} else
{var vec__25693_25712 = cljs.core.first.call(null,seq__25688_25706__$1);var name_25713 = cljs.core.nth.call(null,vec__25693_25712,(0),null);var value_25714 = cljs.core.nth.call(null,vec__25693_25712,(1),null);domina.set_style_BANG_.call(null,content,name_25713,value_25714);
{
var G__25715 = cljs.core.next.call(null,seq__25688_25706__$1);
var G__25716 = null;
var G__25717 = (0);
var G__25718 = (0);
seq__25688_25694 = G__25715;
chunk__25689_25695 = G__25716;
count__25690_25696 = G__25717;
i__25691_25697 = G__25718;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__25725_25731 = cljs.core.seq.call(null,attrs);var chunk__25726_25732 = null;var count__25727_25733 = (0);var i__25728_25734 = (0);while(true){
if((i__25728_25734 < count__25727_25733))
{var vec__25729_25735 = cljs.core._nth.call(null,chunk__25726_25732,i__25728_25734);var name_25736 = cljs.core.nth.call(null,vec__25729_25735,(0),null);var value_25737 = cljs.core.nth.call(null,vec__25729_25735,(1),null);domina.set_attr_BANG_.call(null,content,name_25736,value_25737);
{
var G__25738 = seq__25725_25731;
var G__25739 = chunk__25726_25732;
var G__25740 = count__25727_25733;
var G__25741 = (i__25728_25734 + (1));
seq__25725_25731 = G__25738;
chunk__25726_25732 = G__25739;
count__25727_25733 = G__25740;
i__25728_25734 = G__25741;
continue;
}
} else
{var temp__4126__auto___25742 = cljs.core.seq.call(null,seq__25725_25731);if(temp__4126__auto___25742)
{var seq__25725_25743__$1 = temp__4126__auto___25742;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25725_25743__$1))
{var c__4406__auto___25744 = cljs.core.chunk_first.call(null,seq__25725_25743__$1);{
var G__25745 = cljs.core.chunk_rest.call(null,seq__25725_25743__$1);
var G__25746 = c__4406__auto___25744;
var G__25747 = cljs.core.count.call(null,c__4406__auto___25744);
var G__25748 = (0);
seq__25725_25731 = G__25745;
chunk__25726_25732 = G__25746;
count__25727_25733 = G__25747;
i__25728_25734 = G__25748;
continue;
}
} else
{var vec__25730_25749 = cljs.core.first.call(null,seq__25725_25743__$1);var name_25750 = cljs.core.nth.call(null,vec__25730_25749,(0),null);var value_25751 = cljs.core.nth.call(null,vec__25730_25749,(1),null);domina.set_attr_BANG_.call(null,content,name_25750,value_25751);
{
var G__25752 = cljs.core.next.call(null,seq__25725_25743__$1);
var G__25753 = null;
var G__25754 = (0);
var G__25755 = (0);
seq__25725_25731 = G__25752;
chunk__25726_25732 = G__25753;
count__25727_25733 = G__25754;
i__25728_25734 = G__25755;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__25760_25764 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25761_25765 = null;var count__25762_25766 = (0);var i__25763_25767 = (0);while(true){
if((i__25763_25767 < count__25762_25766))
{var node_25768 = cljs.core._nth.call(null,chunk__25761_25765,i__25763_25767);goog.dom.classes.add(node_25768,class$);
{
var G__25769 = seq__25760_25764;
var G__25770 = chunk__25761_25765;
var G__25771 = count__25762_25766;
var G__25772 = (i__25763_25767 + (1));
seq__25760_25764 = G__25769;
chunk__25761_25765 = G__25770;
count__25762_25766 = G__25771;
i__25763_25767 = G__25772;
continue;
}
} else
{var temp__4126__auto___25773 = cljs.core.seq.call(null,seq__25760_25764);if(temp__4126__auto___25773)
{var seq__25760_25774__$1 = temp__4126__auto___25773;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25760_25774__$1))
{var c__4406__auto___25775 = cljs.core.chunk_first.call(null,seq__25760_25774__$1);{
var G__25776 = cljs.core.chunk_rest.call(null,seq__25760_25774__$1);
var G__25777 = c__4406__auto___25775;
var G__25778 = cljs.core.count.call(null,c__4406__auto___25775);
var G__25779 = (0);
seq__25760_25764 = G__25776;
chunk__25761_25765 = G__25777;
count__25762_25766 = G__25778;
i__25763_25767 = G__25779;
continue;
}
} else
{var node_25780 = cljs.core.first.call(null,seq__25760_25774__$1);goog.dom.classes.add(node_25780,class$);
{
var G__25781 = cljs.core.next.call(null,seq__25760_25774__$1);
var G__25782 = null;
var G__25783 = (0);
var G__25784 = (0);
seq__25760_25764 = G__25781;
chunk__25761_25765 = G__25782;
count__25762_25766 = G__25783;
i__25763_25767 = G__25784;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__25789_25793 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25790_25794 = null;var count__25791_25795 = (0);var i__25792_25796 = (0);while(true){
if((i__25792_25796 < count__25791_25795))
{var node_25797 = cljs.core._nth.call(null,chunk__25790_25794,i__25792_25796);goog.dom.classes.remove(node_25797,class$);
{
var G__25798 = seq__25789_25793;
var G__25799 = chunk__25790_25794;
var G__25800 = count__25791_25795;
var G__25801 = (i__25792_25796 + (1));
seq__25789_25793 = G__25798;
chunk__25790_25794 = G__25799;
count__25791_25795 = G__25800;
i__25792_25796 = G__25801;
continue;
}
} else
{var temp__4126__auto___25802 = cljs.core.seq.call(null,seq__25789_25793);if(temp__4126__auto___25802)
{var seq__25789_25803__$1 = temp__4126__auto___25802;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25789_25803__$1))
{var c__4406__auto___25804 = cljs.core.chunk_first.call(null,seq__25789_25803__$1);{
var G__25805 = cljs.core.chunk_rest.call(null,seq__25789_25803__$1);
var G__25806 = c__4406__auto___25804;
var G__25807 = cljs.core.count.call(null,c__4406__auto___25804);
var G__25808 = (0);
seq__25789_25793 = G__25805;
chunk__25790_25794 = G__25806;
count__25791_25795 = G__25807;
i__25792_25796 = G__25808;
continue;
}
} else
{var node_25809 = cljs.core.first.call(null,seq__25789_25803__$1);goog.dom.classes.remove(node_25809,class$);
{
var G__25810 = cljs.core.next.call(null,seq__25789_25803__$1);
var G__25811 = null;
var G__25812 = (0);
var G__25813 = (0);
seq__25789_25793 = G__25810;
chunk__25790_25794 = G__25811;
count__25791_25795 = G__25812;
i__25792_25796 = G__25813;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__25818_25822 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25819_25823 = null;var count__25820_25824 = (0);var i__25821_25825 = (0);while(true){
if((i__25821_25825 < count__25820_25824))
{var node_25826 = cljs.core._nth.call(null,chunk__25819_25823,i__25821_25825);goog.dom.classes.toggle(node_25826,class$);
{
var G__25827 = seq__25818_25822;
var G__25828 = chunk__25819_25823;
var G__25829 = count__25820_25824;
var G__25830 = (i__25821_25825 + (1));
seq__25818_25822 = G__25827;
chunk__25819_25823 = G__25828;
count__25820_25824 = G__25829;
i__25821_25825 = G__25830;
continue;
}
} else
{var temp__4126__auto___25831 = cljs.core.seq.call(null,seq__25818_25822);if(temp__4126__auto___25831)
{var seq__25818_25832__$1 = temp__4126__auto___25831;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25818_25832__$1))
{var c__4406__auto___25833 = cljs.core.chunk_first.call(null,seq__25818_25832__$1);{
var G__25834 = cljs.core.chunk_rest.call(null,seq__25818_25832__$1);
var G__25835 = c__4406__auto___25833;
var G__25836 = cljs.core.count.call(null,c__4406__auto___25833);
var G__25837 = (0);
seq__25818_25822 = G__25834;
chunk__25819_25823 = G__25835;
count__25820_25824 = G__25836;
i__25821_25825 = G__25837;
continue;
}
} else
{var node_25838 = cljs.core.first.call(null,seq__25818_25832__$1);goog.dom.classes.toggle(node_25838,class$);
{
var G__25839 = cljs.core.next.call(null,seq__25818_25832__$1);
var G__25840 = null;
var G__25841 = (0);
var G__25842 = (0);
seq__25818_25822 = G__25839;
chunk__25819_25823 = G__25840;
count__25820_25824 = G__25841;
i__25821_25825 = G__25842;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_25851__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__25847_25852 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25848_25853 = null;var count__25849_25854 = (0);var i__25850_25855 = (0);while(true){
if((i__25850_25855 < count__25849_25854))
{var node_25856 = cljs.core._nth.call(null,chunk__25848_25853,i__25850_25855);goog.dom.classes.set(node_25856,classes_25851__$1);
{
var G__25857 = seq__25847_25852;
var G__25858 = chunk__25848_25853;
var G__25859 = count__25849_25854;
var G__25860 = (i__25850_25855 + (1));
seq__25847_25852 = G__25857;
chunk__25848_25853 = G__25858;
count__25849_25854 = G__25859;
i__25850_25855 = G__25860;
continue;
}
} else
{var temp__4126__auto___25861 = cljs.core.seq.call(null,seq__25847_25852);if(temp__4126__auto___25861)
{var seq__25847_25862__$1 = temp__4126__auto___25861;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25847_25862__$1))
{var c__4406__auto___25863 = cljs.core.chunk_first.call(null,seq__25847_25862__$1);{
var G__25864 = cljs.core.chunk_rest.call(null,seq__25847_25862__$1);
var G__25865 = c__4406__auto___25863;
var G__25866 = cljs.core.count.call(null,c__4406__auto___25863);
var G__25867 = (0);
seq__25847_25852 = G__25864;
chunk__25848_25853 = G__25865;
count__25849_25854 = G__25866;
i__25850_25855 = G__25867;
continue;
}
} else
{var node_25868 = cljs.core.first.call(null,seq__25847_25862__$1);goog.dom.classes.set(node_25868,classes_25851__$1);
{
var G__25869 = cljs.core.next.call(null,seq__25847_25862__$1);
var G__25870 = null;
var G__25871 = (0);
var G__25872 = (0);
seq__25847_25852 = G__25869;
chunk__25848_25853 = G__25870;
count__25849_25854 = G__25871;
i__25850_25855 = G__25872;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__25877_25881 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25878_25882 = null;var count__25879_25883 = (0);var i__25880_25884 = (0);while(true){
if((i__25880_25884 < count__25879_25883))
{var node_25885 = cljs.core._nth.call(null,chunk__25878_25882,i__25880_25884);goog.dom.setTextContent(node_25885,value);
{
var G__25886 = seq__25877_25881;
var G__25887 = chunk__25878_25882;
var G__25888 = count__25879_25883;
var G__25889 = (i__25880_25884 + (1));
seq__25877_25881 = G__25886;
chunk__25878_25882 = G__25887;
count__25879_25883 = G__25888;
i__25880_25884 = G__25889;
continue;
}
} else
{var temp__4126__auto___25890 = cljs.core.seq.call(null,seq__25877_25881);if(temp__4126__auto___25890)
{var seq__25877_25891__$1 = temp__4126__auto___25890;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25877_25891__$1))
{var c__4406__auto___25892 = cljs.core.chunk_first.call(null,seq__25877_25891__$1);{
var G__25893 = cljs.core.chunk_rest.call(null,seq__25877_25891__$1);
var G__25894 = c__4406__auto___25892;
var G__25895 = cljs.core.count.call(null,c__4406__auto___25892);
var G__25896 = (0);
seq__25877_25881 = G__25893;
chunk__25878_25882 = G__25894;
count__25879_25883 = G__25895;
i__25880_25884 = G__25896;
continue;
}
} else
{var node_25897 = cljs.core.first.call(null,seq__25877_25891__$1);goog.dom.setTextContent(node_25897,value);
{
var G__25898 = cljs.core.next.call(null,seq__25877_25891__$1);
var G__25899 = null;
var G__25900 = (0);
var G__25901 = (0);
seq__25877_25881 = G__25898;
chunk__25878_25882 = G__25899;
count__25879_25883 = G__25900;
i__25880_25884 = G__25901;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__25906_25910 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25907_25911 = null;var count__25908_25912 = (0);var i__25909_25913 = (0);while(true){
if((i__25909_25913 < count__25908_25912))
{var node_25914 = cljs.core._nth.call(null,chunk__25907_25911,i__25909_25913);goog.dom.forms.setValue(node_25914,value);
{
var G__25915 = seq__25906_25910;
var G__25916 = chunk__25907_25911;
var G__25917 = count__25908_25912;
var G__25918 = (i__25909_25913 + (1));
seq__25906_25910 = G__25915;
chunk__25907_25911 = G__25916;
count__25908_25912 = G__25917;
i__25909_25913 = G__25918;
continue;
}
} else
{var temp__4126__auto___25919 = cljs.core.seq.call(null,seq__25906_25910);if(temp__4126__auto___25919)
{var seq__25906_25920__$1 = temp__4126__auto___25919;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25906_25920__$1))
{var c__4406__auto___25921 = cljs.core.chunk_first.call(null,seq__25906_25920__$1);{
var G__25922 = cljs.core.chunk_rest.call(null,seq__25906_25920__$1);
var G__25923 = c__4406__auto___25921;
var G__25924 = cljs.core.count.call(null,c__4406__auto___25921);
var G__25925 = (0);
seq__25906_25910 = G__25922;
chunk__25907_25911 = G__25923;
count__25908_25912 = G__25924;
i__25909_25913 = G__25925;
continue;
}
} else
{var node_25926 = cljs.core.first.call(null,seq__25906_25920__$1);goog.dom.forms.setValue(node_25926,value);
{
var G__25927 = cljs.core.next.call(null,seq__25906_25920__$1);
var G__25928 = null;
var G__25929 = (0);
var G__25930 = (0);
seq__25906_25910 = G__25927;
chunk__25907_25911 = G__25928;
count__25908_25912 = G__25929;
i__25909_25913 = G__25930;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3625__auto__ = allows_inner_html_QMARK_;if(and__3625__auto__)
{var and__3625__auto____$1 = (function (){var or__3637__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3625__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
}
})()))
{var value_25941 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__25937_25942 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__25938_25943 = null;var count__25939_25944 = (0);var i__25940_25945 = (0);while(true){
if((i__25940_25945 < count__25939_25944))
{var node_25946 = cljs.core._nth.call(null,chunk__25938_25943,i__25940_25945);node_25946.innerHTML = value_25941;
{
var G__25947 = seq__25937_25942;
var G__25948 = chunk__25938_25943;
var G__25949 = count__25939_25944;
var G__25950 = (i__25940_25945 + (1));
seq__25937_25942 = G__25947;
chunk__25938_25943 = G__25948;
count__25939_25944 = G__25949;
i__25940_25945 = G__25950;
continue;
}
} else
{var temp__4126__auto___25951 = cljs.core.seq.call(null,seq__25937_25942);if(temp__4126__auto___25951)
{var seq__25937_25952__$1 = temp__4126__auto___25951;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25937_25952__$1))
{var c__4406__auto___25953 = cljs.core.chunk_first.call(null,seq__25937_25952__$1);{
var G__25954 = cljs.core.chunk_rest.call(null,seq__25937_25952__$1);
var G__25955 = c__4406__auto___25953;
var G__25956 = cljs.core.count.call(null,c__4406__auto___25953);
var G__25957 = (0);
seq__25937_25942 = G__25954;
chunk__25938_25943 = G__25955;
count__25939_25944 = G__25956;
i__25940_25945 = G__25957;
continue;
}
} else
{var node_25958 = cljs.core.first.call(null,seq__25937_25952__$1);node_25958.innerHTML = value_25941;
{
var G__25959 = cljs.core.next.call(null,seq__25937_25952__$1);
var G__25960 = null;
var G__25961 = (0);
var G__25962 = (0);
seq__25937_25942 = G__25959;
chunk__25938_25943 = G__25960;
count__25939_25944 = G__25961;
i__25940_25945 = G__25962;
continue;
}
}
} else
{}
}
break;
}
}catch (e25936){if((e25936 instanceof Error))
{var e_25963 = e25936;domina.replace_children_BANG_.call(null,content,value_25941);
} else
{throw e25936;

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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3625__auto__ = bubble;if(cljs.core.truth_(and__3625__auto__))
{return (value == null);
} else
{return and__3625__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3637__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3637__auto__))
{return or__3637__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__25970_25974 = cljs.core.seq.call(null,children);var chunk__25971_25975 = null;var count__25972_25976 = (0);var i__25973_25977 = (0);while(true){
if((i__25973_25977 < count__25972_25976))
{var child_25978 = cljs.core._nth.call(null,chunk__25971_25975,i__25973_25977);frag.appendChild(child_25978);
{
var G__25979 = seq__25970_25974;
var G__25980 = chunk__25971_25975;
var G__25981 = count__25972_25976;
var G__25982 = (i__25973_25977 + (1));
seq__25970_25974 = G__25979;
chunk__25971_25975 = G__25980;
count__25972_25976 = G__25981;
i__25973_25977 = G__25982;
continue;
}
} else
{var temp__4126__auto___25983 = cljs.core.seq.call(null,seq__25970_25974);if(temp__4126__auto___25983)
{var seq__25970_25984__$1 = temp__4126__auto___25983;if(cljs.core.chunked_seq_QMARK_.call(null,seq__25970_25984__$1))
{var c__4406__auto___25985 = cljs.core.chunk_first.call(null,seq__25970_25984__$1);{
var G__25986 = cljs.core.chunk_rest.call(null,seq__25970_25984__$1);
var G__25987 = c__4406__auto___25985;
var G__25988 = cljs.core.count.call(null,c__4406__auto___25985);
var G__25989 = (0);
seq__25970_25974 = G__25986;
chunk__25971_25975 = G__25987;
count__25972_25976 = G__25988;
i__25973_25977 = G__25989;
continue;
}
} else
{var child_25990 = cljs.core.first.call(null,seq__25970_25984__$1);frag.appendChild(child_25990);
{
var G__25991 = cljs.core.next.call(null,seq__25970_25984__$1);
var G__25992 = null;
var G__25993 = (0);
var G__25994 = (0);
seq__25970_25974 = G__25991;
chunk__25971_25975 = G__25992;
count__25972_25976 = G__25993;
i__25973_25977 = G__25994;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__25964_SHARP_,p2__25965_SHARP_){return f.call(null,p1__25964_SHARP_,p2__25965_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
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
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3625__auto__ = obj;if(cljs.core.truth_(and__3625__auto__))
{var and__3625__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3625__auto____$1)
{return obj.length;
} else
{return and__3625__auto____$1;
}
} else
{return and__3625__auto__;
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
{if((function (){var G__25996 = list_thing;if(G__25996)
{var bit__4300__auto__ = (G__25996.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__25996.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25996.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25996);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25996);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__25997 = content;if(G__25997)
{var bit__4300__auto__ = (G__25997.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__25997.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25997.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25997);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25997);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__25998 = content;if(G__25998)
{var bit__4300__auto__ = (G__25998.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4300__auto__) || (G__25998.cljs$core$ISeqable$))
{return true;
} else
{if((!G__25998.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25998);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__25998);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{return content;

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

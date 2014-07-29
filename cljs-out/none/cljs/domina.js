// Compiled by ClojureScript 0.0-2268
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
var opt_wrapper_55644 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_55645 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_55646 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_55646,opt_wrapper_55644,table_section_wrapper_55645,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_55644,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_55645,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_55645,cell_wrapper_55646,table_section_wrapper_55645,table_section_wrapper_55645]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__55651 = cljs.core.seq.call(null,tbody);var chunk__55652 = null;var count__55653 = (0);var i__55654 = (0);while(true){
if((i__55654 < count__55653))
{var child = cljs.core._nth.call(null,chunk__55652,i__55654);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__55655 = seq__55651;
var G__55656 = chunk__55652;
var G__55657 = count__55653;
var G__55658 = (i__55654 + (1));
seq__55651 = G__55655;
chunk__55652 = G__55656;
count__55653 = G__55657;
i__55654 = G__55658;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__55651);if(temp__4126__auto__)
{var seq__55651__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55651__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__55651__$1);{
var G__55659 = cljs.core.chunk_rest.call(null,seq__55651__$1);
var G__55660 = c__4299__auto__;
var G__55661 = cljs.core.count.call(null,c__4299__auto__);
var G__55662 = (0);
seq__55651 = G__55659;
chunk__55652 = G__55660;
count__55653 = G__55661;
i__55654 = G__55662;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__55651__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__55663 = cljs.core.next.call(null,seq__55651__$1);
var G__55664 = null;
var G__55665 = (0);
var G__55666 = (0);
seq__55651 = G__55663;
chunk__55652 = G__55664;
count__55653 = G__55665;
i__55654 = G__55666;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__55668 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__55668,(0),null);var start_wrap = cljs.core.nth.call(null,vec__55668,(1),null);var end_wrap = cljs.core.nth.call(null,vec__55668,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__55669 = wrapper.lastChild;
var G__55670 = (level - (1));
wrapper = G__55669;
level = G__55670;
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
if(cljs.core.truth_((function (){var and__3531__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3531__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3531__auto__;
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
domina.DomContent = (function (){var obj55672 = {};return obj55672;
})();
domina.nodes = (function nodes(content){if((function (){var and__3531__auto__ = content;if(and__3531__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3531__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4170__auto__ = (((content == null))?null:content);return (function (){var or__3543__auto__ = (domina.nodes[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.nodes["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3531__auto__ = nodeseq;if(and__3531__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3531__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4170__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3543__auto__ = (domina.single_node[goog.typeOf(x__4170__auto__)]);if(or__3543__auto__)
{return or__3543__auto__;
} else
{var or__3543__auto____$1 = (domina.single_node["_"]);if(or__3543__auto____$1)
{return or__3543__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3531__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3531__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3531__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__55673){
var mesg = cljs.core.seq(arglist__55673);
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
log.cljs$lang$applyTo = (function (arglist__55674){
var mesg = cljs.core.seq(arglist__55674);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__55675){
var contents = cljs.core.seq(arglist__55675);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__55676_SHARP_){return p1__55676_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__55677_SHARP_,p2__55678_SHARP_){return goog.dom.insertChildAt(p1__55677_SHARP_,p2__55678_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__55680_SHARP_,p2__55679_SHARP_){return goog.dom.insertSiblingBefore(p2__55679_SHARP_,p1__55680_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__55682_SHARP_,p2__55681_SHARP_){return goog.dom.insertSiblingAfter(p2__55681_SHARP_,p1__55682_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__55684_SHARP_,p2__55683_SHARP_){return goog.dom.replaceNode(p2__55683_SHARP_,p1__55684_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__55689_55693 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55690_55694 = null;var count__55691_55695 = (0);var i__55692_55696 = (0);while(true){
if((i__55692_55696 < count__55691_55695))
{var n_55697 = cljs.core._nth.call(null,chunk__55690_55694,i__55692_55696);goog.style.setStyle(n_55697,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__55698 = seq__55689_55693;
var G__55699 = chunk__55690_55694;
var G__55700 = count__55691_55695;
var G__55701 = (i__55692_55696 + (1));
seq__55689_55693 = G__55698;
chunk__55690_55694 = G__55699;
count__55691_55695 = G__55700;
i__55692_55696 = G__55701;
continue;
}
} else
{var temp__4126__auto___55702 = cljs.core.seq.call(null,seq__55689_55693);if(temp__4126__auto___55702)
{var seq__55689_55703__$1 = temp__4126__auto___55702;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55689_55703__$1))
{var c__4299__auto___55704 = cljs.core.chunk_first.call(null,seq__55689_55703__$1);{
var G__55705 = cljs.core.chunk_rest.call(null,seq__55689_55703__$1);
var G__55706 = c__4299__auto___55704;
var G__55707 = cljs.core.count.call(null,c__4299__auto___55704);
var G__55708 = (0);
seq__55689_55693 = G__55705;
chunk__55690_55694 = G__55706;
count__55691_55695 = G__55707;
i__55692_55696 = G__55708;
continue;
}
} else
{var n_55709 = cljs.core.first.call(null,seq__55689_55703__$1);goog.style.setStyle(n_55709,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__55710 = cljs.core.next.call(null,seq__55689_55703__$1);
var G__55711 = null;
var G__55712 = (0);
var G__55713 = (0);
seq__55689_55693 = G__55710;
chunk__55690_55694 = G__55711;
count__55691_55695 = G__55712;
i__55692_55696 = G__55713;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__55714){
var content = cljs.core.first(arglist__55714);
arglist__55714 = cljs.core.next(arglist__55714);
var name = cljs.core.first(arglist__55714);
var value = cljs.core.rest(arglist__55714);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__55719_55723 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55720_55724 = null;var count__55721_55725 = (0);var i__55722_55726 = (0);while(true){
if((i__55722_55726 < count__55721_55725))
{var n_55727 = cljs.core._nth.call(null,chunk__55720_55724,i__55722_55726);n_55727.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__55728 = seq__55719_55723;
var G__55729 = chunk__55720_55724;
var G__55730 = count__55721_55725;
var G__55731 = (i__55722_55726 + (1));
seq__55719_55723 = G__55728;
chunk__55720_55724 = G__55729;
count__55721_55725 = G__55730;
i__55722_55726 = G__55731;
continue;
}
} else
{var temp__4126__auto___55732 = cljs.core.seq.call(null,seq__55719_55723);if(temp__4126__auto___55732)
{var seq__55719_55733__$1 = temp__4126__auto___55732;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55719_55733__$1))
{var c__4299__auto___55734 = cljs.core.chunk_first.call(null,seq__55719_55733__$1);{
var G__55735 = cljs.core.chunk_rest.call(null,seq__55719_55733__$1);
var G__55736 = c__4299__auto___55734;
var G__55737 = cljs.core.count.call(null,c__4299__auto___55734);
var G__55738 = (0);
seq__55719_55723 = G__55735;
chunk__55720_55724 = G__55736;
count__55721_55725 = G__55737;
i__55722_55726 = G__55738;
continue;
}
} else
{var n_55739 = cljs.core.first.call(null,seq__55719_55733__$1);n_55739.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__55740 = cljs.core.next.call(null,seq__55719_55733__$1);
var G__55741 = null;
var G__55742 = (0);
var G__55743 = (0);
seq__55719_55723 = G__55740;
chunk__55720_55724 = G__55741;
count__55721_55725 = G__55742;
i__55722_55726 = G__55743;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__55744){
var content = cljs.core.first(arglist__55744);
arglist__55744 = cljs.core.next(arglist__55744);
var name = cljs.core.first(arglist__55744);
var value = cljs.core.rest(arglist__55744);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__55749_55753 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55750_55754 = null;var count__55751_55755 = (0);var i__55752_55756 = (0);while(true){
if((i__55752_55756 < count__55751_55755))
{var n_55757 = cljs.core._nth.call(null,chunk__55750_55754,i__55752_55756);n_55757.removeAttribute(cljs.core.name.call(null,name));
{
var G__55758 = seq__55749_55753;
var G__55759 = chunk__55750_55754;
var G__55760 = count__55751_55755;
var G__55761 = (i__55752_55756 + (1));
seq__55749_55753 = G__55758;
chunk__55750_55754 = G__55759;
count__55751_55755 = G__55760;
i__55752_55756 = G__55761;
continue;
}
} else
{var temp__4126__auto___55762 = cljs.core.seq.call(null,seq__55749_55753);if(temp__4126__auto___55762)
{var seq__55749_55763__$1 = temp__4126__auto___55762;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55749_55763__$1))
{var c__4299__auto___55764 = cljs.core.chunk_first.call(null,seq__55749_55763__$1);{
var G__55765 = cljs.core.chunk_rest.call(null,seq__55749_55763__$1);
var G__55766 = c__4299__auto___55764;
var G__55767 = cljs.core.count.call(null,c__4299__auto___55764);
var G__55768 = (0);
seq__55749_55753 = G__55765;
chunk__55750_55754 = G__55766;
count__55751_55755 = G__55767;
i__55752_55756 = G__55768;
continue;
}
} else
{var n_55769 = cljs.core.first.call(null,seq__55749_55763__$1);n_55769.removeAttribute(cljs.core.name.call(null,name));
{
var G__55770 = cljs.core.next.call(null,seq__55749_55763__$1);
var G__55771 = null;
var G__55772 = (0);
var G__55773 = (0);
seq__55749_55753 = G__55770;
chunk__55750_55754 = G__55771;
count__55751_55755 = G__55772;
i__55752_55756 = G__55773;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__55775 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__55775,(0),null);var v = cljs.core.nth.call(null,vec__55775,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
{return v;
} else
{return and__3531__auto__;
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
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__55776_SHARP_){var attr = attrs__$1.item(p1__55776_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__55783_55789 = cljs.core.seq.call(null,styles);var chunk__55784_55790 = null;var count__55785_55791 = (0);var i__55786_55792 = (0);while(true){
if((i__55786_55792 < count__55785_55791))
{var vec__55787_55793 = cljs.core._nth.call(null,chunk__55784_55790,i__55786_55792);var name_55794 = cljs.core.nth.call(null,vec__55787_55793,(0),null);var value_55795 = cljs.core.nth.call(null,vec__55787_55793,(1),null);domina.set_style_BANG_.call(null,content,name_55794,value_55795);
{
var G__55796 = seq__55783_55789;
var G__55797 = chunk__55784_55790;
var G__55798 = count__55785_55791;
var G__55799 = (i__55786_55792 + (1));
seq__55783_55789 = G__55796;
chunk__55784_55790 = G__55797;
count__55785_55791 = G__55798;
i__55786_55792 = G__55799;
continue;
}
} else
{var temp__4126__auto___55800 = cljs.core.seq.call(null,seq__55783_55789);if(temp__4126__auto___55800)
{var seq__55783_55801__$1 = temp__4126__auto___55800;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55783_55801__$1))
{var c__4299__auto___55802 = cljs.core.chunk_first.call(null,seq__55783_55801__$1);{
var G__55803 = cljs.core.chunk_rest.call(null,seq__55783_55801__$1);
var G__55804 = c__4299__auto___55802;
var G__55805 = cljs.core.count.call(null,c__4299__auto___55802);
var G__55806 = (0);
seq__55783_55789 = G__55803;
chunk__55784_55790 = G__55804;
count__55785_55791 = G__55805;
i__55786_55792 = G__55806;
continue;
}
} else
{var vec__55788_55807 = cljs.core.first.call(null,seq__55783_55801__$1);var name_55808 = cljs.core.nth.call(null,vec__55788_55807,(0),null);var value_55809 = cljs.core.nth.call(null,vec__55788_55807,(1),null);domina.set_style_BANG_.call(null,content,name_55808,value_55809);
{
var G__55810 = cljs.core.next.call(null,seq__55783_55801__$1);
var G__55811 = null;
var G__55812 = (0);
var G__55813 = (0);
seq__55783_55789 = G__55810;
chunk__55784_55790 = G__55811;
count__55785_55791 = G__55812;
i__55786_55792 = G__55813;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__55820_55826 = cljs.core.seq.call(null,attrs);var chunk__55821_55827 = null;var count__55822_55828 = (0);var i__55823_55829 = (0);while(true){
if((i__55823_55829 < count__55822_55828))
{var vec__55824_55830 = cljs.core._nth.call(null,chunk__55821_55827,i__55823_55829);var name_55831 = cljs.core.nth.call(null,vec__55824_55830,(0),null);var value_55832 = cljs.core.nth.call(null,vec__55824_55830,(1),null);domina.set_attr_BANG_.call(null,content,name_55831,value_55832);
{
var G__55833 = seq__55820_55826;
var G__55834 = chunk__55821_55827;
var G__55835 = count__55822_55828;
var G__55836 = (i__55823_55829 + (1));
seq__55820_55826 = G__55833;
chunk__55821_55827 = G__55834;
count__55822_55828 = G__55835;
i__55823_55829 = G__55836;
continue;
}
} else
{var temp__4126__auto___55837 = cljs.core.seq.call(null,seq__55820_55826);if(temp__4126__auto___55837)
{var seq__55820_55838__$1 = temp__4126__auto___55837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55820_55838__$1))
{var c__4299__auto___55839 = cljs.core.chunk_first.call(null,seq__55820_55838__$1);{
var G__55840 = cljs.core.chunk_rest.call(null,seq__55820_55838__$1);
var G__55841 = c__4299__auto___55839;
var G__55842 = cljs.core.count.call(null,c__4299__auto___55839);
var G__55843 = (0);
seq__55820_55826 = G__55840;
chunk__55821_55827 = G__55841;
count__55822_55828 = G__55842;
i__55823_55829 = G__55843;
continue;
}
} else
{var vec__55825_55844 = cljs.core.first.call(null,seq__55820_55838__$1);var name_55845 = cljs.core.nth.call(null,vec__55825_55844,(0),null);var value_55846 = cljs.core.nth.call(null,vec__55825_55844,(1),null);domina.set_attr_BANG_.call(null,content,name_55845,value_55846);
{
var G__55847 = cljs.core.next.call(null,seq__55820_55838__$1);
var G__55848 = null;
var G__55849 = (0);
var G__55850 = (0);
seq__55820_55826 = G__55847;
chunk__55821_55827 = G__55848;
count__55822_55828 = G__55849;
i__55823_55829 = G__55850;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__55855_55859 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55856_55860 = null;var count__55857_55861 = (0);var i__55858_55862 = (0);while(true){
if((i__55858_55862 < count__55857_55861))
{var node_55863 = cljs.core._nth.call(null,chunk__55856_55860,i__55858_55862);goog.dom.classes.add(node_55863,class$);
{
var G__55864 = seq__55855_55859;
var G__55865 = chunk__55856_55860;
var G__55866 = count__55857_55861;
var G__55867 = (i__55858_55862 + (1));
seq__55855_55859 = G__55864;
chunk__55856_55860 = G__55865;
count__55857_55861 = G__55866;
i__55858_55862 = G__55867;
continue;
}
} else
{var temp__4126__auto___55868 = cljs.core.seq.call(null,seq__55855_55859);if(temp__4126__auto___55868)
{var seq__55855_55869__$1 = temp__4126__auto___55868;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55855_55869__$1))
{var c__4299__auto___55870 = cljs.core.chunk_first.call(null,seq__55855_55869__$1);{
var G__55871 = cljs.core.chunk_rest.call(null,seq__55855_55869__$1);
var G__55872 = c__4299__auto___55870;
var G__55873 = cljs.core.count.call(null,c__4299__auto___55870);
var G__55874 = (0);
seq__55855_55859 = G__55871;
chunk__55856_55860 = G__55872;
count__55857_55861 = G__55873;
i__55858_55862 = G__55874;
continue;
}
} else
{var node_55875 = cljs.core.first.call(null,seq__55855_55869__$1);goog.dom.classes.add(node_55875,class$);
{
var G__55876 = cljs.core.next.call(null,seq__55855_55869__$1);
var G__55877 = null;
var G__55878 = (0);
var G__55879 = (0);
seq__55855_55859 = G__55876;
chunk__55856_55860 = G__55877;
count__55857_55861 = G__55878;
i__55858_55862 = G__55879;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__55884_55888 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55885_55889 = null;var count__55886_55890 = (0);var i__55887_55891 = (0);while(true){
if((i__55887_55891 < count__55886_55890))
{var node_55892 = cljs.core._nth.call(null,chunk__55885_55889,i__55887_55891);goog.dom.classes.remove(node_55892,class$);
{
var G__55893 = seq__55884_55888;
var G__55894 = chunk__55885_55889;
var G__55895 = count__55886_55890;
var G__55896 = (i__55887_55891 + (1));
seq__55884_55888 = G__55893;
chunk__55885_55889 = G__55894;
count__55886_55890 = G__55895;
i__55887_55891 = G__55896;
continue;
}
} else
{var temp__4126__auto___55897 = cljs.core.seq.call(null,seq__55884_55888);if(temp__4126__auto___55897)
{var seq__55884_55898__$1 = temp__4126__auto___55897;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55884_55898__$1))
{var c__4299__auto___55899 = cljs.core.chunk_first.call(null,seq__55884_55898__$1);{
var G__55900 = cljs.core.chunk_rest.call(null,seq__55884_55898__$1);
var G__55901 = c__4299__auto___55899;
var G__55902 = cljs.core.count.call(null,c__4299__auto___55899);
var G__55903 = (0);
seq__55884_55888 = G__55900;
chunk__55885_55889 = G__55901;
count__55886_55890 = G__55902;
i__55887_55891 = G__55903;
continue;
}
} else
{var node_55904 = cljs.core.first.call(null,seq__55884_55898__$1);goog.dom.classes.remove(node_55904,class$);
{
var G__55905 = cljs.core.next.call(null,seq__55884_55898__$1);
var G__55906 = null;
var G__55907 = (0);
var G__55908 = (0);
seq__55884_55888 = G__55905;
chunk__55885_55889 = G__55906;
count__55886_55890 = G__55907;
i__55887_55891 = G__55908;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__55913_55917 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55914_55918 = null;var count__55915_55919 = (0);var i__55916_55920 = (0);while(true){
if((i__55916_55920 < count__55915_55919))
{var node_55921 = cljs.core._nth.call(null,chunk__55914_55918,i__55916_55920);goog.dom.classes.toggle(node_55921,class$);
{
var G__55922 = seq__55913_55917;
var G__55923 = chunk__55914_55918;
var G__55924 = count__55915_55919;
var G__55925 = (i__55916_55920 + (1));
seq__55913_55917 = G__55922;
chunk__55914_55918 = G__55923;
count__55915_55919 = G__55924;
i__55916_55920 = G__55925;
continue;
}
} else
{var temp__4126__auto___55926 = cljs.core.seq.call(null,seq__55913_55917);if(temp__4126__auto___55926)
{var seq__55913_55927__$1 = temp__4126__auto___55926;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55913_55927__$1))
{var c__4299__auto___55928 = cljs.core.chunk_first.call(null,seq__55913_55927__$1);{
var G__55929 = cljs.core.chunk_rest.call(null,seq__55913_55927__$1);
var G__55930 = c__4299__auto___55928;
var G__55931 = cljs.core.count.call(null,c__4299__auto___55928);
var G__55932 = (0);
seq__55913_55917 = G__55929;
chunk__55914_55918 = G__55930;
count__55915_55919 = G__55931;
i__55916_55920 = G__55932;
continue;
}
} else
{var node_55933 = cljs.core.first.call(null,seq__55913_55927__$1);goog.dom.classes.toggle(node_55933,class$);
{
var G__55934 = cljs.core.next.call(null,seq__55913_55927__$1);
var G__55935 = null;
var G__55936 = (0);
var G__55937 = (0);
seq__55913_55917 = G__55934;
chunk__55914_55918 = G__55935;
count__55915_55919 = G__55936;
i__55916_55920 = G__55937;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_55946__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__55942_55947 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55943_55948 = null;var count__55944_55949 = (0);var i__55945_55950 = (0);while(true){
if((i__55945_55950 < count__55944_55949))
{var node_55951 = cljs.core._nth.call(null,chunk__55943_55948,i__55945_55950);goog.dom.classes.set(node_55951,classes_55946__$1);
{
var G__55952 = seq__55942_55947;
var G__55953 = chunk__55943_55948;
var G__55954 = count__55944_55949;
var G__55955 = (i__55945_55950 + (1));
seq__55942_55947 = G__55952;
chunk__55943_55948 = G__55953;
count__55944_55949 = G__55954;
i__55945_55950 = G__55955;
continue;
}
} else
{var temp__4126__auto___55956 = cljs.core.seq.call(null,seq__55942_55947);if(temp__4126__auto___55956)
{var seq__55942_55957__$1 = temp__4126__auto___55956;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55942_55957__$1))
{var c__4299__auto___55958 = cljs.core.chunk_first.call(null,seq__55942_55957__$1);{
var G__55959 = cljs.core.chunk_rest.call(null,seq__55942_55957__$1);
var G__55960 = c__4299__auto___55958;
var G__55961 = cljs.core.count.call(null,c__4299__auto___55958);
var G__55962 = (0);
seq__55942_55947 = G__55959;
chunk__55943_55948 = G__55960;
count__55944_55949 = G__55961;
i__55945_55950 = G__55962;
continue;
}
} else
{var node_55963 = cljs.core.first.call(null,seq__55942_55957__$1);goog.dom.classes.set(node_55963,classes_55946__$1);
{
var G__55964 = cljs.core.next.call(null,seq__55942_55957__$1);
var G__55965 = null;
var G__55966 = (0);
var G__55967 = (0);
seq__55942_55947 = G__55964;
chunk__55943_55948 = G__55965;
count__55944_55949 = G__55966;
i__55945_55950 = G__55967;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__55972_55976 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__55973_55977 = null;var count__55974_55978 = (0);var i__55975_55979 = (0);while(true){
if((i__55975_55979 < count__55974_55978))
{var node_55980 = cljs.core._nth.call(null,chunk__55973_55977,i__55975_55979);goog.dom.setTextContent(node_55980,value);
{
var G__55981 = seq__55972_55976;
var G__55982 = chunk__55973_55977;
var G__55983 = count__55974_55978;
var G__55984 = (i__55975_55979 + (1));
seq__55972_55976 = G__55981;
chunk__55973_55977 = G__55982;
count__55974_55978 = G__55983;
i__55975_55979 = G__55984;
continue;
}
} else
{var temp__4126__auto___55985 = cljs.core.seq.call(null,seq__55972_55976);if(temp__4126__auto___55985)
{var seq__55972_55986__$1 = temp__4126__auto___55985;if(cljs.core.chunked_seq_QMARK_.call(null,seq__55972_55986__$1))
{var c__4299__auto___55987 = cljs.core.chunk_first.call(null,seq__55972_55986__$1);{
var G__55988 = cljs.core.chunk_rest.call(null,seq__55972_55986__$1);
var G__55989 = c__4299__auto___55987;
var G__55990 = cljs.core.count.call(null,c__4299__auto___55987);
var G__55991 = (0);
seq__55972_55976 = G__55988;
chunk__55973_55977 = G__55989;
count__55974_55978 = G__55990;
i__55975_55979 = G__55991;
continue;
}
} else
{var node_55992 = cljs.core.first.call(null,seq__55972_55986__$1);goog.dom.setTextContent(node_55992,value);
{
var G__55993 = cljs.core.next.call(null,seq__55972_55986__$1);
var G__55994 = null;
var G__55995 = (0);
var G__55996 = (0);
seq__55972_55976 = G__55993;
chunk__55973_55977 = G__55994;
count__55974_55978 = G__55995;
i__55975_55979 = G__55996;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__56001_56005 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56002_56006 = null;var count__56003_56007 = (0);var i__56004_56008 = (0);while(true){
if((i__56004_56008 < count__56003_56007))
{var node_56009 = cljs.core._nth.call(null,chunk__56002_56006,i__56004_56008);goog.dom.forms.setValue(node_56009,value);
{
var G__56010 = seq__56001_56005;
var G__56011 = chunk__56002_56006;
var G__56012 = count__56003_56007;
var G__56013 = (i__56004_56008 + (1));
seq__56001_56005 = G__56010;
chunk__56002_56006 = G__56011;
count__56003_56007 = G__56012;
i__56004_56008 = G__56013;
continue;
}
} else
{var temp__4126__auto___56014 = cljs.core.seq.call(null,seq__56001_56005);if(temp__4126__auto___56014)
{var seq__56001_56015__$1 = temp__4126__auto___56014;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56001_56015__$1))
{var c__4299__auto___56016 = cljs.core.chunk_first.call(null,seq__56001_56015__$1);{
var G__56017 = cljs.core.chunk_rest.call(null,seq__56001_56015__$1);
var G__56018 = c__4299__auto___56016;
var G__56019 = cljs.core.count.call(null,c__4299__auto___56016);
var G__56020 = (0);
seq__56001_56005 = G__56017;
chunk__56002_56006 = G__56018;
count__56003_56007 = G__56019;
i__56004_56008 = G__56020;
continue;
}
} else
{var node_56021 = cljs.core.first.call(null,seq__56001_56015__$1);goog.dom.forms.setValue(node_56021,value);
{
var G__56022 = cljs.core.next.call(null,seq__56001_56015__$1);
var G__56023 = null;
var G__56024 = (0);
var G__56025 = (0);
seq__56001_56005 = G__56022;
chunk__56002_56006 = G__56023;
count__56003_56007 = G__56024;
i__56004_56008 = G__56025;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3531__auto__ = allows_inner_html_QMARK_;if(and__3531__auto__)
{var and__3531__auto____$1 = (function (){var or__3543__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3531__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
}
})()))
{var value_56036 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__56032_56037 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__56033_56038 = null;var count__56034_56039 = (0);var i__56035_56040 = (0);while(true){
if((i__56035_56040 < count__56034_56039))
{var node_56041 = cljs.core._nth.call(null,chunk__56033_56038,i__56035_56040);node_56041.innerHTML = value_56036;
{
var G__56042 = seq__56032_56037;
var G__56043 = chunk__56033_56038;
var G__56044 = count__56034_56039;
var G__56045 = (i__56035_56040 + (1));
seq__56032_56037 = G__56042;
chunk__56033_56038 = G__56043;
count__56034_56039 = G__56044;
i__56035_56040 = G__56045;
continue;
}
} else
{var temp__4126__auto___56046 = cljs.core.seq.call(null,seq__56032_56037);if(temp__4126__auto___56046)
{var seq__56032_56047__$1 = temp__4126__auto___56046;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56032_56047__$1))
{var c__4299__auto___56048 = cljs.core.chunk_first.call(null,seq__56032_56047__$1);{
var G__56049 = cljs.core.chunk_rest.call(null,seq__56032_56047__$1);
var G__56050 = c__4299__auto___56048;
var G__56051 = cljs.core.count.call(null,c__4299__auto___56048);
var G__56052 = (0);
seq__56032_56037 = G__56049;
chunk__56033_56038 = G__56050;
count__56034_56039 = G__56051;
i__56035_56040 = G__56052;
continue;
}
} else
{var node_56053 = cljs.core.first.call(null,seq__56032_56047__$1);node_56053.innerHTML = value_56036;
{
var G__56054 = cljs.core.next.call(null,seq__56032_56047__$1);
var G__56055 = null;
var G__56056 = (0);
var G__56057 = (0);
seq__56032_56037 = G__56054;
chunk__56033_56038 = G__56055;
count__56034_56039 = G__56056;
i__56035_56040 = G__56057;
continue;
}
}
} else
{}
}
break;
}
}catch (e56031){if((e56031 instanceof Error))
{var e_56058 = e56031;domina.replace_children_BANG_.call(null,content,value_56036);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e56031;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3531__auto__ = bubble;if(cljs.core.truth_(and__3531__auto__))
{return (value == null);
} else
{return and__3531__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3543__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3543__auto__))
{return or__3543__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__56065_56069 = cljs.core.seq.call(null,children);var chunk__56066_56070 = null;var count__56067_56071 = (0);var i__56068_56072 = (0);while(true){
if((i__56068_56072 < count__56067_56071))
{var child_56073 = cljs.core._nth.call(null,chunk__56066_56070,i__56068_56072);frag.appendChild(child_56073);
{
var G__56074 = seq__56065_56069;
var G__56075 = chunk__56066_56070;
var G__56076 = count__56067_56071;
var G__56077 = (i__56068_56072 + (1));
seq__56065_56069 = G__56074;
chunk__56066_56070 = G__56075;
count__56067_56071 = G__56076;
i__56068_56072 = G__56077;
continue;
}
} else
{var temp__4126__auto___56078 = cljs.core.seq.call(null,seq__56065_56069);if(temp__4126__auto___56078)
{var seq__56065_56079__$1 = temp__4126__auto___56078;if(cljs.core.chunked_seq_QMARK_.call(null,seq__56065_56079__$1))
{var c__4299__auto___56080 = cljs.core.chunk_first.call(null,seq__56065_56079__$1);{
var G__56081 = cljs.core.chunk_rest.call(null,seq__56065_56079__$1);
var G__56082 = c__4299__auto___56080;
var G__56083 = cljs.core.count.call(null,c__4299__auto___56080);
var G__56084 = (0);
seq__56065_56069 = G__56081;
chunk__56066_56070 = G__56082;
count__56067_56071 = G__56083;
i__56068_56072 = G__56084;
continue;
}
} else
{var child_56085 = cljs.core.first.call(null,seq__56065_56079__$1);frag.appendChild(child_56085);
{
var G__56086 = cljs.core.next.call(null,seq__56065_56079__$1);
var G__56087 = null;
var G__56088 = (0);
var G__56089 = (0);
seq__56065_56069 = G__56086;
chunk__56066_56070 = G__56087;
count__56067_56071 = G__56088;
i__56068_56072 = G__56089;
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
return (function (p1__56059_SHARP_,p2__56060_SHARP_){return f.call(null,p1__56059_SHARP_,p2__56060_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3531__auto__ = obj;if(cljs.core.truth_(and__3531__auto__))
{var and__3531__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3531__auto____$1)
{return obj.length;
} else
{return and__3531__auto____$1;
}
} else
{return and__3531__auto__;
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
{if((function (){var G__56091 = list_thing;if(G__56091)
{var bit__4193__auto__ = (G__56091.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__56091.cljs$core$ISeqable$))
{return true;
} else
{if((!G__56091.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56091);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56091);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__56092 = content;if(G__56092)
{var bit__4193__auto__ = (G__56092.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__56092.cljs$core$ISeqable$))
{return true;
} else
{if((!G__56092.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56092);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56092);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
{if((function (){var G__56093 = content;if(G__56093)
{var bit__4193__auto__ = (G__56093.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__56093.cljs$core$ISeqable$))
{return true;
} else
{if((!G__56093.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56093);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__56093);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
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
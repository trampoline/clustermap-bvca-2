// Compiled by ClojureScript 0.0-2261
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
var opt_wrapper_18139 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_18140 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_18141 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_18141,opt_wrapper_18139,table_section_wrapper_18140,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_18139,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_18140,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_18140,cell_wrapper_18141,table_section_wrapper_18140,table_section_wrapper_18140]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3531__auto__ = div.firstChild;if(cljs.core.truth_(and__3531__auto__))
{return div.firstChild.childNodes;
} else
{return and__3531__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__18146 = cljs.core.seq.call(null,tbody);var chunk__18147 = null;var count__18148 = (0);var i__18149 = (0);while(true){
if((i__18149 < count__18148))
{var child = cljs.core._nth.call(null,chunk__18147,i__18149);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18150 = seq__18146;
var G__18151 = chunk__18147;
var G__18152 = count__18148;
var G__18153 = (i__18149 + (1));
seq__18146 = G__18150;
chunk__18147 = G__18151;
count__18148 = G__18152;
i__18149 = G__18153;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__18146);if(temp__4126__auto__)
{var seq__18146__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18146__$1))
{var c__4299__auto__ = cljs.core.chunk_first.call(null,seq__18146__$1);{
var G__18154 = cljs.core.chunk_rest.call(null,seq__18146__$1);
var G__18155 = c__4299__auto__;
var G__18156 = cljs.core.count.call(null,c__4299__auto__);
var G__18157 = (0);
seq__18146 = G__18154;
chunk__18147 = G__18155;
count__18148 = G__18156;
i__18149 = G__18157;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__18146__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__18158 = cljs.core.next.call(null,seq__18146__$1);
var G__18159 = null;
var G__18160 = (0);
var G__18161 = (0);
seq__18146 = G__18158;
chunk__18147 = G__18159;
count__18148 = G__18160;
i__18149 = G__18161;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__18163 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__18163,(0),null);var start_wrap = cljs.core.nth.call(null,vec__18163,(1),null);var end_wrap = cljs.core.nth.call(null,vec__18163,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__18164 = wrapper.lastChild;
var G__18165 = (level - (1));
wrapper = G__18164;
level = G__18165;
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
domina.DomContent = (function (){var obj18167 = {};return obj18167;
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
log_debug.cljs$lang$applyTo = (function (arglist__18168){
var mesg = cljs.core.seq(arglist__18168);
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
log.cljs$lang$applyTo = (function (arglist__18169){
var mesg = cljs.core.seq(arglist__18169);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__18170){
var contents = cljs.core.seq(arglist__18170);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__18171_SHARP_){return p1__18171_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__18172_SHARP_,p2__18173_SHARP_){return goog.dom.insertChildAt(p1__18172_SHARP_,p2__18173_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18175_SHARP_,p2__18174_SHARP_){return goog.dom.insertSiblingBefore(p2__18174_SHARP_,p1__18175_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__18177_SHARP_,p2__18176_SHARP_){return goog.dom.insertSiblingAfter(p2__18176_SHARP_,p1__18177_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__18179_SHARP_,p2__18178_SHARP_){return goog.dom.replaceNode(p2__18178_SHARP_,p1__18179_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__18184_18188 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18185_18189 = null;var count__18186_18190 = (0);var i__18187_18191 = (0);while(true){
if((i__18187_18191 < count__18186_18190))
{var n_18192 = cljs.core._nth.call(null,chunk__18185_18189,i__18187_18191);goog.style.setStyle(n_18192,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18193 = seq__18184_18188;
var G__18194 = chunk__18185_18189;
var G__18195 = count__18186_18190;
var G__18196 = (i__18187_18191 + (1));
seq__18184_18188 = G__18193;
chunk__18185_18189 = G__18194;
count__18186_18190 = G__18195;
i__18187_18191 = G__18196;
continue;
}
} else
{var temp__4126__auto___18197 = cljs.core.seq.call(null,seq__18184_18188);if(temp__4126__auto___18197)
{var seq__18184_18198__$1 = temp__4126__auto___18197;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18184_18198__$1))
{var c__4299__auto___18199 = cljs.core.chunk_first.call(null,seq__18184_18198__$1);{
var G__18200 = cljs.core.chunk_rest.call(null,seq__18184_18198__$1);
var G__18201 = c__4299__auto___18199;
var G__18202 = cljs.core.count.call(null,c__4299__auto___18199);
var G__18203 = (0);
seq__18184_18188 = G__18200;
chunk__18185_18189 = G__18201;
count__18186_18190 = G__18202;
i__18187_18191 = G__18203;
continue;
}
} else
{var n_18204 = cljs.core.first.call(null,seq__18184_18198__$1);goog.style.setStyle(n_18204,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18205 = cljs.core.next.call(null,seq__18184_18198__$1);
var G__18206 = null;
var G__18207 = (0);
var G__18208 = (0);
seq__18184_18188 = G__18205;
chunk__18185_18189 = G__18206;
count__18186_18190 = G__18207;
i__18187_18191 = G__18208;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__18209){
var content = cljs.core.first(arglist__18209);
arglist__18209 = cljs.core.next(arglist__18209);
var name = cljs.core.first(arglist__18209);
var value = cljs.core.rest(arglist__18209);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__18214_18218 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18215_18219 = null;var count__18216_18220 = (0);var i__18217_18221 = (0);while(true){
if((i__18217_18221 < count__18216_18220))
{var n_18222 = cljs.core._nth.call(null,chunk__18215_18219,i__18217_18221);n_18222.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18223 = seq__18214_18218;
var G__18224 = chunk__18215_18219;
var G__18225 = count__18216_18220;
var G__18226 = (i__18217_18221 + (1));
seq__18214_18218 = G__18223;
chunk__18215_18219 = G__18224;
count__18216_18220 = G__18225;
i__18217_18221 = G__18226;
continue;
}
} else
{var temp__4126__auto___18227 = cljs.core.seq.call(null,seq__18214_18218);if(temp__4126__auto___18227)
{var seq__18214_18228__$1 = temp__4126__auto___18227;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18214_18228__$1))
{var c__4299__auto___18229 = cljs.core.chunk_first.call(null,seq__18214_18228__$1);{
var G__18230 = cljs.core.chunk_rest.call(null,seq__18214_18228__$1);
var G__18231 = c__4299__auto___18229;
var G__18232 = cljs.core.count.call(null,c__4299__auto___18229);
var G__18233 = (0);
seq__18214_18218 = G__18230;
chunk__18215_18219 = G__18231;
count__18216_18220 = G__18232;
i__18217_18221 = G__18233;
continue;
}
} else
{var n_18234 = cljs.core.first.call(null,seq__18214_18228__$1);n_18234.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__18235 = cljs.core.next.call(null,seq__18214_18228__$1);
var G__18236 = null;
var G__18237 = (0);
var G__18238 = (0);
seq__18214_18218 = G__18235;
chunk__18215_18219 = G__18236;
count__18216_18220 = G__18237;
i__18217_18221 = G__18238;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__18239){
var content = cljs.core.first(arglist__18239);
arglist__18239 = cljs.core.next(arglist__18239);
var name = cljs.core.first(arglist__18239);
var value = cljs.core.rest(arglist__18239);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__18244_18248 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18245_18249 = null;var count__18246_18250 = (0);var i__18247_18251 = (0);while(true){
if((i__18247_18251 < count__18246_18250))
{var n_18252 = cljs.core._nth.call(null,chunk__18245_18249,i__18247_18251);n_18252.removeAttribute(cljs.core.name.call(null,name));
{
var G__18253 = seq__18244_18248;
var G__18254 = chunk__18245_18249;
var G__18255 = count__18246_18250;
var G__18256 = (i__18247_18251 + (1));
seq__18244_18248 = G__18253;
chunk__18245_18249 = G__18254;
count__18246_18250 = G__18255;
i__18247_18251 = G__18256;
continue;
}
} else
{var temp__4126__auto___18257 = cljs.core.seq.call(null,seq__18244_18248);if(temp__4126__auto___18257)
{var seq__18244_18258__$1 = temp__4126__auto___18257;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18244_18258__$1))
{var c__4299__auto___18259 = cljs.core.chunk_first.call(null,seq__18244_18258__$1);{
var G__18260 = cljs.core.chunk_rest.call(null,seq__18244_18258__$1);
var G__18261 = c__4299__auto___18259;
var G__18262 = cljs.core.count.call(null,c__4299__auto___18259);
var G__18263 = (0);
seq__18244_18248 = G__18260;
chunk__18245_18249 = G__18261;
count__18246_18250 = G__18262;
i__18247_18251 = G__18263;
continue;
}
} else
{var n_18264 = cljs.core.first.call(null,seq__18244_18258__$1);n_18264.removeAttribute(cljs.core.name.call(null,name));
{
var G__18265 = cljs.core.next.call(null,seq__18244_18258__$1);
var G__18266 = null;
var G__18267 = (0);
var G__18268 = (0);
seq__18244_18248 = G__18265;
chunk__18245_18249 = G__18266;
count__18246_18250 = G__18267;
i__18247_18251 = G__18268;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__18270 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__18270,(0),null);var v = cljs.core.nth.call(null,vec__18270,(1),null);if(cljs.core.truth_((function (){var and__3531__auto__ = k;if(cljs.core.truth_(and__3531__auto__))
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
return (function (p1__18271_SHARP_){var attr = attrs__$1.item(p1__18271_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
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
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__18278_18284 = cljs.core.seq.call(null,styles);var chunk__18279_18285 = null;var count__18280_18286 = (0);var i__18281_18287 = (0);while(true){
if((i__18281_18287 < count__18280_18286))
{var vec__18282_18288 = cljs.core._nth.call(null,chunk__18279_18285,i__18281_18287);var name_18289 = cljs.core.nth.call(null,vec__18282_18288,(0),null);var value_18290 = cljs.core.nth.call(null,vec__18282_18288,(1),null);domina.set_style_BANG_.call(null,content,name_18289,value_18290);
{
var G__18291 = seq__18278_18284;
var G__18292 = chunk__18279_18285;
var G__18293 = count__18280_18286;
var G__18294 = (i__18281_18287 + (1));
seq__18278_18284 = G__18291;
chunk__18279_18285 = G__18292;
count__18280_18286 = G__18293;
i__18281_18287 = G__18294;
continue;
}
} else
{var temp__4126__auto___18295 = cljs.core.seq.call(null,seq__18278_18284);if(temp__4126__auto___18295)
{var seq__18278_18296__$1 = temp__4126__auto___18295;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18278_18296__$1))
{var c__4299__auto___18297 = cljs.core.chunk_first.call(null,seq__18278_18296__$1);{
var G__18298 = cljs.core.chunk_rest.call(null,seq__18278_18296__$1);
var G__18299 = c__4299__auto___18297;
var G__18300 = cljs.core.count.call(null,c__4299__auto___18297);
var G__18301 = (0);
seq__18278_18284 = G__18298;
chunk__18279_18285 = G__18299;
count__18280_18286 = G__18300;
i__18281_18287 = G__18301;
continue;
}
} else
{var vec__18283_18302 = cljs.core.first.call(null,seq__18278_18296__$1);var name_18303 = cljs.core.nth.call(null,vec__18283_18302,(0),null);var value_18304 = cljs.core.nth.call(null,vec__18283_18302,(1),null);domina.set_style_BANG_.call(null,content,name_18303,value_18304);
{
var G__18305 = cljs.core.next.call(null,seq__18278_18296__$1);
var G__18306 = null;
var G__18307 = (0);
var G__18308 = (0);
seq__18278_18284 = G__18305;
chunk__18279_18285 = G__18306;
count__18280_18286 = G__18307;
i__18281_18287 = G__18308;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__18315_18321 = cljs.core.seq.call(null,attrs);var chunk__18316_18322 = null;var count__18317_18323 = (0);var i__18318_18324 = (0);while(true){
if((i__18318_18324 < count__18317_18323))
{var vec__18319_18325 = cljs.core._nth.call(null,chunk__18316_18322,i__18318_18324);var name_18326 = cljs.core.nth.call(null,vec__18319_18325,(0),null);var value_18327 = cljs.core.nth.call(null,vec__18319_18325,(1),null);domina.set_attr_BANG_.call(null,content,name_18326,value_18327);
{
var G__18328 = seq__18315_18321;
var G__18329 = chunk__18316_18322;
var G__18330 = count__18317_18323;
var G__18331 = (i__18318_18324 + (1));
seq__18315_18321 = G__18328;
chunk__18316_18322 = G__18329;
count__18317_18323 = G__18330;
i__18318_18324 = G__18331;
continue;
}
} else
{var temp__4126__auto___18332 = cljs.core.seq.call(null,seq__18315_18321);if(temp__4126__auto___18332)
{var seq__18315_18333__$1 = temp__4126__auto___18332;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18315_18333__$1))
{var c__4299__auto___18334 = cljs.core.chunk_first.call(null,seq__18315_18333__$1);{
var G__18335 = cljs.core.chunk_rest.call(null,seq__18315_18333__$1);
var G__18336 = c__4299__auto___18334;
var G__18337 = cljs.core.count.call(null,c__4299__auto___18334);
var G__18338 = (0);
seq__18315_18321 = G__18335;
chunk__18316_18322 = G__18336;
count__18317_18323 = G__18337;
i__18318_18324 = G__18338;
continue;
}
} else
{var vec__18320_18339 = cljs.core.first.call(null,seq__18315_18333__$1);var name_18340 = cljs.core.nth.call(null,vec__18320_18339,(0),null);var value_18341 = cljs.core.nth.call(null,vec__18320_18339,(1),null);domina.set_attr_BANG_.call(null,content,name_18340,value_18341);
{
var G__18342 = cljs.core.next.call(null,seq__18315_18333__$1);
var G__18343 = null;
var G__18344 = (0);
var G__18345 = (0);
seq__18315_18321 = G__18342;
chunk__18316_18322 = G__18343;
count__18317_18323 = G__18344;
i__18318_18324 = G__18345;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__18350_18354 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18351_18355 = null;var count__18352_18356 = (0);var i__18353_18357 = (0);while(true){
if((i__18353_18357 < count__18352_18356))
{var node_18358 = cljs.core._nth.call(null,chunk__18351_18355,i__18353_18357);goog.dom.classes.add(node_18358,class$);
{
var G__18359 = seq__18350_18354;
var G__18360 = chunk__18351_18355;
var G__18361 = count__18352_18356;
var G__18362 = (i__18353_18357 + (1));
seq__18350_18354 = G__18359;
chunk__18351_18355 = G__18360;
count__18352_18356 = G__18361;
i__18353_18357 = G__18362;
continue;
}
} else
{var temp__4126__auto___18363 = cljs.core.seq.call(null,seq__18350_18354);if(temp__4126__auto___18363)
{var seq__18350_18364__$1 = temp__4126__auto___18363;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18350_18364__$1))
{var c__4299__auto___18365 = cljs.core.chunk_first.call(null,seq__18350_18364__$1);{
var G__18366 = cljs.core.chunk_rest.call(null,seq__18350_18364__$1);
var G__18367 = c__4299__auto___18365;
var G__18368 = cljs.core.count.call(null,c__4299__auto___18365);
var G__18369 = (0);
seq__18350_18354 = G__18366;
chunk__18351_18355 = G__18367;
count__18352_18356 = G__18368;
i__18353_18357 = G__18369;
continue;
}
} else
{var node_18370 = cljs.core.first.call(null,seq__18350_18364__$1);goog.dom.classes.add(node_18370,class$);
{
var G__18371 = cljs.core.next.call(null,seq__18350_18364__$1);
var G__18372 = null;
var G__18373 = (0);
var G__18374 = (0);
seq__18350_18354 = G__18371;
chunk__18351_18355 = G__18372;
count__18352_18356 = G__18373;
i__18353_18357 = G__18374;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__18379_18383 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18380_18384 = null;var count__18381_18385 = (0);var i__18382_18386 = (0);while(true){
if((i__18382_18386 < count__18381_18385))
{var node_18387 = cljs.core._nth.call(null,chunk__18380_18384,i__18382_18386);goog.dom.classes.remove(node_18387,class$);
{
var G__18388 = seq__18379_18383;
var G__18389 = chunk__18380_18384;
var G__18390 = count__18381_18385;
var G__18391 = (i__18382_18386 + (1));
seq__18379_18383 = G__18388;
chunk__18380_18384 = G__18389;
count__18381_18385 = G__18390;
i__18382_18386 = G__18391;
continue;
}
} else
{var temp__4126__auto___18392 = cljs.core.seq.call(null,seq__18379_18383);if(temp__4126__auto___18392)
{var seq__18379_18393__$1 = temp__4126__auto___18392;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18379_18393__$1))
{var c__4299__auto___18394 = cljs.core.chunk_first.call(null,seq__18379_18393__$1);{
var G__18395 = cljs.core.chunk_rest.call(null,seq__18379_18393__$1);
var G__18396 = c__4299__auto___18394;
var G__18397 = cljs.core.count.call(null,c__4299__auto___18394);
var G__18398 = (0);
seq__18379_18383 = G__18395;
chunk__18380_18384 = G__18396;
count__18381_18385 = G__18397;
i__18382_18386 = G__18398;
continue;
}
} else
{var node_18399 = cljs.core.first.call(null,seq__18379_18393__$1);goog.dom.classes.remove(node_18399,class$);
{
var G__18400 = cljs.core.next.call(null,seq__18379_18393__$1);
var G__18401 = null;
var G__18402 = (0);
var G__18403 = (0);
seq__18379_18383 = G__18400;
chunk__18380_18384 = G__18401;
count__18381_18385 = G__18402;
i__18382_18386 = G__18403;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__18408_18412 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18409_18413 = null;var count__18410_18414 = (0);var i__18411_18415 = (0);while(true){
if((i__18411_18415 < count__18410_18414))
{var node_18416 = cljs.core._nth.call(null,chunk__18409_18413,i__18411_18415);goog.dom.classes.toggle(node_18416,class$);
{
var G__18417 = seq__18408_18412;
var G__18418 = chunk__18409_18413;
var G__18419 = count__18410_18414;
var G__18420 = (i__18411_18415 + (1));
seq__18408_18412 = G__18417;
chunk__18409_18413 = G__18418;
count__18410_18414 = G__18419;
i__18411_18415 = G__18420;
continue;
}
} else
{var temp__4126__auto___18421 = cljs.core.seq.call(null,seq__18408_18412);if(temp__4126__auto___18421)
{var seq__18408_18422__$1 = temp__4126__auto___18421;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18408_18422__$1))
{var c__4299__auto___18423 = cljs.core.chunk_first.call(null,seq__18408_18422__$1);{
var G__18424 = cljs.core.chunk_rest.call(null,seq__18408_18422__$1);
var G__18425 = c__4299__auto___18423;
var G__18426 = cljs.core.count.call(null,c__4299__auto___18423);
var G__18427 = (0);
seq__18408_18412 = G__18424;
chunk__18409_18413 = G__18425;
count__18410_18414 = G__18426;
i__18411_18415 = G__18427;
continue;
}
} else
{var node_18428 = cljs.core.first.call(null,seq__18408_18422__$1);goog.dom.classes.toggle(node_18428,class$);
{
var G__18429 = cljs.core.next.call(null,seq__18408_18422__$1);
var G__18430 = null;
var G__18431 = (0);
var G__18432 = (0);
seq__18408_18412 = G__18429;
chunk__18409_18413 = G__18430;
count__18410_18414 = G__18431;
i__18411_18415 = G__18432;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_18441__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__18437_18442 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18438_18443 = null;var count__18439_18444 = (0);var i__18440_18445 = (0);while(true){
if((i__18440_18445 < count__18439_18444))
{var node_18446 = cljs.core._nth.call(null,chunk__18438_18443,i__18440_18445);goog.dom.classes.set(node_18446,classes_18441__$1);
{
var G__18447 = seq__18437_18442;
var G__18448 = chunk__18438_18443;
var G__18449 = count__18439_18444;
var G__18450 = (i__18440_18445 + (1));
seq__18437_18442 = G__18447;
chunk__18438_18443 = G__18448;
count__18439_18444 = G__18449;
i__18440_18445 = G__18450;
continue;
}
} else
{var temp__4126__auto___18451 = cljs.core.seq.call(null,seq__18437_18442);if(temp__4126__auto___18451)
{var seq__18437_18452__$1 = temp__4126__auto___18451;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18437_18452__$1))
{var c__4299__auto___18453 = cljs.core.chunk_first.call(null,seq__18437_18452__$1);{
var G__18454 = cljs.core.chunk_rest.call(null,seq__18437_18452__$1);
var G__18455 = c__4299__auto___18453;
var G__18456 = cljs.core.count.call(null,c__4299__auto___18453);
var G__18457 = (0);
seq__18437_18442 = G__18454;
chunk__18438_18443 = G__18455;
count__18439_18444 = G__18456;
i__18440_18445 = G__18457;
continue;
}
} else
{var node_18458 = cljs.core.first.call(null,seq__18437_18452__$1);goog.dom.classes.set(node_18458,classes_18441__$1);
{
var G__18459 = cljs.core.next.call(null,seq__18437_18452__$1);
var G__18460 = null;
var G__18461 = (0);
var G__18462 = (0);
seq__18437_18442 = G__18459;
chunk__18438_18443 = G__18460;
count__18439_18444 = G__18461;
i__18440_18445 = G__18462;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__18467_18471 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18468_18472 = null;var count__18469_18473 = (0);var i__18470_18474 = (0);while(true){
if((i__18470_18474 < count__18469_18473))
{var node_18475 = cljs.core._nth.call(null,chunk__18468_18472,i__18470_18474);goog.dom.setTextContent(node_18475,value);
{
var G__18476 = seq__18467_18471;
var G__18477 = chunk__18468_18472;
var G__18478 = count__18469_18473;
var G__18479 = (i__18470_18474 + (1));
seq__18467_18471 = G__18476;
chunk__18468_18472 = G__18477;
count__18469_18473 = G__18478;
i__18470_18474 = G__18479;
continue;
}
} else
{var temp__4126__auto___18480 = cljs.core.seq.call(null,seq__18467_18471);if(temp__4126__auto___18480)
{var seq__18467_18481__$1 = temp__4126__auto___18480;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18467_18481__$1))
{var c__4299__auto___18482 = cljs.core.chunk_first.call(null,seq__18467_18481__$1);{
var G__18483 = cljs.core.chunk_rest.call(null,seq__18467_18481__$1);
var G__18484 = c__4299__auto___18482;
var G__18485 = cljs.core.count.call(null,c__4299__auto___18482);
var G__18486 = (0);
seq__18467_18471 = G__18483;
chunk__18468_18472 = G__18484;
count__18469_18473 = G__18485;
i__18470_18474 = G__18486;
continue;
}
} else
{var node_18487 = cljs.core.first.call(null,seq__18467_18481__$1);goog.dom.setTextContent(node_18487,value);
{
var G__18488 = cljs.core.next.call(null,seq__18467_18481__$1);
var G__18489 = null;
var G__18490 = (0);
var G__18491 = (0);
seq__18467_18471 = G__18488;
chunk__18468_18472 = G__18489;
count__18469_18473 = G__18490;
i__18470_18474 = G__18491;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__18496_18500 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18497_18501 = null;var count__18498_18502 = (0);var i__18499_18503 = (0);while(true){
if((i__18499_18503 < count__18498_18502))
{var node_18504 = cljs.core._nth.call(null,chunk__18497_18501,i__18499_18503);goog.dom.forms.setValue(node_18504,value);
{
var G__18505 = seq__18496_18500;
var G__18506 = chunk__18497_18501;
var G__18507 = count__18498_18502;
var G__18508 = (i__18499_18503 + (1));
seq__18496_18500 = G__18505;
chunk__18497_18501 = G__18506;
count__18498_18502 = G__18507;
i__18499_18503 = G__18508;
continue;
}
} else
{var temp__4126__auto___18509 = cljs.core.seq.call(null,seq__18496_18500);if(temp__4126__auto___18509)
{var seq__18496_18510__$1 = temp__4126__auto___18509;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18496_18510__$1))
{var c__4299__auto___18511 = cljs.core.chunk_first.call(null,seq__18496_18510__$1);{
var G__18512 = cljs.core.chunk_rest.call(null,seq__18496_18510__$1);
var G__18513 = c__4299__auto___18511;
var G__18514 = cljs.core.count.call(null,c__4299__auto___18511);
var G__18515 = (0);
seq__18496_18500 = G__18512;
chunk__18497_18501 = G__18513;
count__18498_18502 = G__18514;
i__18499_18503 = G__18515;
continue;
}
} else
{var node_18516 = cljs.core.first.call(null,seq__18496_18510__$1);goog.dom.forms.setValue(node_18516,value);
{
var G__18517 = cljs.core.next.call(null,seq__18496_18510__$1);
var G__18518 = null;
var G__18519 = (0);
var G__18520 = (0);
seq__18496_18500 = G__18517;
chunk__18497_18501 = G__18518;
count__18498_18502 = G__18519;
i__18499_18503 = G__18520;
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
{var value_18531 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__18527_18532 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__18528_18533 = null;var count__18529_18534 = (0);var i__18530_18535 = (0);while(true){
if((i__18530_18535 < count__18529_18534))
{var node_18536 = cljs.core._nth.call(null,chunk__18528_18533,i__18530_18535);node_18536.innerHTML = value_18531;
{
var G__18537 = seq__18527_18532;
var G__18538 = chunk__18528_18533;
var G__18539 = count__18529_18534;
var G__18540 = (i__18530_18535 + (1));
seq__18527_18532 = G__18537;
chunk__18528_18533 = G__18538;
count__18529_18534 = G__18539;
i__18530_18535 = G__18540;
continue;
}
} else
{var temp__4126__auto___18541 = cljs.core.seq.call(null,seq__18527_18532);if(temp__4126__auto___18541)
{var seq__18527_18542__$1 = temp__4126__auto___18541;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18527_18542__$1))
{var c__4299__auto___18543 = cljs.core.chunk_first.call(null,seq__18527_18542__$1);{
var G__18544 = cljs.core.chunk_rest.call(null,seq__18527_18542__$1);
var G__18545 = c__4299__auto___18543;
var G__18546 = cljs.core.count.call(null,c__4299__auto___18543);
var G__18547 = (0);
seq__18527_18532 = G__18544;
chunk__18528_18533 = G__18545;
count__18529_18534 = G__18546;
i__18530_18535 = G__18547;
continue;
}
} else
{var node_18548 = cljs.core.first.call(null,seq__18527_18542__$1);node_18548.innerHTML = value_18531;
{
var G__18549 = cljs.core.next.call(null,seq__18527_18542__$1);
var G__18550 = null;
var G__18551 = (0);
var G__18552 = (0);
seq__18527_18532 = G__18549;
chunk__18528_18533 = G__18550;
count__18529_18534 = G__18551;
i__18530_18535 = G__18552;
continue;
}
}
} else
{}
}
break;
}
}catch (e18526){if((e18526 instanceof Error))
{var e_18553 = e18526;domina.replace_children_BANG_.call(null,content,value_18531);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e18526;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__18560_18564 = cljs.core.seq.call(null,children);var chunk__18561_18565 = null;var count__18562_18566 = (0);var i__18563_18567 = (0);while(true){
if((i__18563_18567 < count__18562_18566))
{var child_18568 = cljs.core._nth.call(null,chunk__18561_18565,i__18563_18567);frag.appendChild(child_18568);
{
var G__18569 = seq__18560_18564;
var G__18570 = chunk__18561_18565;
var G__18571 = count__18562_18566;
var G__18572 = (i__18563_18567 + (1));
seq__18560_18564 = G__18569;
chunk__18561_18565 = G__18570;
count__18562_18566 = G__18571;
i__18563_18567 = G__18572;
continue;
}
} else
{var temp__4126__auto___18573 = cljs.core.seq.call(null,seq__18560_18564);if(temp__4126__auto___18573)
{var seq__18560_18574__$1 = temp__4126__auto___18573;if(cljs.core.chunked_seq_QMARK_.call(null,seq__18560_18574__$1))
{var c__4299__auto___18575 = cljs.core.chunk_first.call(null,seq__18560_18574__$1);{
var G__18576 = cljs.core.chunk_rest.call(null,seq__18560_18574__$1);
var G__18577 = c__4299__auto___18575;
var G__18578 = cljs.core.count.call(null,c__4299__auto___18575);
var G__18579 = (0);
seq__18560_18564 = G__18576;
chunk__18561_18565 = G__18577;
count__18562_18566 = G__18578;
i__18563_18567 = G__18579;
continue;
}
} else
{var child_18580 = cljs.core.first.call(null,seq__18560_18574__$1);frag.appendChild(child_18580);
{
var G__18581 = cljs.core.next.call(null,seq__18560_18574__$1);
var G__18582 = null;
var G__18583 = (0);
var G__18584 = (0);
seq__18560_18564 = G__18581;
chunk__18561_18565 = G__18582;
count__18562_18566 = G__18583;
i__18563_18567 = G__18584;
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
return (function (p1__18554_SHARP_,p2__18555_SHARP_){return f.call(null,p1__18554_SHARP_,p2__18555_SHARP_);
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
{if((function (){var G__18586 = list_thing;if(G__18586)
{var bit__4193__auto__ = (G__18586.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__18586.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18586.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18586);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18586);
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
{if((function (){var G__18587 = content;if(G__18587)
{var bit__4193__auto__ = (G__18587.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__18587.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18587.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18587);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18587);
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
{if((function (){var G__18588 = content;if(G__18588)
{var bit__4193__auto__ = (G__18588.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4193__auto__) || (G__18588.cljs$core$ISeqable$))
{return true;
} else
{if((!G__18588.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18588);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__18588);
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

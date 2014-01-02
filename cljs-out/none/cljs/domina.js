// Compiled by ClojureScript 0.0-2080
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
var opt_wrapper_19089 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_19090 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<table>","</table>"], null);var cell_wrapper_19091 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [3,"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["col",new cljs.core.Keyword(null,"default","default",2558708147),"tfoot","caption","optgroup","legend","area","td","thead","th","option","tbody","tr","colgroup"],[new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [0,"",""], null),table_section_wrapper_19090,table_section_wrapper_19090,opt_wrapper_19089,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<fieldset>","</fieldset>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [1,"<map>","</map>"], null),cell_wrapper_19091,table_section_wrapper_19090,cell_wrapper_19091,opt_wrapper_19089,table_section_wrapper_19090,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [2,"<table><tbody>","</tbody></table>"], null),table_section_wrapper_19090]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3279__auto__ = div.firstChild;if(cljs.core.truth_(and__3279__auto__))
{return div.firstChild.childNodes;
} else
{return and__3279__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__19096 = cljs.core.seq.call(null,tbody);var chunk__19097 = null;var count__19098 = 0;var i__19099 = 0;while(true){
if((i__19099 < count__19098))
{var child = cljs.core._nth.call(null,chunk__19097,i__19099);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19100 = seq__19096;
var G__19101 = chunk__19097;
var G__19102 = count__19098;
var G__19103 = (i__19099 + 1);
seq__19096 = G__19100;
chunk__19097 = G__19101;
count__19098 = G__19102;
i__19099 = G__19103;
continue;
}
} else
{var temp__4092__auto__ = cljs.core.seq.call(null,seq__19096);if(temp__4092__auto__)
{var seq__19096__$1 = temp__4092__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19096__$1))
{var c__4015__auto__ = cljs.core.chunk_first.call(null,seq__19096__$1);{
var G__19104 = cljs.core.chunk_rest.call(null,seq__19096__$1);
var G__19105 = c__4015__auto__;
var G__19106 = cljs.core.count.call(null,c__4015__auto__);
var G__19107 = 0;
seq__19096 = G__19104;
chunk__19097 = G__19105;
count__19098 = G__19106;
i__19099 = G__19107;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__19096__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,0)))
{child.parentNode.removeChild(child);
} else
{}
{
var G__19108 = cljs.core.next.call(null,seq__19096__$1);
var G__19109 = null;
var G__19110 = 0;
var G__19111 = 0;
seq__19096 = G__19108;
chunk__19097 = G__19109;
count__19098 = G__19110;
i__19099 = G__19111;
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
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();var vec__19113 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",2558708147).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__19113,0,null);var start_wrap = cljs.core.nth.call(null,vec__19113,1,null);var end_wrap = cljs.core.nth.call(null,vec__19113,2,null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');
return div;
})();var level = depth;while(true){
if((level > 0))
{{
var G__19114 = wrapper.lastChild;
var G__19115 = (level - 1);
wrapper = G__19114;
level = G__19115;
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
if(cljs.core.truth_((function (){var and__3279__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3279__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3279__auto__;
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
domina.DomContent = (function (){var obj19117 = {};return obj19117;
})();
domina.nodes = (function nodes(content){if((function (){var and__3279__auto__ = content;if(and__3279__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3279__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__3894__auto__ = (((content == null))?null:content);return (function (){var or__3291__auto__ = (domina.nodes[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.nodes["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3279__auto__ = nodeseq;if(and__3279__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3279__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__3894__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3291__auto__ = (domina.single_node[goog.typeOf(x__3894__auto__)]);if(or__3291__auto__)
{return or__3291__auto__;
} else
{var or__3291__auto____$1 = (domina.single_node["_"]);if(or__3291__auto____$1)
{return or__3291__auto____$1;
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
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3279__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3279__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3279__auto__;
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
log_debug.cljs$lang$applyTo = (function (arglist__19118){
var mesg = cljs.core.seq(arglist__19118);
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
log.cljs$lang$applyTo = (function (arglist__19119){
var mesg = cljs.core.seq(arglist__19119);
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
common_ancestor.cljs$lang$applyTo = (function (arglist__19120){
var contents = cljs.core.seq(arglist__19120);
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
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__19121_SHARP_){return p1__19121_SHARP_.cloneNode(true);
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
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__19122_SHARP_,p2__19123_SHARP_){return goog.dom.insertChildAt(p1__19122_SHARP_,p2__19123_SHARP_,idx);
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
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19125_SHARP_,p2__19124_SHARP_){return goog.dom.insertSiblingBefore(p2__19124_SHARP_,p1__19125_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__19127_SHARP_,p2__19126_SHARP_){return goog.dom.insertSiblingAfter(p2__19126_SHARP_,p1__19127_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__19129_SHARP_,p2__19128_SHARP_){return goog.dom.replaceNode(p2__19128_SHARP_,p1__19129_SHARP_);
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
var set_style_BANG___delegate = function (content,name,value){var seq__19134_19138 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19135_19139 = null;var count__19136_19140 = 0;var i__19137_19141 = 0;while(true){
if((i__19137_19141 < count__19136_19140))
{var n_19142 = cljs.core._nth.call(null,chunk__19135_19139,i__19137_19141);goog.style.setStyle(n_19142,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19143 = seq__19134_19138;
var G__19144 = chunk__19135_19139;
var G__19145 = count__19136_19140;
var G__19146 = (i__19137_19141 + 1);
seq__19134_19138 = G__19143;
chunk__19135_19139 = G__19144;
count__19136_19140 = G__19145;
i__19137_19141 = G__19146;
continue;
}
} else
{var temp__4092__auto___19147 = cljs.core.seq.call(null,seq__19134_19138);if(temp__4092__auto___19147)
{var seq__19134_19148__$1 = temp__4092__auto___19147;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19134_19148__$1))
{var c__4015__auto___19149 = cljs.core.chunk_first.call(null,seq__19134_19148__$1);{
var G__19150 = cljs.core.chunk_rest.call(null,seq__19134_19148__$1);
var G__19151 = c__4015__auto___19149;
var G__19152 = cljs.core.count.call(null,c__4015__auto___19149);
var G__19153 = 0;
seq__19134_19138 = G__19150;
chunk__19135_19139 = G__19151;
count__19136_19140 = G__19152;
i__19137_19141 = G__19153;
continue;
}
} else
{var n_19154 = cljs.core.first.call(null,seq__19134_19148__$1);goog.style.setStyle(n_19154,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19155 = cljs.core.next.call(null,seq__19134_19148__$1);
var G__19156 = null;
var G__19157 = 0;
var G__19158 = 0;
seq__19134_19138 = G__19155;
chunk__19135_19139 = G__19156;
count__19136_19140 = G__19157;
i__19137_19141 = G__19158;
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
set_style_BANG_.cljs$lang$applyTo = (function (arglist__19159){
var content = cljs.core.first(arglist__19159);
arglist__19159 = cljs.core.next(arglist__19159);
var name = cljs.core.first(arglist__19159);
var value = cljs.core.rest(arglist__19159);
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
var set_attr_BANG___delegate = function (content,name,value){var seq__19164_19168 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19165_19169 = null;var count__19166_19170 = 0;var i__19167_19171 = 0;while(true){
if((i__19167_19171 < count__19166_19170))
{var n_19172 = cljs.core._nth.call(null,chunk__19165_19169,i__19167_19171);n_19172.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19173 = seq__19164_19168;
var G__19174 = chunk__19165_19169;
var G__19175 = count__19166_19170;
var G__19176 = (i__19167_19171 + 1);
seq__19164_19168 = G__19173;
chunk__19165_19169 = G__19174;
count__19166_19170 = G__19175;
i__19167_19171 = G__19176;
continue;
}
} else
{var temp__4092__auto___19177 = cljs.core.seq.call(null,seq__19164_19168);if(temp__4092__auto___19177)
{var seq__19164_19178__$1 = temp__4092__auto___19177;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19164_19178__$1))
{var c__4015__auto___19179 = cljs.core.chunk_first.call(null,seq__19164_19178__$1);{
var G__19180 = cljs.core.chunk_rest.call(null,seq__19164_19178__$1);
var G__19181 = c__4015__auto___19179;
var G__19182 = cljs.core.count.call(null,c__4015__auto___19179);
var G__19183 = 0;
seq__19164_19168 = G__19180;
chunk__19165_19169 = G__19181;
count__19166_19170 = G__19182;
i__19167_19171 = G__19183;
continue;
}
} else
{var n_19184 = cljs.core.first.call(null,seq__19164_19178__$1);n_19184.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__19185 = cljs.core.next.call(null,seq__19164_19178__$1);
var G__19186 = null;
var G__19187 = 0;
var G__19188 = 0;
seq__19164_19168 = G__19185;
chunk__19165_19169 = G__19186;
count__19166_19170 = G__19187;
i__19167_19171 = G__19188;
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
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__19189){
var content = cljs.core.first(arglist__19189);
arglist__19189 = cljs.core.next(arglist__19189);
var name = cljs.core.first(arglist__19189);
var value = cljs.core.rest(arglist__19189);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__19194_19198 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19195_19199 = null;var count__19196_19200 = 0;var i__19197_19201 = 0;while(true){
if((i__19197_19201 < count__19196_19200))
{var n_19202 = cljs.core._nth.call(null,chunk__19195_19199,i__19197_19201);n_19202.removeAttribute(cljs.core.name.call(null,name));
{
var G__19203 = seq__19194_19198;
var G__19204 = chunk__19195_19199;
var G__19205 = count__19196_19200;
var G__19206 = (i__19197_19201 + 1);
seq__19194_19198 = G__19203;
chunk__19195_19199 = G__19204;
count__19196_19200 = G__19205;
i__19197_19201 = G__19206;
continue;
}
} else
{var temp__4092__auto___19207 = cljs.core.seq.call(null,seq__19194_19198);if(temp__4092__auto___19207)
{var seq__19194_19208__$1 = temp__4092__auto___19207;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19194_19208__$1))
{var c__4015__auto___19209 = cljs.core.chunk_first.call(null,seq__19194_19208__$1);{
var G__19210 = cljs.core.chunk_rest.call(null,seq__19194_19208__$1);
var G__19211 = c__4015__auto___19209;
var G__19212 = cljs.core.count.call(null,c__4015__auto___19209);
var G__19213 = 0;
seq__19194_19198 = G__19210;
chunk__19195_19199 = G__19211;
count__19196_19200 = G__19212;
i__19197_19201 = G__19213;
continue;
}
} else
{var n_19214 = cljs.core.first.call(null,seq__19194_19208__$1);n_19214.removeAttribute(cljs.core.name.call(null,name));
{
var G__19215 = cljs.core.next.call(null,seq__19194_19208__$1);
var G__19216 = null;
var G__19217 = 0;
var G__19218 = 0;
seq__19194_19198 = G__19215;
chunk__19195_19199 = G__19216;
count__19196_19200 = G__19217;
i__19197_19201 = G__19218;
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
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__19220 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__19220,0,null);var v = cljs.core.nth.call(null,vec__19220,1,null);if(cljs.core.truth_((function (){var and__3279__auto__ = k;if(cljs.core.truth_(and__3279__auto__))
{return v;
} else
{return and__3279__auto__;
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
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,(function (p1__19221_SHARP_){var attr = attrs__$1.item(p1__19221_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
}),cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__19228_19234 = cljs.core.seq.call(null,styles);var chunk__19229_19235 = null;var count__19230_19236 = 0;var i__19231_19237 = 0;while(true){
if((i__19231_19237 < count__19230_19236))
{var vec__19232_19238 = cljs.core._nth.call(null,chunk__19229_19235,i__19231_19237);var name_19239 = cljs.core.nth.call(null,vec__19232_19238,0,null);var value_19240 = cljs.core.nth.call(null,vec__19232_19238,1,null);domina.set_style_BANG_.call(null,content,name_19239,value_19240);
{
var G__19241 = seq__19228_19234;
var G__19242 = chunk__19229_19235;
var G__19243 = count__19230_19236;
var G__19244 = (i__19231_19237 + 1);
seq__19228_19234 = G__19241;
chunk__19229_19235 = G__19242;
count__19230_19236 = G__19243;
i__19231_19237 = G__19244;
continue;
}
} else
{var temp__4092__auto___19245 = cljs.core.seq.call(null,seq__19228_19234);if(temp__4092__auto___19245)
{var seq__19228_19246__$1 = temp__4092__auto___19245;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19228_19246__$1))
{var c__4015__auto___19247 = cljs.core.chunk_first.call(null,seq__19228_19246__$1);{
var G__19248 = cljs.core.chunk_rest.call(null,seq__19228_19246__$1);
var G__19249 = c__4015__auto___19247;
var G__19250 = cljs.core.count.call(null,c__4015__auto___19247);
var G__19251 = 0;
seq__19228_19234 = G__19248;
chunk__19229_19235 = G__19249;
count__19230_19236 = G__19250;
i__19231_19237 = G__19251;
continue;
}
} else
{var vec__19233_19252 = cljs.core.first.call(null,seq__19228_19246__$1);var name_19253 = cljs.core.nth.call(null,vec__19233_19252,0,null);var value_19254 = cljs.core.nth.call(null,vec__19233_19252,1,null);domina.set_style_BANG_.call(null,content,name_19253,value_19254);
{
var G__19255 = cljs.core.next.call(null,seq__19228_19246__$1);
var G__19256 = null;
var G__19257 = 0;
var G__19258 = 0;
seq__19228_19234 = G__19255;
chunk__19229_19235 = G__19256;
count__19230_19236 = G__19257;
i__19231_19237 = G__19258;
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
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__19265_19271 = cljs.core.seq.call(null,attrs);var chunk__19266_19272 = null;var count__19267_19273 = 0;var i__19268_19274 = 0;while(true){
if((i__19268_19274 < count__19267_19273))
{var vec__19269_19275 = cljs.core._nth.call(null,chunk__19266_19272,i__19268_19274);var name_19276 = cljs.core.nth.call(null,vec__19269_19275,0,null);var value_19277 = cljs.core.nth.call(null,vec__19269_19275,1,null);domina.set_attr_BANG_.call(null,content,name_19276,value_19277);
{
var G__19278 = seq__19265_19271;
var G__19279 = chunk__19266_19272;
var G__19280 = count__19267_19273;
var G__19281 = (i__19268_19274 + 1);
seq__19265_19271 = G__19278;
chunk__19266_19272 = G__19279;
count__19267_19273 = G__19280;
i__19268_19274 = G__19281;
continue;
}
} else
{var temp__4092__auto___19282 = cljs.core.seq.call(null,seq__19265_19271);if(temp__4092__auto___19282)
{var seq__19265_19283__$1 = temp__4092__auto___19282;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19265_19283__$1))
{var c__4015__auto___19284 = cljs.core.chunk_first.call(null,seq__19265_19283__$1);{
var G__19285 = cljs.core.chunk_rest.call(null,seq__19265_19283__$1);
var G__19286 = c__4015__auto___19284;
var G__19287 = cljs.core.count.call(null,c__4015__auto___19284);
var G__19288 = 0;
seq__19265_19271 = G__19285;
chunk__19266_19272 = G__19286;
count__19267_19273 = G__19287;
i__19268_19274 = G__19288;
continue;
}
} else
{var vec__19270_19289 = cljs.core.first.call(null,seq__19265_19283__$1);var name_19290 = cljs.core.nth.call(null,vec__19270_19289,0,null);var value_19291 = cljs.core.nth.call(null,vec__19270_19289,1,null);domina.set_attr_BANG_.call(null,content,name_19290,value_19291);
{
var G__19292 = cljs.core.next.call(null,seq__19265_19283__$1);
var G__19293 = null;
var G__19294 = 0;
var G__19295 = 0;
seq__19265_19271 = G__19292;
chunk__19266_19272 = G__19293;
count__19267_19273 = G__19294;
i__19268_19274 = G__19295;
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
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__19300_19304 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19301_19305 = null;var count__19302_19306 = 0;var i__19303_19307 = 0;while(true){
if((i__19303_19307 < count__19302_19306))
{var node_19308 = cljs.core._nth.call(null,chunk__19301_19305,i__19303_19307);goog.dom.classes.add(node_19308,class$);
{
var G__19309 = seq__19300_19304;
var G__19310 = chunk__19301_19305;
var G__19311 = count__19302_19306;
var G__19312 = (i__19303_19307 + 1);
seq__19300_19304 = G__19309;
chunk__19301_19305 = G__19310;
count__19302_19306 = G__19311;
i__19303_19307 = G__19312;
continue;
}
} else
{var temp__4092__auto___19313 = cljs.core.seq.call(null,seq__19300_19304);if(temp__4092__auto___19313)
{var seq__19300_19314__$1 = temp__4092__auto___19313;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19300_19314__$1))
{var c__4015__auto___19315 = cljs.core.chunk_first.call(null,seq__19300_19314__$1);{
var G__19316 = cljs.core.chunk_rest.call(null,seq__19300_19314__$1);
var G__19317 = c__4015__auto___19315;
var G__19318 = cljs.core.count.call(null,c__4015__auto___19315);
var G__19319 = 0;
seq__19300_19304 = G__19316;
chunk__19301_19305 = G__19317;
count__19302_19306 = G__19318;
i__19303_19307 = G__19319;
continue;
}
} else
{var node_19320 = cljs.core.first.call(null,seq__19300_19314__$1);goog.dom.classes.add(node_19320,class$);
{
var G__19321 = cljs.core.next.call(null,seq__19300_19314__$1);
var G__19322 = null;
var G__19323 = 0;
var G__19324 = 0;
seq__19300_19304 = G__19321;
chunk__19301_19305 = G__19322;
count__19302_19306 = G__19323;
i__19303_19307 = G__19324;
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
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__19329_19333 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19330_19334 = null;var count__19331_19335 = 0;var i__19332_19336 = 0;while(true){
if((i__19332_19336 < count__19331_19335))
{var node_19337 = cljs.core._nth.call(null,chunk__19330_19334,i__19332_19336);goog.dom.classes.remove(node_19337,class$);
{
var G__19338 = seq__19329_19333;
var G__19339 = chunk__19330_19334;
var G__19340 = count__19331_19335;
var G__19341 = (i__19332_19336 + 1);
seq__19329_19333 = G__19338;
chunk__19330_19334 = G__19339;
count__19331_19335 = G__19340;
i__19332_19336 = G__19341;
continue;
}
} else
{var temp__4092__auto___19342 = cljs.core.seq.call(null,seq__19329_19333);if(temp__4092__auto___19342)
{var seq__19329_19343__$1 = temp__4092__auto___19342;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19329_19343__$1))
{var c__4015__auto___19344 = cljs.core.chunk_first.call(null,seq__19329_19343__$1);{
var G__19345 = cljs.core.chunk_rest.call(null,seq__19329_19343__$1);
var G__19346 = c__4015__auto___19344;
var G__19347 = cljs.core.count.call(null,c__4015__auto___19344);
var G__19348 = 0;
seq__19329_19333 = G__19345;
chunk__19330_19334 = G__19346;
count__19331_19335 = G__19347;
i__19332_19336 = G__19348;
continue;
}
} else
{var node_19349 = cljs.core.first.call(null,seq__19329_19343__$1);goog.dom.classes.remove(node_19349,class$);
{
var G__19350 = cljs.core.next.call(null,seq__19329_19343__$1);
var G__19351 = null;
var G__19352 = 0;
var G__19353 = 0;
seq__19329_19333 = G__19350;
chunk__19330_19334 = G__19351;
count__19331_19335 = G__19352;
i__19332_19336 = G__19353;
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
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__19358_19362 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19359_19363 = null;var count__19360_19364 = 0;var i__19361_19365 = 0;while(true){
if((i__19361_19365 < count__19360_19364))
{var node_19366 = cljs.core._nth.call(null,chunk__19359_19363,i__19361_19365);goog.dom.classes.toggle(node_19366,class$);
{
var G__19367 = seq__19358_19362;
var G__19368 = chunk__19359_19363;
var G__19369 = count__19360_19364;
var G__19370 = (i__19361_19365 + 1);
seq__19358_19362 = G__19367;
chunk__19359_19363 = G__19368;
count__19360_19364 = G__19369;
i__19361_19365 = G__19370;
continue;
}
} else
{var temp__4092__auto___19371 = cljs.core.seq.call(null,seq__19358_19362);if(temp__4092__auto___19371)
{var seq__19358_19372__$1 = temp__4092__auto___19371;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19358_19372__$1))
{var c__4015__auto___19373 = cljs.core.chunk_first.call(null,seq__19358_19372__$1);{
var G__19374 = cljs.core.chunk_rest.call(null,seq__19358_19372__$1);
var G__19375 = c__4015__auto___19373;
var G__19376 = cljs.core.count.call(null,c__4015__auto___19373);
var G__19377 = 0;
seq__19358_19362 = G__19374;
chunk__19359_19363 = G__19375;
count__19360_19364 = G__19376;
i__19361_19365 = G__19377;
continue;
}
} else
{var node_19378 = cljs.core.first.call(null,seq__19358_19372__$1);goog.dom.classes.toggle(node_19378,class$);
{
var G__19379 = cljs.core.next.call(null,seq__19358_19372__$1);
var G__19380 = null;
var G__19381 = 0;
var G__19382 = 0;
seq__19358_19362 = G__19379;
chunk__19359_19363 = G__19380;
count__19360_19364 = G__19381;
i__19361_19365 = G__19382;
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
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_19391__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__19387_19392 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19388_19393 = null;var count__19389_19394 = 0;var i__19390_19395 = 0;while(true){
if((i__19390_19395 < count__19389_19394))
{var node_19396 = cljs.core._nth.call(null,chunk__19388_19393,i__19390_19395);goog.dom.classes.set(node_19396,classes_19391__$1);
{
var G__19397 = seq__19387_19392;
var G__19398 = chunk__19388_19393;
var G__19399 = count__19389_19394;
var G__19400 = (i__19390_19395 + 1);
seq__19387_19392 = G__19397;
chunk__19388_19393 = G__19398;
count__19389_19394 = G__19399;
i__19390_19395 = G__19400;
continue;
}
} else
{var temp__4092__auto___19401 = cljs.core.seq.call(null,seq__19387_19392);if(temp__4092__auto___19401)
{var seq__19387_19402__$1 = temp__4092__auto___19401;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19387_19402__$1))
{var c__4015__auto___19403 = cljs.core.chunk_first.call(null,seq__19387_19402__$1);{
var G__19404 = cljs.core.chunk_rest.call(null,seq__19387_19402__$1);
var G__19405 = c__4015__auto___19403;
var G__19406 = cljs.core.count.call(null,c__4015__auto___19403);
var G__19407 = 0;
seq__19387_19392 = G__19404;
chunk__19388_19393 = G__19405;
count__19389_19394 = G__19406;
i__19390_19395 = G__19407;
continue;
}
} else
{var node_19408 = cljs.core.first.call(null,seq__19387_19402__$1);goog.dom.classes.set(node_19408,classes_19391__$1);
{
var G__19409 = cljs.core.next.call(null,seq__19387_19402__$1);
var G__19410 = null;
var G__19411 = 0;
var G__19412 = 0;
seq__19387_19392 = G__19409;
chunk__19388_19393 = G__19410;
count__19389_19394 = G__19411;
i__19390_19395 = G__19412;
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
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__19417_19421 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19418_19422 = null;var count__19419_19423 = 0;var i__19420_19424 = 0;while(true){
if((i__19420_19424 < count__19419_19423))
{var node_19425 = cljs.core._nth.call(null,chunk__19418_19422,i__19420_19424);goog.dom.setTextContent(node_19425,value);
{
var G__19426 = seq__19417_19421;
var G__19427 = chunk__19418_19422;
var G__19428 = count__19419_19423;
var G__19429 = (i__19420_19424 + 1);
seq__19417_19421 = G__19426;
chunk__19418_19422 = G__19427;
count__19419_19423 = G__19428;
i__19420_19424 = G__19429;
continue;
}
} else
{var temp__4092__auto___19430 = cljs.core.seq.call(null,seq__19417_19421);if(temp__4092__auto___19430)
{var seq__19417_19431__$1 = temp__4092__auto___19430;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19417_19431__$1))
{var c__4015__auto___19432 = cljs.core.chunk_first.call(null,seq__19417_19431__$1);{
var G__19433 = cljs.core.chunk_rest.call(null,seq__19417_19431__$1);
var G__19434 = c__4015__auto___19432;
var G__19435 = cljs.core.count.call(null,c__4015__auto___19432);
var G__19436 = 0;
seq__19417_19421 = G__19433;
chunk__19418_19422 = G__19434;
count__19419_19423 = G__19435;
i__19420_19424 = G__19436;
continue;
}
} else
{var node_19437 = cljs.core.first.call(null,seq__19417_19431__$1);goog.dom.setTextContent(node_19437,value);
{
var G__19438 = cljs.core.next.call(null,seq__19417_19431__$1);
var G__19439 = null;
var G__19440 = 0;
var G__19441 = 0;
seq__19417_19421 = G__19438;
chunk__19418_19422 = G__19439;
count__19419_19423 = G__19440;
i__19420_19424 = G__19441;
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
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__19446_19450 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19447_19451 = null;var count__19448_19452 = 0;var i__19449_19453 = 0;while(true){
if((i__19449_19453 < count__19448_19452))
{var node_19454 = cljs.core._nth.call(null,chunk__19447_19451,i__19449_19453);goog.dom.forms.setValue(node_19454,value);
{
var G__19455 = seq__19446_19450;
var G__19456 = chunk__19447_19451;
var G__19457 = count__19448_19452;
var G__19458 = (i__19449_19453 + 1);
seq__19446_19450 = G__19455;
chunk__19447_19451 = G__19456;
count__19448_19452 = G__19457;
i__19449_19453 = G__19458;
continue;
}
} else
{var temp__4092__auto___19459 = cljs.core.seq.call(null,seq__19446_19450);if(temp__4092__auto___19459)
{var seq__19446_19460__$1 = temp__4092__auto___19459;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19446_19460__$1))
{var c__4015__auto___19461 = cljs.core.chunk_first.call(null,seq__19446_19460__$1);{
var G__19462 = cljs.core.chunk_rest.call(null,seq__19446_19460__$1);
var G__19463 = c__4015__auto___19461;
var G__19464 = cljs.core.count.call(null,c__4015__auto___19461);
var G__19465 = 0;
seq__19446_19450 = G__19462;
chunk__19447_19451 = G__19463;
count__19448_19452 = G__19464;
i__19449_19453 = G__19465;
continue;
}
} else
{var node_19466 = cljs.core.first.call(null,seq__19446_19460__$1);goog.dom.forms.setValue(node_19466,value);
{
var G__19467 = cljs.core.next.call(null,seq__19446_19460__$1);
var G__19468 = null;
var G__19469 = 0;
var G__19470 = 0;
seq__19446_19450 = G__19467;
chunk__19447_19451 = G__19468;
count__19448_19452 = G__19469;
i__19449_19453 = G__19470;
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
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3279__auto__ = allows_inner_html_QMARK_;if(and__3279__auto__)
{var and__3279__auto____$1 = (function (){var or__3291__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3279__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
}
})()))
{var value_19481 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__19477_19482 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__19478_19483 = null;var count__19479_19484 = 0;var i__19480_19485 = 0;while(true){
if((i__19480_19485 < count__19479_19484))
{var node_19486 = cljs.core._nth.call(null,chunk__19478_19483,i__19480_19485);node_19486.innerHTML = value_19481;
{
var G__19487 = seq__19477_19482;
var G__19488 = chunk__19478_19483;
var G__19489 = count__19479_19484;
var G__19490 = (i__19480_19485 + 1);
seq__19477_19482 = G__19487;
chunk__19478_19483 = G__19488;
count__19479_19484 = G__19489;
i__19480_19485 = G__19490;
continue;
}
} else
{var temp__4092__auto___19491 = cljs.core.seq.call(null,seq__19477_19482);if(temp__4092__auto___19491)
{var seq__19477_19492__$1 = temp__4092__auto___19491;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19477_19492__$1))
{var c__4015__auto___19493 = cljs.core.chunk_first.call(null,seq__19477_19492__$1);{
var G__19494 = cljs.core.chunk_rest.call(null,seq__19477_19492__$1);
var G__19495 = c__4015__auto___19493;
var G__19496 = cljs.core.count.call(null,c__4015__auto___19493);
var G__19497 = 0;
seq__19477_19482 = G__19494;
chunk__19478_19483 = G__19495;
count__19479_19484 = G__19496;
i__19480_19485 = G__19497;
continue;
}
} else
{var node_19498 = cljs.core.first.call(null,seq__19477_19492__$1);node_19498.innerHTML = value_19481;
{
var G__19499 = cljs.core.next.call(null,seq__19477_19492__$1);
var G__19500 = null;
var G__19501 = 0;
var G__19502 = 0;
seq__19477_19482 = G__19499;
chunk__19478_19483 = G__19500;
count__19479_19484 = G__19501;
i__19480_19485 = G__19502;
continue;
}
}
} else
{}
}
break;
}
}catch (e19476){if((e19476 instanceof Error))
{var e_19503 = e19476;domina.replace_children_BANG_.call(null,content,value_19481);
} else
{if(new cljs.core.Keyword(null,"else","else",1017020587))
{throw e19476;
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
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3279__auto__ = bubble;if(cljs.core.truth_(and__3279__auto__))
{return (value == null);
} else
{return and__3279__auto__;
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
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3291__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3291__auto__))
{return or__3291__auto__;
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
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__19510_19514 = cljs.core.seq.call(null,children);var chunk__19511_19515 = null;var count__19512_19516 = 0;var i__19513_19517 = 0;while(true){
if((i__19513_19517 < count__19512_19516))
{var child_19518 = cljs.core._nth.call(null,chunk__19511_19515,i__19513_19517);frag.appendChild(child_19518);
{
var G__19519 = seq__19510_19514;
var G__19520 = chunk__19511_19515;
var G__19521 = count__19512_19516;
var G__19522 = (i__19513_19517 + 1);
seq__19510_19514 = G__19519;
chunk__19511_19515 = G__19520;
count__19512_19516 = G__19521;
i__19513_19517 = G__19522;
continue;
}
} else
{var temp__4092__auto___19523 = cljs.core.seq.call(null,seq__19510_19514);if(temp__4092__auto___19523)
{var seq__19510_19524__$1 = temp__4092__auto___19523;if(cljs.core.chunked_seq_QMARK_.call(null,seq__19510_19524__$1))
{var c__4015__auto___19525 = cljs.core.chunk_first.call(null,seq__19510_19524__$1);{
var G__19526 = cljs.core.chunk_rest.call(null,seq__19510_19524__$1);
var G__19527 = c__4015__auto___19525;
var G__19528 = cljs.core.count.call(null,c__4015__auto___19525);
var G__19529 = 0;
seq__19510_19514 = G__19526;
chunk__19511_19515 = G__19527;
count__19512_19516 = G__19528;
i__19513_19517 = G__19529;
continue;
}
} else
{var child_19530 = cljs.core.first.call(null,seq__19510_19524__$1);frag.appendChild(child_19530);
{
var G__19531 = cljs.core.next.call(null,seq__19510_19524__$1);
var G__19532 = null;
var G__19533 = 0;
var G__19534 = 0;
seq__19510_19514 = G__19531;
chunk__19511_19515 = G__19532;
count__19512_19516 = G__19533;
i__19513_19517 = G__19534;
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
return cljs.core.doall.call(null,cljs.core.map.call(null,(function (p1__19504_SHARP_,p2__19505_SHARP_){return f.call(null,p1__19504_SHARP_,p2__19505_SHARP_);
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
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3279__auto__ = obj;if(cljs.core.truth_(and__3279__auto__))
{var and__3279__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3279__auto____$1)
{return obj.length;
} else
{return and__3279__auto____$1;
}
} else
{return and__3279__auto__;
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
{if((function (){var G__19536 = list_thing;if(G__19536)
{var bit__3917__auto__ = (G__19536.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19536.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19536.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19536);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19536);
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
{if((function (){var G__19537 = content;if(G__19537)
{var bit__3917__auto__ = (G__19537.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19537.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19537.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19537);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19537);
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
{if((function (){var G__19538 = content;if(G__19538)
{var bit__3917__auto__ = (G__19538.cljs$lang$protocol_mask$partition0$ & 8388608);if((bit__3917__auto__) || (G__19538.cljs$core$ISeqable$))
{return true;
} else
{if((!G__19538.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19538);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__19538);
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